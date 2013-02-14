<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require_once $path_doc_root . '/common/sessionhandler.php';
include_once $path_doc_root . '/include/tpldb_class.php';

$tpl_db = new tpldb();
$tpl_db->getClient($client_username);

//echo print_r($_SESSION,true);

//echo displayTree($_SESSION);

echo $GLOBALS['client_user'];
echo $GLOBALS['shadow_root_id'];
//echo $GLOBALS['STATE'];

?>
<table width="100%" height="50px">
    <tbody valign="top">
        <tr>
            <td>
                <h1>This is the client account setup page</h1>
            </td>
        </tr>
    </tbody>
</table>
<?php

dump_table($_SESSION);

function dump_table($var, $title=false, $level=0)
{
    if($level==0)
    {
        echo '<table width="800" border="0" cellspacing="1" cellpadding="3" class="dump">';
       
        if($title)
              echo '<tr>
                     <th align="center" colspan="2">'.$title.'</th>
                   </tr>';
         
        echo '
          <tr>
            <th align="right">VAR NAME</th>
            <th align="left">VALUE</th>
          </tr>';
    }
    else
    {
        echo '<tr>
                <td colspan="2">
                    <table width="100%" border="0" cellspacing="3" cellpadding="3" class="dump_b">
                </td>
              </tr>';
    }
   
    foreach($var as $i=>$value)
    {
        if(is_array($value) or is_object($value))
        {
            dump_table($value, false, ($level +1));
        }
        else
        {
                echo '<tr>
                        <td align="right" width="50%" >'.$i.' => </th>
                        <td align="left" width="50%" >'.$value.'</th>
                       </tr>';
        }
    }
    echo '</table>';
}


function displayTree($var) {
     $newline = "\n";
     foreach($var as $key => $value) {
         if (is_array($value) || is_object($value)) {
             $value = $newline . "<ul>" . displayTree($value) . "</ul>";
         }

         if (is_array($var)) {
             if (!stripos($value, "<li class=")) {
                $output .= $key . "<li class=\"file\">" . $value . "</li>" . $newline;
             }
             else {
                $output .= $value . $newline;
             }
        
         }
         else { // is_object
            if (!stripos($value, "<li class=")) {
               $value = "<ul><li class=\"file\">" . $value . "</li></ul>" . $newline;
            }
           
            $output .= "<li class=\"folder\">" . $key . $value . "</li>" . $newline;
         }
        
     }
    
     return $output;
}
?>
