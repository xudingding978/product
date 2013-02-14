<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
include_once($path_doc_root . "/common/sessionhandler.php");
?>
<iframe src="/dashboard/suppliercategoryselection.php?supplierid=<?php echo $GLOBALS["shadow_supplier_rec_id"]; ?>" width="100%" height="454" id="categoryiframe" name="categoryiframe" frameboarder="0"/>