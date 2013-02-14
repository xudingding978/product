<?php
//***************************************
// Written by Khanal, Aashis Binod
//***************************************


class SQLSRVDataSource extends DataSource
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
            $_count_command = "SELECT COUNT(*) as count FROM (".$this->SelectCommand.") AS _TMP {where}";
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
            $_result = sqlsrv_query($this->_Link,$_count_command);
            $data 	 = sqlsrv_fetch_array($_result,SQLSRV_FETCH_ASSOC);
            return $data[count];
		//return mssql_result($_result,0,0);
	}	
	
	function GetFields()
	{
		$_fields = array();
		$_result = sqlsrv_query($this->_Link,$this->SelectCommand);
		$data = sqlsrv_field_metadata($_result);
		//echo "<pre>";
		//print_r($data);
		foreach($data as $key=>$value) {
			$_field  = array("Name"=>$value['Name'],"Type"=>$value['Type'],"Not_Null"=>0);
			array_push($_fields,$_field);
		}
		return $_fields;
		/*while($_prop = sqlsrv_field_metadata($_result))
		{
			$_field = array("Name"=>$_prop['Name'],"Type"=>$_prop['Type'],"Not_Null"=>0);
			array_push($_fields,$_field);
		}
		return $_fields;*/
	}
	
	function GetData($_start=0,$_count=9999999)
	{
            //Return associate array of data

            $_tpl_select_command =  "SELECT {limit} * FROM ({SelectCommand}) AS _TMP {where} {orderby} {groupby}";

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
            //Limit
            $_limit = "TOP ".($_start+$_count); 		

            $_select_command = str_replace("{SelectCommand}",$this->SelectCommand,$_tpl_select_command);
            $_select_command = str_replace("{where}",$_where,$_select_command);
            $_select_command = str_replace("{orderby}",$_orderby,$_select_command);
            $_select_command = str_replace("{groupby}",$_groupby,$_select_command);
            $_select_command = str_replace("{limit}",$_limit,$_select_command);

            //echo $_select_command;
            $_result = sqlsrv_query($this->_Link,$_select_command);
            $_rows = array();
            $_i=0;

            while ($_row = sqlsrv_fetch_array($_result,SQLSRV_FETCH_ASSOC)) 
            {
                if($_i>=$_start) {
                    array_push($_rows,$_row);				
                }
                $_i++;
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
			
			$_result = sqlsrv_query($this->_Link,$_select_command);
			$_agg_result = sqlsrv_fetch_array($_result,SQLSRV_FETCH_ASSOC);

		//-----
		}
		return $_agg_result;
	}
	function Insert($_associate_array)
	{
		$_insert_command = $this->InsertCommand;
		foreach($_associate_array as $_key=>$_value)
		{
			$_insert_command = str_replace("@".$_key,addslashes($_value),$_insert_command);
		}
		return sqlsrv_query($this->_Link,$_insert_command);// true|false
	}
	function Update($_associate_array)
	{
		$_update_command = $this->UpdateCommand;
		foreach($_associate_array as $_key=>$_value)
		{
			$_update_command = str_replace("@".$_key,addslashes($_value),$_update_command);
		}
		echo $_update_command;
		return sqlsrv_query($this->_Link,$_update_command);
	}
	function Delete($_associate_array)
	{
		$_delete_command = $this->DeleteCommand;
		foreach($_associate_array as $_key=>$_value)
		{
			$_delete_command = str_replace("@".$_key,addslashes($_value),$_delete_command);
		}
		return sqlsrv_query($this->_Link,$_delete_command);		
	}
}

?>