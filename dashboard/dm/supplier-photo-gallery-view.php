<?php

$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . '/config.php');
include_once($path_doc_root . "/common/sessionhandler.php");
include_once "../../common/util/DBTransaction.php";
include_once "../../common/dao/TplSupplierMediaDAO.php";


$dbtrans = new DBTransaction();
$dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
$tplsuppliermediadao = new TplSupplierMediaDAO();
$array = array($GLOBALS["shadow_supplier_rec_id"], "pg");
$suppliermedia = $tplsuppliermediadao->select($dbconn, $array);
$gallerysize = sizeof($suppliermedia);
?>






<table border="0">
    <tbody>
        <tr>
            <td>
                <div class="boxuploader"> 

                    <div style="width:630px; height:328px; overflow: auto;"> 

                        <table cellpadding="5" cellspacing="5" border="0" width="100%" >                       
                            <?php
                            $i = 0;
                            foreach ($suppliermedia as $key => $supmed) {
                                if ($i % 5 == 0) {
                                    echo "<tr>";
                                }
                                echo "<td width='100px' valign='top'>";
                                echo '<img src="/media/photo_gallery/' . $supmed["MEDIA_NAME"] . '" height="80"/>';
                                echo "</td>";
                                if ($i % 5 == 4) {
                                    echo "</tr>";
                                }
                                if ($i + 1 == $gallerysize) {
                                    if ($i % 5 != 4) {
                                        for ($i1 = 0; $i1 < (4 - ($i % 5)); $i1++) {
                                            echo "<td width='100px' valign='top'>";
                                            echo "</td>";
                                        }
                                        echo "</tr>";
                                    }
                                }
                                $i++;
                            }
                            ?> 
                        </table>

                    </div>
                </div>       
            </td> </tr>   
    </tbody>
</table>    
