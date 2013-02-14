<?php
//***************************************************************************************
//  Example:
//  ...
//  $ds = new PDODataSource(new PDO ("mssql:host=localhost;dbname=mydatabase","username","password"));
//  $ds->SelectCommand = "SELECT * FROM customers";
//  ...
//  $grid->MasterTable->DataSource = $ds;
//  ...
//***************************************************************************************

class PDODataSource extends DataSource
{
	var $SelectCommand;
	var $UpdateCommand;
	var $InsertCommand;
	var $DeleteCommand;
	
	var $_Link;
	
	
	function __construct($_pdo)
	{
		$this->_PDO = $_pdo;
	}
	
	
	
	function Count()
	{
		$_count_command = "SELECT COUNT(*) FROM (".$this->SelectCommand.") AS _TMP {where}";
		$_where = "";
		$_filters = $this->Filters;
		for($i=0;$i<sizeof($_filters);$i++)
		{
			$_value = $_filters[$i]->Value;
			$_value = "'".$_value."'";
			$_where.=" and ".$_filters[$i]->Field." ".$_filters[$i]->Expression." ".$_value;
		}
		if ($_where!="")
		{
			$_where = "WHERE ".substr($_where,5);
		}
		$_count_command = str_replace("{where}",$_where,$_count_command);
		
		$_statement = $this->_PDO->prepare($_count_command);
		
		$_statement->execute();

		$_result = $_statement->fetch(PDO::FETCH_NUM);

		return $_result[0];
	}	
	
	function GetFields()
	{
		$_fields = array();
		$_statement = $this->_PDO->prepare($this->SelectCommand);
		$_statement->execute();


		foreach(range(0, $_statement->columnCount() - 1) as $column_index)
		{
  			$meta = $_statement->getColumnMeta($column_index);
			$_field = array("Name"=>$meta["name"],"Type"=>$meta["native_type"],"Not_Null"=>false);
			array_push($_fields,$_field);			
		}
		return $_fields;
	}
	
	function GetData($_start=0,$_count=9999999)
	{
		//Return associate array of data

		$_tpl_select_command="";
		switch($this->_PDO->getAttribute(PDO::ATTR_DRIVER_NAME))
		{
			case "odbc":
			case "mssql":
				$_tpl_select_command =  "SELECT {limit} * FROM ({SelectCommand}) AS _TMP {where} {orderby} {groupby}";
					break;
			case "oci":
				$_tpl_select_command =  "SELECT * FROM (SELECT * FROM (SELECT * FROM ({SelectCommand}) AS _TMP {where} {orderby} {groupby}) WHERE ROWNUM<={start+count}) WHERE ROWNUM>={start}";
					break;
			case "mysql":
			case "sqlite2":
			default:
				$_tpl_select_command =  "SELECT * FROM ({SelectCommand}) AS _TMP {where} {orderby} {groupby} {limit}";
		}		
		
		//Filters
		$_where = "";
		$_filters = $this->Filters;
		for($i=0;$i<sizeof($_filters);$i++)
		{
			$_value = "'".$_filters[$i]->Value."'";
			$_where.=" and ".$_filters[$i]->Field." ".$_filters[$i]->Expression." ".$_value;
		}
		if ($_where!="")
		{
			$_where = "WHERE ".substr($_where,5);
		}
		//Order
		$_orderby = "";
		$_orders = $this->Sorts;
		for($i=0;$i<sizeof($_orders);$i++)
		{
			$_orderby.=", ".$_orders[$i]->Field." ".$_orders[$i]->Order;
		}
		if ($_orderby!="")
		{
			$_orderby = "ORDER BY ".substr($_orderby,2);
		}
		//Group
		$_groupby = "";
		$_groups = $this->Groups;
		for($i=0;$i<sizeof($_groups);$i++)
		{
			$_groupby.=", ".$_groups[$i]->Field;
		}
		if ($_groupby!="")
		{
			$_groupby = "GROUP BY ".substr($_groupby,2);
		}


		$_select_command = str_replace("{SelectCommand}",$this->SelectCommand,$_tpl_select_command);
		$_select_command = str_replace("{where}",$_where,$_select_command);
		$_select_command = str_replace("{orderby}",$_orderby,$_select_command);
		$_select_command = str_replace("{groupby}",$_groupby,$_select_command);

		//Limit
		$_limit = "";
		switch($this->_PDO->getAttribute(PDO::ATTR_DRIVER_NAME))
		{
			case "mssql":
					$_limit = "TOP ".($_start+$_count); 
					$_select_command = str_replace("{limit}",$_limit,$_select_command);
					break;
			case "oci":
					$_select_command = str_replace("{start}",$_start,$_select_command);
					$_select_command = str_replace("{start+count}",($_start+$_count),$_select_command);
					break;
			case "mysql":
			case "sqlite2":
			default:
				$_limit = "LIMIT ".$_start." , ".$_count; 
				$_select_command = str_replace("{limit}",$_limit,$_select_command);
		}

		//echo $_select_command;
		
		$_statement = $this->_PDO->prepare($_select_command);
		$_statement->execute();
		
		$_rows = array();
		switch($this->_PDO->getAttribute(PDO::ATTR_DRIVER_NAME))
		{
			case "odbc":
			case "mssql":
					$_i=0;
					 while ($_row = $_statement->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_NEXT))
					{
						if($_i>=$_start)
						{
							array_push($_rows,$_row);				
						}
						$_i++;
					}
					break;
			case "oci":
			case "mysql":
			case "sqlite2":
			default:
			    while ($_row = $_statement->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_NEXT)) 
				{
					array_push($_rows,$_row);
			    }		
		}			
		return $_rows;
	}
	function GetAggregates($_arr)
	{
		
		$_tpl_select_command =  "SELECT {text} FROM ({SelectCommand}) AS _TMP {where} {orderby} {groupby}";

		$_text = "";
		$_agg_result = array();
		foreach($_arr as $_aggregate)
		{
			if (strpos("||min|max|first|last|count|sum|avg|","|".strtolower($_aggregate["Aggregate"])."|")>0)
			{
				$_text .=  ", ".$_aggregate["Aggregate"]."(".$_aggregate["DataField"].") as ".$_aggregate["Key"];				
			}
		}
		
		
		if ($_text!="")
		{

			$_text = substr($_text,2);
		//Fill command and query
			//Filters
			$_where = "";
			$_filters = $this->Filters;
			for($i=0;$i<sizeof($_filters);$i++)
			{
				$_value = "'".$_filters[$i]->Value."'";
				$_where.=" and ".$_filters[$i]->Field." ".$_filters[$i]->Expression." ".$_value;
			}
			if ($_where!="")
			{
				$_where = "WHERE ".substr($_where,5);
			}
			//Order
			$_orderby = "";
			$_orders = $this->Sorts;
			for($i=0;$i<sizeof($_orders);$i++)
			{
				$_orderby.=", ".$_orders[$i]->Field." ".$_orders[$i]->Order;
			}
			if ($_orderby!="")
			{
				$_orderby = "ORDER BY ".substr($_orderby,2);
			}
			//Group
			$_groupby = "";
			$_groups = $this->Groups;
			for($i=0;$i<sizeof($_groups);$i++)
			{
				$_groupby.=", ".$_groups[$i]->Field;
			}
			if ($_groupby!="")
			{
				$_groupby = "GROUP BY ".substr($_groupby,2);
			}
			
			$_select_command = str_replace("{SelectCommand}",$this->SelectCommand,$_tpl_select_command);
			$_select_command = str_replace("{text}",$_text,$_select_command);
			$_select_command = str_replace("{where}",$_where,$_select_command);
			$_select_command = str_replace("{orderby}",$_orderby,$_select_command);
			$_select_command = str_replace("{groupby}",$_groupby,$_select_command);
			
			//echo $_select_command;

			$_statement = $this->_PDO->prepare($_select_command);
			$_statement->execute();
			
			$_agg_result = $_statement->fetch(PDO::FETCH_ASSOC);

		//-----
		}
		return $_agg_result;
	}
	function Insert($_associate_array)
	{
		$_insert_commands = explode(";",$this->InsertCommand);
		foreach($_associate_array as $_key=>$_value)
		{
			for($i=0;$i<sizeof($_insert_commands);$i++)
			{
				$_insert_commands[$i] = str_replace("@".$_key,addslashes($_value),$_insert_commands[$i]);
			}
			
		}
		foreach($_insert_commands as $_insert_command)
		{
			$_statement = $this->_PDO->prepare($_insert_command);
			if ($_statement->execute()==false)
			{
				return false;
			}
		}
		return true;
	}
	function Update($_associate_array)
	{
		$_update_commands = explode(";",$this->UpdateCommand);		
		foreach($_associate_array as $_key=>$_value)
		{
			for($i=0;$i<sizeof($_update_commands);$i++)
			{
				$_update_commands[$i] = str_replace("@".$_key,addslashes($_value),$_update_commands[$i]);
			}
		}
		//echo sizeof($_update_commands);
		foreach($_update_commands as $_update_command)
		{
			$_statement = $this->_PDO->prepare($_update_command);
			if ($_statement->execute()==false)
			{
				return false;
			}
		}
		return true;
	}
	function Delete($_associate_array)
	{
		$_delete_commands = explode(";",$this->DeleteCommand);
		
		foreach($_associate_array as $_key=>$_value)
		{
			for($i=0;$i<sizeof($_delete_commands);$i++)
			{
				$_delete_commands[$i] = str_replace("@".$_key,addslashes($_value),$_delete_commands[$i]);
			}
		}
		foreach($_delete_commands as $_delete_command)
		{
			$_statement = $this->_PDO->prepare($_update_command);
			if ($_statement->execute()==false)
			{
				return false;
			}
		}
		return true;
	}
}
?>
