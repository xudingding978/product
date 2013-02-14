<?php
$path_doc_root = $_SERVER["DOCUMENT_ROOT"];
require $path_doc_root . '/config.php';
global $KoolControlsFolder, $KoolControlsFolderName, $koolajax;
require $KoolControlsFolder . '/KoolAjax/koolajax.php';
$koolajax->scriptFolder = $KoolControlsFolder . 'KoolAjax';
include_once($path_doc_root . "/administrator/category_summary_builder.php");
$koolajax->enableFunction("getRowsFromDataBase");
$koolajax->enableFunction("CB_getRootAndchildrenNode");
$treeBuilder = new treeBuilder();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Business Directory Software - Standard Version - 1.0</title>
        <link media="screen, projection" rel="stylesheet" href="styles/screen-new.css"/>
        <link media="screen, projection" rel="stylesheet" href="styles/gallery.css"/>
        <link href='http://fonts.googleapis.com/css?family=Archivo+Narrow' rel='stylesheet' type='text/css'>

            <link rel="stylesheet" href="styles/font-awesome.min.css">
                <?php echo $koolajax->Render(); ?>
                <script type="text/javascript" language="JavaScript" src="../include/js/jquery-latest.min.js"></script>
                <script type="text/javascript" language="JavaScript" src="./scripts/jquery.isotope.min.js"></script>
                <script type="text/javascript" language="JavaScript" src="./scripts/height.js"></script>
                <script type="text/javascript">
			
                    function DropDown(el) {
                        this.dd = el;
                        this.placeholder = this.dd.children('span');
                        this.opts = this.dd.find('ul.dropdown > li');
                        this.val = '';
                        this.index = -1;
                        this.initEvents();
                    }
                    DropDown.prototype = {
                        initEvents : function() {
                            var obj = this;

                            obj.dd.on('click', function(event){
                                $(this).toggleClass('active');
                                return false;
                            });

                            obj.opts.on('click',function(){
                                var opt = $(this);
                                obj.val = opt.text();
                                obj.index = opt.index();
                                obj.placeholder.text(obj.val);
                            });
                        },
                        getValue : function() {
                            return this.val;
                        },
                        getIndex : function() {
                            return this.index;
                        }
                    }

                    $(function() {

                        var dd = new DropDown( $('#dd') );

                        $(document).click(function() {
                            // all dropdowns
                            $('.wrapper-dropdown-3').removeClass('active');
                        });

                    });

                </script>
                </head>
                <!--  <body> -->
                <body id="parent_body">
                    <div id="topnavbar_wrapper">
                        <div id="topbarnav_center">
                            <div id="navbar">
                                <a href="/">
                                    <img class="logonew" style="margin:7px 0 0 16%;" height="25px" src ="./../media/logos/landing-trends.png"/>
                                </a>
                                <p class="titleText">

                                    Global  recommendations from 
                                </p>
                                <div id="dd" class="wrapper-dropdown-3" tabindex="1">
                                    <span>Region</span>
                                    <ul class="dropdown">
                                        <li><a href="#"><i></i>Australia</a></li>
                                        <li><a href="#"><i></i>New Zealand</a></li>
                                        <li><a href="#"><i></i>India</a></li>
                                        <li><a href="#"><i></i>China</a></li>
                                        <li><a href="#"><i></i>America</a></li>
                                    </ul>
                                </div>
                                <div class="userProfile">
                                    <ul class="loginDropdown">
                                        <li>
                                            <a href="#" >Register</a>
                                        </li>
                                        <li>
                                            <a href="#" >Log in</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div><!--search--> 
                    <div id="discovery_search_bar_wrapper">
                        <div class="select_container_left">
                            <ul class="discovery_select_left">
                                <li>
                                    <a href="#" >PRODUCTS</a>
                                </li>
                                <li>
                                    <a href="#" >SERVICES</a>
                                </li>
                                <li>
                                    <a href="#" >BRANDS</a>
                                </li>
                                <li>
                                    <a href="#" >SUPPLIERS</a>
                                </li>
                            </ul>
                        </div>
                        <div class="select_container_right">
                            <ul class="discovery_select_right">
                                <li>
                                    <a href="#" >READ</a>
                                </li>
                                <li>
                                    <a href="#" >LOOK</a>
                                </li>
                                <li>
                                    <a href="#" >WATCH</a>
                                </li>
                            </ul>
                        </div>
                        <div id="discovery_search_bar">
                            <div class="search">
                                <fieldset >
                                    <input id="search_key" class="search_input" name="search_key" type="text" onChange="loadContent();" value="" spellcheck="true" />
                                    <input id="search_go" class="search_button" type="image" value="submit" alt="submit" src="../images/icon-searchlens.png" onClick="loadContent();"/>
                                    <a class="view_control_list" href='javascript:content_panel.update("/search/index-list.php")'><i class="icon-list-ul icon-2x" ></i></a>
                                    <a class="view_control_gal"  href='javascript:content_panel.update("/search/index-gallery.php")'><i class="icon-th icon-2x" ></i></a>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div id="wrapper" class="group">
                        <div id="dynamic_container" class="group">
                            <!-- serps_container --> 
                            <?php echo KoolScripting::Start(); ?>
                            <updatepanel id="content_panel" class="cssframe">
                                <content id="content">
                                    <?php include './index-gallery.php'; ?>
                                </content>
                                <loading image='../include/<?php echo $KoolControlsFolderName ?>/KoolAjax/loading/5.gif'/>
                            </updatepanel>
                            <?php echo KoolScripting::End(); ?>
                        </div><!---->
                        <!--<div id="footer_ad" class="footer_ads group">
                            <noscript>
                                <a href='http://x4.mediaweb.co.nz/www/delivery/ck.php?n=a8404845&amp;cb=789' target='_blank'>
                                    <img src='http://x4.mediaweb.co.nz/www/delivery/avw.php?zoneid=93&amp;cb=5554&amp;n=a8404845' border='0' alt='' />
                                </a>
                            </noscript>
                        </div>--><!--footer_ad-->
                        <div id="footer_divider">
                            <!--<div class="moduletable_content"> 
                            </div>-->
                            <div id="page_footer" class="group">
                                <div style="margin: 0 auto;">
                                    <table class="fot" border="1">
                                        <tr>
                                            <td  class="col1" >

                                                <table>
                                                    <tr  class="row">
                                                        <td>
                                                            <p class="textFont">About1</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="row">
                                                        <td>
                                                            <a class="textFontSmall"  href="#">Email</a>
                                                        </td>
                                                    </tr>
                                                    <tr class="row">
                                                        <td>
                                                            <a  class="textFontSmall" href="#">Phone</a>
                                                        </td>
                                                    </tr>
                                                    <tr class="row">
                                                        <td>
                                                            <a class="textFontSmall" href="#">Phone</a>
                                                        </td>
                                                    </tr>
                                                </table>

                                            </td>
                                            <td  class="col2" >
                                                <table>
                                                    <tr class="row">
                                                        <td> 
                                                            <p class="textFont">About2</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="row">
                                                        <td>
                                                            <a class="textFontSmall" href="#">Copyright</a>
                                                        </td>
                                                    </tr>
                                                    <tr class="row">
                                                        <td>
                                                            <a class="textFontSmall" href="#">copywrong</a>
                                                        </td>
                                                    </tr>
                                                    <tr class="row">
                                                        <td>
                                                            <a class="textFontSmall" href="#"></a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td  class="col3"  >
                                                <table>
                                                    <tr class="row">
                                                        <td>  
                                                            <p class="textFont">About3</p>
                                                        </td>
                                                    </tr>
                                                    <tr class="row">
                                                        <td>
                                                            <a  class="textFontSmall" href="#">business</a>
                                                        </td>
                                                    </tr>
                                                    <tr class="row">
                                                        <td>
                                                            <a class="textFontSmall" href="#">career</a>
                                                        </td>
                                                    </tr>
                                                    <tr class="row">
                                                        <td>
                                                            <a class="textFontSmall" href="#"></a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>                  
                                    </table>
                                </div>

                                <div class="icon" >
                                    <table cellspacing="15" style="clear: both; margin: 20px 0px 0px;">
                                        <tr>
                                            <td>
                                                <a href="#">
                                                    <img src="../media/logos/social_icon_1.png"  style="width: 25px; height: 25px;" />   
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#">
                                                    <img src="../media/logos/social_icon_2.png"  style="width: 25px; height: 25px;" />   
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#">
                                                    <img src="../media/logos/social_icon_3.png"  style="width: 25px; height: 25px;" />   
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#">
                                                    <img src="../media/logos/social_icon_4.png"  style="width: 25px; height: 25px;" />   
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="copyrighttext"> 
                                    <img class="logos" src="../media/logos/landing-trends.png" />
                                    &copy; Copyright <?php echo date("Y"); ?> MediaWeb Ltd, PO Box 5544, Wellesley, Auckland, New Zealand. <br />
                                    Email: <a class="CopyrightText" href="mailto:it@mediaweb.co.nz">it@mediaweb.co.nz</a> Phone: +64 9 529 3000  Fax: +64 9 529 3001. All rights reserved. <a class="CopyrightText" href="http://www.tplmedia.co.nz/Home/tabid/36/ctl/Terms/Default.aspx" target="_blank" >Terms of Use</a>
                                </div>


                            </div><!--page footer--> 
                        </div><!--footer_divider--> 
                    </div><!-- wrapper --
                    </body>
                </html>
