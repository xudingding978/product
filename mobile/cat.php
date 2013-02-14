<?php 
  if(!isset($_SESSION)) session_start();

	$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
  	include_once($path_doc_root . "/config.php");
  	include_once($path_doc_root . "/include/db_class.php");
  	include_once($path_doc_root . "/include/tpldb_class.php");
  	include_once("KoolPHPSuite/KoolAjax/koolajax.php");
	include_once( $path_doc_root . "/include/debuglog.php");


	$categoryCountTotal = 0;
	$categoryCountSubcategories = 0;
	$arrayCategories = array();

		// OK, firstly, lets process product oriented listings
      echo "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n";
      echo "  <tr>\n";
      echo "    <td class=\"bodytext\"><h1>".$categoryCountTotal." Active Categories for TONZ Directory.</h1></td>\n";
      echo "  </tr>\n";
	  echo "  <tr>\n";
      echo "    <td class=\"bodytext\">";
		  	
 

      function DoHasSelectedChildren($directory_rec_id, $parent_rec_id)
      {
        $tpl_db = new tpldb;
        $categories=$tpl_db->GetDirectoryCategories($directory_rec_id, $parent_rec_id); 
		$result=FALSE;
      
        if ($categories)
        {
          foreach ($categories as $key=>$category)
          {
            if ($result != TRUE)
            {
              $isdirectorycategory=$tpl_db->IsDirectoryCategory($directory_rec_id, $category["REC_ID"]);
              if ($isdirectorycategory == TRUE)
              {
				//  echo "\$_SESSION[\"shadow_root_id\"]".$_SESSION["shadow_root_id"]." and \$category[\"REC_ID\"]".$category["REC_ID"]."<br/>";
                $result=$tpl_db->IsShadowDirectoryCategoryListed($_SESSION["shadow_root_id"], $category["REC_ID"]);
				//$result=$tpl_db->IsActiveDirectoryCategory($_SESSION["shadow_root_id"], $category["REC_ID"]);
            
                if ($result != TRUE)
                {
                  $result=DoHasSelectedChildren($directory_rec_id, $category["REC_ID"]);
                } // 
              } // isDirectory Category
            } // result = true 
          } // end for each
        } // end if
      
        return $result;
      }
    
      function DoBuildCategories($directory_rec_id, $parent_rec_id, $level, $count)
      {	
	  		global $categoryCountTotal;
			global $arrayCategories;

			$categories=tpldb::GetDirectoryCategories($directory_rec_id, $parent_rec_id);
			
			
			
			if ($categories)
			{
				$count = 0;
				foreach ($categories as $key => $category)
				{
						
						$count++;
					  	echo "<tr>\n<td valign=\"middle\" width=\"10%\" class=\"BodyText\"><img src=\"/images/spacer.gif\" border=\"0\" width=\"".($level*20)."\" height=\"8\" />- <b>"
						.htmlspecialchars($category["NAME"])."</b>&nbsp;(".$count.") RID =>".$category["REC_ID"]." PPCRID=>"
						.$category["PARENT_PRODUCT_CATEGORY_REC_ID"]."</td>\n</tr>\n";
						$categoryCountTotal = $categoryCountTotal + 1;
					  	$nextlevel = $level + 1;
						
						//build the category array
						if ($category["PARENT_PRODUCT_CATEGORY_REC_ID"] > 0) {
							
							
							
							$arrayCategory[$category["PARENT_PRODUCT_CATEGORY_REC_ID"]] = array("REC_ID" => $category["REC_ID"],
																						"CATEGORY_NAME" => $category["NAME"], 
																						"PARENT_PRODUCT_CATEGORY_REC_ID" => $category["PARENT_PRODUCT_CATEGORY_REC_ID"],
																						"PRINT_ORDER" => $category["PRINT_ORDER"],
																						"PRINT_IMAGE_LOCATION" => $category["PRINT_IMAGE_LOCATION"],
																						"WEB_IMAGE_LOCATION" => $category["WEB_IMAGE_LOCATION"],
																						"CODE" => $category["CODE"],
																						"HEADING" => $category["HEADING"],
																						"SUB_HEADING" => $category["SUB_HEADING"],
																						"TEXT" => $category["TEXT"],
																						$category["PARENT_PRODUCT_CATEGORY_REC_ID"] => NULL,
																						"SUB_CATEGORIES" => $category["REC_ID"]);
																						
																						//debuglog::debug2log(print_r($arrayCategory,true));
													
							$arrayCategories = array_merge_recursive($arrayCategories,$arrayCategory);
						
						}else {
							$arrayCategories[$category["REC_ID"]] =  array("REC_ID" => $category["REC_ID"],
																			"CATEGORY_NAME" => $category["NAME"], 
																			"PARENT_PRODUCT_CATEGORY_REC_ID" => $category["PARENT_PRODUCT_CATEGORY_REC_ID"],
																			"PRINT_ORDER" => $category["PRINT_ORDER"],
																			"PRINT_IMAGE_LOCATION" => $category["PRINT_IMAGE_LOCATION"],
																			"WEB_IMAGE_LOCATION" => $category["WEB_IMAGE_LOCATION"],
																			"CODE" => $category["CODE"],
																			"HEADING" => $category["HEADING"],
																			"SUB_HEADING" => $category["SUB_HEADING"],
																			"TEXT" => $category["TEXT"],
																			$category["REC_ID"] => NULL,
																			"SUB_CATEGORIES" => $category["REC_ID"]);
						}
						
					  	DoBuildCategories($directory_rec_id, $category["REC_ID"], $nextlevel, $count);
						
						
				}
					 
				echo "        <tr>\n<td valign=\"middle\" width=\"10%\" class=\"BodyText\"><img src=\"/images/spacer.gif\" border=\"0\" width=\"".($level*20)."\" height=\"8\" />- &nbsp;(count =".$count.")"."</td>\n </tr>\n";
				
				  
				if (($parent_rec_id == 0)) {
					  echo "        <tr>\n";
					  echo "          <td valign=\"middle\" width=\"10%\" class=\"BodyText\"><img src=\"/images/spacer.gif\" border=\"0\" width=\"4\" height=\"4\" />Total of ".$categoryCountTotal." categories.</td>\n";
					  echo "        </tr>\n";
				}   
			} 
			//else // no sub categories found, returning to the previous recursive funtion
			  
			  //$categoryCountSubcategories = 0;
			  	//echo $categoryCountSubcategories;
				//var_export($arrayCategories);
				//return $categoryCountSubcategories; 
			
        }
//      }



	DoBuildCategories(6, 0, 0,0);
	debuglog::debug2log(print_r($arrayCategories,true));

    
    echo "      </table>\n";
    echo "    </td>\n";
    echo "  </tr>\n";
    echo "</table>\n";
	  
	  
	  echo "    </td>\n";
      echo "  </tr>\n";
      echo "</table>\n";


?>
