<?php
if (!isset($_SESSION))
    session_start();
global $KoolControlsFolder, $koolajax;
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . '/config.php';
require $KoolControlsFolder . '/KoolAjax/koolajax.php';
$koolajax->scriptFolder = $KoolControlsFolder . 'KoolAjax';
include_once($path_doc_root . "/administrator/category_summary_builder.php");
$koolajax->enableFunction("getRowsFromDataBase");
$koolajax->enableFunction("CB_getRootAndchildrenNode");
$treeBuilder = new treeBuilder();
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Business Directory Software - Standard Version - 1.0</title>
        <link media="screen, projection" rel="stylesheet" href="styles/screen-new.css"/>
        <?php echo $koolajax->Render(); ?>
        <script type="text/javascript" language="JavaScript" src="../include/js/jquery-latest.min.js"></script> 
        <script type="text/javascript" language="JavaScript" src="./scripts/height.js"></script>
    </head>
    <!--  <body> -->
    <body id="parent_body">
        <div id="topnavbar_wrapper">
            <div id="topbarnav_center">
                <div id="navbar">
                    <a href="/">
                        <img class="logonew" src ="./../media/logos/logo_hospitalitybiz_300x36.png"></img>
                    </a>
                </div>
            </div>
        </div><!--search--> 
        <div id="discovery_search_bar_wrapper">
            <div id="discovery_search_bar">
                <div class="search">
                    <div id="search_icon"></div>
                    <fieldset>
                        <input id="search_key" class="search_input" name="search_key" type="text" onChange="loadContent();" value="" spellcheck="true" />
                        <input id="search_go" class="search_button" type="image" value="submit" alt="submit" src="images/search_go.gif" onClick="loadContent();"/>
                    </fieldset>
                </div>
            </div>
        </div>
        <div id="wrapper" class="group">
            <div id="page_header" class="group">
                <!--                <div id="topmenuholder"> 
                                    <a href="#" onClick="loadPHPPage('home.php');">HOME</a>&nbsp;| 
                                    <a href="#" onClick="loadPHPPage('content/about_this_directory/index.html');">ABOUT US</a>&nbsp;| 
                                    <a href="#" onClick="loadPHPPage('faqs.php');">FAQs</a>&nbsp;| 
                                    <a href="#" onClick="loadPHPPage('advertise.php');">ADVERTISE</a>&nbsp;| 
                                    <a href="#" onClick="loadPHPPage('contactus.php');">CONTACT US</a>&nbsp;|
                                    <a href="/portal/login.php" target="_self">CLIENT LOGIN</a>&nbsp;|
                                    <a href="/administrator/" target="_blank">ADMIN</a>
                                </div>-->

            </div>
            <!--page_header-->
            <!--  <div id="mainbody" class="group">-->
            <div id="dynamic_content" class="group">
                <div class="browse_container group"> 
                    <a href="index.php" title="Hospitality Business Directory" alt="NZ's Number 1 Hospitality Search Engine" id="index">
                        <div class="browseicon"></div>
                    </a>
                    <div id="treeview" class="group"> <?php echo $treeBuilder->getCurrentTreeView()->Render(); ?> </div>
                </div>
                <!-- browse_container --> 
                <?php echo KoolScripting::Start(); ?>
                <updatepanel id="content_panel" class="cssframe">
                    <content></content>
                    <loading image='../include/<?php echo $KoolControlsFolderName ?>/KoolAjax/loading/5.gif'/>
                </updatepanel>
                <?php echo KoolScripting::End(); ?>
                <div class="content_zone group">
                    <iframe id="content_target" name="resize" onload="calcHeight();" scrolling="no" frameborder="1" height="auto" ></iframe>
                </div>
<!--                <div id="content_zone_right">
                    <div id="right_skyscraper">
                        <script src="http://x4.mediaweb.co.nz/www/delivery/ajs.php?zoneid=92&cb=65842743024&charset=UTF-8&loc=http%3A//standard.devbox3/search/home.php&referer=http%3A//standard.devbox3/search/" type="text/javascript"></script>                                     
                        <noscript>
                            <a href='http://x4.mediaweb.co.nz/www/delivery/ck.php?n=a730a17e&amp;cb=687852' target='_blank'>
                                <img src='http://x4.mediaweb.co.nz/www/delivery/avw.php?zoneid=92&amp;cb=2641567&amp;n=a730a17e' border='0' alt='' />
                            </a>
                        </noscript>
                    </div>
                </div>-->
                
            <!--</div> mainbody -->
        </div><!---->
        <div id="footer_ad" class="footer_ads group">
                    <noscript>
                        <a href='http://x4.mediaweb.co.nz/www/delivery/ck.php?n=a8404845&amp;cb=789' target='_blank'><img src='http://x4.mediaweb.co.nz/www/delivery/avw.php?zoneid=93&amp;cb=5554&amp;n=a8404845' border='0' alt='' /></a>
                    </noscript>
                </div><!--footer_ad-->
                <div id="footer_divider">
                    <div class="moduletable_content"> 

                    </div>
                    <div id="page_footer" class="group">
                        <div class="copyrighttext"> &copy; Copyright <?php echo date("Y") ?> MediaWeb Ltd, PO Box 5544, Wellesley, Auckland, New Zealand. <br />
                            Email: <a class="CopyrightText" href="mailto:it@mediaweb.co.nz">it@mediaweb.co.nz</a> Phone: +64 9 529 3000  Fax: +64 9 529 3001. All rights reserved. <a class="CopyrightText" href="http://www.tplmedia.co.nz/Home/tabid/36/ctl/Terms/Default.aspx" target="_blank" >Terms of Use</a> </div>
                    </div><!--page footer--> 
                </div><!--footer_divider--> 
            </div><!-- wrapper --> 
    </body>
    <script type="text/javascript" src="scripts/treeloader.js"></script>
</html>
