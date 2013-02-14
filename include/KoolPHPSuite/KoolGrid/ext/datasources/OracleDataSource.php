<?php
class OracleDataSource extends DataSource
{
	var $SelectCommand;
	var $UpdateCommand;
	var $InsertCommand;
	var $DeleteCommand;
	
	var $_Link;
	
	function __construct($_link)
	{
		$this->_Link = $_link;
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
		
		$_stid = oci_parse($this->_Link, $_count_command);
		$_result = oci_execute($_stid);
		return oci_result($_stid,1);
	}	
	
	function GetFields()
	{
		$_fields = array();
		$_result = mysql_query($this->SelectCommand,$this->_Link);
		while($_prop = mysql_fetch_field($_result))
		{
			$_field = array("Name"=>$_prop->name,"Type"=>$_prop->type,"Not_Null"=>$_prop->not_null);
			array_push($_fields,$_field);
		}
		return $_fields;
	}
	
	function GetData($_start=0,$_count=9999999)
	{
		//Return associate array of data
		
		//$_tpl_select_command =  "SELECT * FROM ({SelectCommand}) AS _TMP {where} {orderby} {groupby} {limit}";
		$_tpl_select_command =  "SELECT * FROM (SELECT a.*,rownum r FROM (SELECT * FROM ({SelectCommand}) AS _TMP {where} {orderby} {groupby}) where rownum<{end}) WHERE r>={start}";
		
		
		//Filters
		$_where = "";
		$_filters = $this->Filters;
		for($i=0;$i<sizeof($_filters);$i++)
		{
			/*
			$_value = $_filters[$i]->Value;
			if (gettype($_value)=="string")
			{
				$_value = "'".$_value."'";
			}
			*/
			
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
		//Limit
		$_end = $_start + $_count; 		
		
		$_select_command = str_replace("{SelectCommand}",$this->SelectCommand,$_tpl_select_command);
		$_select_command = str_replace("{where}",$_where,$_select_command);
		$_select_command = str_replace("{orderby}",$_orderby,$_select_command);
		$_select_command = str_replace("{groupby}",$_groupby,$_select_command);
		$_select_command = str_replace("{start}",$_start,$_select_command);
		$_select_command = str_replace("{end}",$_end,$_select_command);
		
		//echo $_select_command;
		
		$_stid = oci_parse($this->_Link, $_select_command);
		oci_execute($_stid);
		$_rows = array();
		while ($_row = oci_fetch_assoc($_stid)) 
		{
			array_push($_rows,$_row);
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
			//$_result = mysql_query($_select_command,$this->_Link);
			//$_agg_result = mysql_fetch_assoc($_result);
			$_stid = oci_parse($this->_Link, $_select_command);
			oci_execute($_stid);
			$_agg_result = oci_fetch_assoc($_stid);

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
			$_stid = oci_parse($this->_Link, $_insert_command);
			if (oci_execute($_stid)==false)
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
			$_stid = oci_parse($this->_Link, $_update_command);
			if (oci_execute($_stid)==false)
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
			$_stid = oci_parse($this->_Link, $_delete_command);
			if (oci_execute($_stid)==false)
			{
				return false;
			}
		}
		return true;
	}
}
?>
