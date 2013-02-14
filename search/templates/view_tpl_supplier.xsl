<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html>
            <head>
                <script type="text/javascript">
                    function hideDivs(id, source_link)
                        {
                            var arr = document.getElementById(id);
                            arr.style.display = (arr.style.display == 'block')? 'none':'block';
                            var text = document.getElementById(source_link).innerHTML;
                            if (text == "[+]")
                        {
                            document.getElementById(source_link).innerHTML = "[-]";
                        }
                            else
                        {
                            document.getElementById(source_link).innerHTML = "[+]";
                        }
                    }
                </script>
                <!--Google Maps Location Search Button-->
                <script type="text/javascript">
                    function CallChild() {
                    document.getElementById("google-maps").contentWindow.document.getElementById("google-maps-button").click();
                    }
                </script>
                <!--Tabber-->
                <script type="text/javascript" src="scripts/tabber.js"></script>
                <!--Facebook-->
                <div id="fb-root"></div>
                <script>(function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
                    fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                </script>
                <link rel="stylesheet" href="styles/search.css" type="text/css"/>
                <link rel="stylesheet" href="styles/full-listing.css" type="text/css"/>
                <link rel="stylesheet" href="../custom.css" type="text/css"/>
                <script>
                    parent.document.getElementById('browse_container_group').style.display='none';
                    parent.document.getElementById('content_zone').className = 'content_zone_fullwidth group';
                </script>
                <!--Fancybox-->
                <script type="text/javascript" src="../include/js/jquery-1.4.3.min.js"></script>
                <script type="text/javascript" src="../include/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
                <link rel="stylesheet" href="../include/fancybox/jquery.fancybox-1.3.4.css" type="text/css" media="screen" />
                <script type="text/javascript">
                $(document).ready(function() {
                                $("#iframe").fancybox({
                                'width' : 944 ,
                                'height' : 620 ,
                                'autoScale' : false,
                                'transitionIn'	:	'none',
                                'transitionOut'	:	'none',
                                'type' : 'iframe'
                        });
                });
                </script>
            </head>
            <body>
                <div class="tpl_supplier">
                    <xsl:value-of select="@bc"/>
                    <xsl:for-each select="result/supplier">
                        <div class="tpl_supplier_breadcrumbs">
                        </div>
                        <div id="options_bar" class="tpl_supplier_page_option">
                            <div class="options_bar_text">
                                <a href="#">Update Details</a> | 
                                <a href="#">Send to a friend</a> | 
                                <a href="#">Share the love</a> | 
                                <a href="#">Add to favourites</a> | 
                                <a href="#">Print Listing</a>
                            </div>
                        </div>
                        <div class="tpl_supplier_name-wrapper">
                            <div class="tpl_supplier_name">
                                <xsl:value-of select="@name"/>
                                <div class="listing_physical_address">
                                    <xsl:value-of select="address" />
                                </div>
                            </div>
                            
                            <div class="ribbon-left-arrow-supplier"></div>
                        </div>   
                        <div id="googlemap-directions">
                            <a id="iframe" href="google-maps-directions-iframe.php" style="color:black;text-decoration:none; font-size:13px;" >Directions</a>
                        </div>
                        <div id="googlemap-maximise" class="google-maps-size-button" onclick="document.getElementById('business_map').style.display='none'; document.getElementById('googlemaps-interactive').style.display='block'; this.style.display='none'; document.getElementById('googlemap-minimise').style.display='block';"> <img src="images/ArrowDown-20x20.png"/></div>  
                        <div id="googlemap-minimise" class="google-maps-size-button" style="display:none;" onclick="document.getElementById('business_map').style.display='block'; document.getElementById('googlemaps-interactive').style.display='none'; this.style.display='none'; document.getElementById('googlemap-maximise').style.display='block';"> <img src="images/ArrowUp-20x20.png"/> </div>                          
                        <div id="business_map" width="844" height="65" style="background-image:url('http://maps.googleapis.com/maps/api/staticmap?center=-33.7613363,151.2734736&amp;zoom=15&amp;size=844x65&amp;maptype=roadmap&amp;sensor=false&amp;');display:block;">
                            <!--<div class="map-control" id="map-control-show" title="Show an interactive map" >
                                <span class="ui-icon ui-icon-navy ui-icon-carat-1-s" onclick="document.getElementById('business_map').style.display='none'; document.getElementById('googlemaps-interactive').style.display='block';"></span>
                            </div>-->
                        </div>
                        <div id="googlemaps-interactive" style="width:844px; height:620px; display:none;">
                            <iframe id="google-maps" src="google-maps-iframe2.php" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
                        </div>                        
                        <div class="tpl_supplier_banner">
                            <div class="banner_wrapper">
                                <div class="banner_header bg_gd_light">
                                    <div class="banner_text text_small_grey"></div>
                                </div>
                                <div class="banner_image">
                                    <img src="http://www.myweddingguide.co.nz/Resources/Images/Listings/Banners/064968375.jpg" width="844" height="155" />
                                </div>
                            </div>
                        </div>
                        
                        <!--========================================================================================= -->
                        <!-- LEFT COLUMN -->
                        
                        
                        <div class="tpl_left_col">
                            <!--<address id="contact_address">
                                <xsl:value-of select="address" /> 
                            </address>-->
                            <h4>Are you ready to take your team to the next level?</h4>
                            <div class="company_profile_text">
                                <xsl:value-of select="profile"/>
                            </div>
                            
                            <!--========================================================================================= -->
                            <!-- Contact Details -->
                            
                            <div class="contact_detail_wrapper">
                                <div class="social_wrapper">    
                                    <div class="social_share header_tab">
                                        <h1>Share</h1>
                                        <div class="social_network_share_icons">
                                            <div class="g-plusone" data-size="medium" data-count="true" ></div>								
                                            <script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
                                            <a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>
                                            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                                            <div class="fb-like" data-send="false" data-layout="button_count" data-width="20px" data-show-faces="false" data-action="recommend"></div>
                                        </div>
                                    </div>
                                    <div class="social_follow header_tab">
                                        <h1>Follow</h1>
                                         <div class="social_network_share_icons">
                                            <ul>
                                                <li class="social_share_icons icon_facebook">Facebook</li>
                                                <li class="social_share_icons icon_linkedin">LinkedIn</li>
                                                <li class="social_share_icons icon_youtube">YouTube</li>
                                                <li class="social_share_icons icon_rssfeed">RSS Feed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="listing_detail_contact header_tab">
                                    <h1>Contact</h1>
                                    <div class="contact_wrapper">
                                        <div id="contact_icons">
                                            <img src="" alt=""/>
                                        </div>
                                        <xsl:if test="tel">
                                            <div class="tpl_supplier_telephone">
                                                <img class="listing_contact_icons" src="images/icon_contacts_phone.png" hspace="5px" alt="" align="left"/>
                                                <div id="hidden-tel" style="display:none">
                                                    <xsl:value-of select="tel"/>
                                                </div>
                                                <a class="listing_contact_text tel-click" onclick="this.style.display='none'; getElementById('hidden-tel').style.display='block'" alt="Click to show number" title="Click to show number">
                                                    Telephone
                                                    <span style="font-size:12px;">(
                                                        <xsl:value-of select="substring(tel,0,10)"></xsl:value-of>...)
                                                    </span>
                                                </a>
                                            </div>
                                        </xsl:if>
                                        <xsl:if test="ftel">
                                            <div class="tpl_supplier_ftel">
                                                <img class="listing_contact_icons" src="images/icon_contacts_phone.png" hspace="5px" alt="" align="left"/>
                                                <div id="hidden-ftel" style="display:none">
                                                    <xsl:value-of select="ftel"/>
                                                </div>
                                                <a class="listing_contact_text ftel-click" style="cursor:pointer" onclick="this.style.display='none'; getElementById('hidden-ftel').style.display='block'">
                                                    Freephone
                                                    <span style="font-size:12px;">(
                                                        <xsl:value-of select="substring(ftel,0,10)"></xsl:value-of>...)
                                                    </span>
                                                </a>
                                            </div>
                                        </xsl:if>
                                        <xsl:if test="email">
                                            <div class="tpl_supplier_email">
                                                <img class="listing_contact_icons" src="images/icon_contacts_email.png" hspace="5px" alt="" align="left"/>
                                                <xsl:element name="a">
                                                    <xsl:attribute name="class">listing_contact_text email-click</xsl:attribute>
                                                    <xsl:attribute name="href">mailto:<xsl:value-of select="email"/></xsl:attribute>
                                                    Email this business
                                                </xsl:element>
                                            </div>
                                        </xsl:if>
                                        <xsl:if test="website">
                                            <div class="tpl_supplier_website">
                                                <img class="listing_contact_icons" src="images/icon_contacts_web.png" hspace="5px" alt="" align="left"/>
                                                <xsl:element name="a">
                                                    <xsl:attribute name="target">_blank</xsl:attribute>
                                                    <xsl:attribute name="class">listing_contact_text website-click</xsl:attribute>
                                                    <xsl:attribute name="href">http://<xsl:value-of select="website"/></xsl:attribute>
                                                    Visit our Website
                                                </xsl:element>
                                            </div>	
                                        </xsl:if>
                                        <xsl:if test="fax">
                                            <div class="tpl_supplier_fax">
                                                <img class="listing_contact_icons" src="images/icon_contacts_fax.png" hspace="5px" alt="" align="left"/>
                                                <div id="hidden-fax" style="display:none">
                                                    <xsl:value-of select="fax"/>
                                                </div>
                                                <a class="listing_contact_text fax-click" style="cursor:pointer" onclick="this.style.display='none'; getElementById('hidden-fax').style.display='block'">
                                                    Fax
                                                    <span style="font-size:12px;">(
                                                        <xsl:value-of select="substring(fax,0,10)"></xsl:value-of>...)
                                                    </span>
                                                </a>
                                            </div>
                                        </xsl:if>
                                        <xsl:if test="ffax">	
                                            <div class="tpl_supplier_ffax">
                                                <img class="listing_contact_icons" src="images/icon_contacts_fax.png" hspace="5px" alt="" align="left"/>
                                                <div id="hidden-ffax" style="display:none">
                                                    <xsl:value-of select="ffax"/>
                                                </div>
                                                <a class="listing_contact_text ffax-click" style="cursor:pointer" onclick="this.style.display='none'; getElementById('hidden-ffax').style.display='block'">
                                                    Freefax
                                                    <span style="font-size:12px;">(
                                                        <xsl:value-of select="substring(ffax,0,10)"></xsl:value-of>...)
                                                    </span>
                                                </a>
                                            </div>
                                        </xsl:if>
                                        <xsl:if test="postal">
                                            <div class="tpl_supplier_postal">
                                                <img class="listing_contact_icons" src="images/icon_contacts_address.png" hspace="5px"  alt="" align="left"/>
                                                <div id="hidden-postal" style="display:none">
                                                    <xsl:value-of select="postal"/>
                                                </div>
                                                <a class="listing_contact_text postal-click" style="cursor:pointer" onclick="this.style.display='none'; getElementById('hidden-postal').style.display='block'">Postal Address</a>
                                            </div>
                                        </xsl:if>
                                    </div>
                                </div>
                                <!--<div class="tpl_supplier_contact">
                                    <xsl:if test="tel">
                                        <div class="tpl_supplier_telephone">
                                            <img src="http://ctb.business-software.co.nz/search/images/icon_phone_sm.png" hspace="5px" alt="" align="left"/>
                                            <div id="hidden-tel" style="display:none">
                                                <xsl:value-of select="tel"/>
                                            </div>
                                            <a onclick="this.style.display='none'; getElementById('hidden-tel').style.display='block'" class="tel-click">
                                                Telephone
                                            </a>
                                            
                                        </div>
                                    </xsl:if>
                                    <xsl:if test="website">
                                        <div class="tpl_supplier_website">
                                            <img src="http://ctb.business-software.co.nz/search/images/icon_web_sm.png" hspace="5px" alt="" align="left"/>
                                            <xsl:element name="a">
                                                <xsl:attribute name="target">_blank</xsl:attribute>
                                                <xsl:attribute name="class">website-click</xsl:attribute>
                                                <xsl:attribute name="href">http://
                                                    <xsl:value-of select="website"/>
                                                </xsl:attribute>
                                                Website
                                            </xsl:element>
                                        </div>	
                                    </xsl:if>
                                    <xsl:if test="email">
                                        <div class="tpl_supplier_email">
                                            <img src="http://ctb.business-software.co.nz/search/images/icon_email_sm.png" hspace="5px" alt="" align="left"/>
                                            <xsl:element name="a">
                                                <xsl:attribute name="class">email-click</xsl:attribute>
                                                <xsl:attribute name="href">mailto:
                                                    <xsl:value-of select="email"/>
                                                </xsl:attribute>
                                                Email
                                            </xsl:element>
                                        </div>
                                    </xsl:if>
                                    <xsl:if test="ftel">
                                        <div class="tpl_supplier_ftel">
                                            <img src="http://ctb.business-software.co.nz/search/images/icon_tollfree.png" hspace="5px" alt="" align="left"/>
                                            <div id="hidden-ftel" style="display:none">
                                                <xsl:value-of select="ftel"/>
                                            </div>
                                            <a class="ftel-click" style="cursor:pointer" onclick="this.style.display='none'; getElementById('hidden-ftel').style.display='block'">Free Telephone</a>
                                        </div>
                                    </xsl:if>
                                    <xsl:if test="fax">
                                        <div class="tpl_supplier_fax">
                                            <img src="http://ctb.business-software.co.nz/search/images/icon_fax.png" hspace="5px" alt="" align="left"/>
                                            <div id="hidden-fax" style="display:none">
                                                <xsl:value-of select="fax"/>
                                            </div>
                                            <a class="fax-click" style="cursor:pointer" onclick="this.style.display='none'; getElementById('hidden-fax').style.display='block'">Fax</a>
                                        </div>
                                    </xsl:if>
                                    <xsl:if test="ffax">	
                                        <div class="tpl_supplier_ffax">
                                            <img src="http://ctb.business-software.co.nz/search/images/icon_tollfree.png" hspace="5px" alt="" align="left"/>
                                            <div id="hidden-ffax" style="display:none">
                                                <xsl:value-of select="ffax"/>
                                            </div>
                                            <a class="ffax-click" style="cursor:pointer" onclick="this.style.display='none'; getElementById('hidden-ffax').style.display='block'">Freephone Fax</a>
                                        </div>
                                    </xsl:if>
                                    <xsl:if test="postal">
                                        <div class="tpl_supplier_postal">
                                            <img src="http://ctb.business-software.co.nz/search/images/icon_email_sm.png" hspace="5px"  alt="" align="left"/>
                                            <div id="hidden-postal" style="display:none">
                                                <xsl:value-of select="postal"/>
                                            </div>
                                            <a class="postal-click" style="cursor:pointer" onclick="this.style.display='none'; getElementById('hidden-postal').style.display='block'">Postal Address</a>
                                        </div>
                                    </xsl:if>
                                    <xsl:value select="tab"/>
                                </div>-->
                            </div>
                            <div id="Reviews" class="business_reviews header_tab tpl_supplier_content_box" style="width:420px; border:none;">
                                <h1>Reviews</h1>
                            </div>
                                <div class="tpl_supplier_content_box" style="width:410px;">
                                    <div class="tpl_supplier_content_box_int">
                                        <div class="tpl_supplier_content_box_panel">
                                            <div class="tpl_supplier_content_box_panel_int">
                                                "This is a review for this business which is totally rocking and has wonderful customer service."
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- div class tpl_supplier_content_box -->
                            
                        </div>
                        <!--8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 -->
                        <!-- RIGHT COLUMN -->
                                               
                        <div class="tpl_right_col">
                            <div id="youtube_wrapper bg_gd_light">
                                <iframe width="420" height="315" src="http://www.youtube.com/embed/XURJFWU5pwQ" frameborder="0"></iframe>
                                <div class="youtube_caption">
                                    Listen to an interview by Janice Davies with Ann Andrews from The Corporate Tool Box as she discusess a global prediction from the founder of Business Network International with Dr Ivan Misner.
                                </div>
                            </div>
                            <div class="tpl_right_col_photo_thumbnails_wrapper">
                                <!--<img src="http://www.bloomberg.com/image/iyfBfTbKafHc.jpg" width="420px" height="300px" class="thumbnails-large" />-->
                                <div class="tpl_right_col_photo_thumbnails">
                                    <img src="/media/photo_gallery/Desert_1459.jpg" width="130px" height="130px" class="thumbnails" />
                                    <img src="http://upload.wikimedia.org/wikipedia/commons/7/72/Expo_2005_Flaggs_and_Corporate_Pavillion_Zone.jpg" width="130px" height="130px" class="thumbnails" />
                                    <img src="http://wpmu.org/wp-content/uploads/2011/10/small-business-intranet-corporate1.jpg" width="130px" height="130px" class="thumbnails" />
                                </div>
                            </div>
                            <div class="tpl_supplier_detail_right">
                                <div class="tabber" id="tabs">
                                    <div class="tabbertab" id="tab-one" title="Contact Us">
                                        <xsl:choose>
                                            <xsl:when test="defaulttab='contact'">
                                                <xsl:attribute name="class">tabbertab tabbertabdefault</xsl:attribute>
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <xsl:attribute name="class">tabbertab</xsl:attribute>
                                            </xsl:otherwise>
                                        </xsl:choose>
                                        <div class="contact-tab-form">
                                            <form id="contact_form">
                                                <fieldset id="contact_data">
                                                    <ol class="contact_field_list">
                                                        <li id="contact_fields">
                                                            <label for="name">First Name:</label>
                                                            <input id="contact-tab-name" class="contact-tab" type="text" value=""/>
                                                        </li>
                                                        <li id="contact_fields">
                                                            <label for="email">Your Email Address:</label>
                                                            <input id="contact-tab-email" class="contact-tab" type="text" value=""/>
                                                        </li>
                                                        <li id="contact_fields">
                                                            <label for="phone">Your Phone Number:</label>
                                                            <input id="contact-tab-phone" class="contact-tab" type="text" value=""/>
                                                        </li>
                                                        <li id="contact_fields">
                                                            <label>Your Message:</label>
                                                            <textarea id="contact-tab-email-message" class="contact-tab"></textarea>	
                                                        </li>
                                                        <li id="contact_fields">
                                                            <div id="contact_captcha">
                                                                <img src="http://demodirectory.com/includes/code/captcha.php" width="200px" height="60px"/>
                                                            </div>
                                                        </li>
                                                        <li id="contact_fields">
                                                            <label id="captcha">Enter Security Code:</label>
                                                            <input id="contact-tab-captcha" class="contact-tab" type="text" value=""/>
                                                        </li>
                                                        <li id="contact_fields">
                                                            <input type="button" value="Submit" id="contact-tab-submit-btn"/>
                                                        </li>
                                                    </ol>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="tabbertab" id="tab-two" title="Street View">
                                                    <!--<xsl:attribute name="class">tabbertab tabbertabdefault</xsl:attribute>-->
                                        <xsl:choose>
                                            <xsl:when test="defaulttab='streetview'">
                                                <xsl:attribute name="class">tabbertab tabbertabdefault</xsl:attribute>
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <xsl:attribute name="class">tabbertab</xsl:attribute>
                                            </xsl:otherwise>
                                        </xsl:choose>
                                        <iframe src="google-street-view-iframe.php" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div id="tab-three" class="tabbertab" title="Map">                                                                            
                                        <iframe id="google-maps" src="google-maps-iframe2.php" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    
                                </div>
                                <div class="tabber" id="tabs-social">
                                    <div class="tabbertab" id="tab-one" title="Facebook">
                                        <div class="fb-like-box" data-href="http://www.facebook.com/platform" data-width="420" data-show-faces="true" data-border-color="#DEDEDE" data-stream="true" data-header="true"></div>
                                    </div>
                                    <div class="tabbertab" id="tab-two" title="Google+">
                                        <div class="tabs-social">
                                            Google Plus
                                        </div>
                                    </div>
                                    <div class="tabbertab" id="tab-three" title="LinkedIn">
                                        <div class="tabs-social">
                                            LinkedIn
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div><!-- right column -->

                        <div style="display:none;" class="tpl_supplier_address_search">
                            <xsl:element name="input">
                                <xsl:attribute name="id">address</xsl:attribute>
                                <xsl:attribute name="type">textbox</xsl:attribute>
                                <xsl:attribute name="value">
                                    <xsl:value-of select="address"/>
                                </xsl:attribute>
                                <xsl:attribute name="visible">false</xsl:attribute>
                            </xsl:element>
                            <input style="display:none;" type="button" id="tpl_supplier_address_search_button" value="Find Location" onclick="CallChild();"/>
                        </div>
                        
                        
                        
                        <div class="tpl_supplier_content_box">
                            <div class="tpl_supplier_content_box_int">
                                <div class="tpl_supplier_content_box_panel">
                                    <div class="tpl_supplier_content_box_panel_int">
                                        <xsl:value-of select="profile"/>
                                    </div>
                                </div>
                            </div>
                        </div><!-- div class tpl_supplier_content_box -->
                        <div class="tpl_supplier_content_box">
                            <div class="tpl_supplier_content_box_int">
                                <div class="tpl_supplier_content_box_panel">
                                    <div class="tpl_supplier_content_box_panel_int">

                                    </div>
                                </div>
                            </div>
                        </div><!-- div class tpl_supplier_content_box -->
                        <div class="tpl_supplier_content_box">
                            <div class="tpl_supplier_content_box_int">
                                <div class="tpl_supplier_content_box_panel">
                                    <div class="tpl_supplier_content_box_panel_int">

                                    </div>
                                </div>
                            </div>
                        </div><!-- div class tpl_supplier_content_box -->
                    </xsl:for-each>
                </div>
                <xsl:element name="table">
                    <xsl:attribute name="border">0</xsl:attribute>
                    <xsl:attribute name="width">100%</xsl:attribute>
                    <xsl:element name="tr">
                        <xsl:element name="td">
                            <xsl:for-each select="result">
                                <xsl:attribute name="id">breadcrumb</xsl:attribute>
                                <xsl:value-of select="@bc"/>
                            </xsl:for-each>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="tr">
                        <xsl:element name="td">
                            <xsl:for-each select="result/supplier">
                                <div id="tpl_view">
                                    <xsl:element name="table">
                                        <xsl:attribute name="border">0</xsl:attribute>
                                        <xsl:attribute name="cellpadding">0</xsl:attribute>
                                        <xsl:attribute name="cellspacing">0</xsl:attribute>
                                        <xsl:attribute name="id">tpl_viewsupinfo</xsl:attribute>
									<!-- <xsl:attribute name="width">100%</xsl:attribute> -->
									<!-- begin supplier main branch row -->
                                        <xsl:element name="tr">
                                            <xsl:element name="td">
                                                <xsl:attribute name="width">100%</xsl:attribute>
                                                <xsl:element name="table">
                                                    <xsl:attribute name="border">0</xsl:attribute>
                                                    <xsl:attribute name="width">100%</xsl:attribute>
                                                    <xsl:attribute name="id">tpl_viewsupinfo_head</xsl:attribute>
                                                    <xsl:element name="tr">
													<!-- left -->
                                                        <xsl:element name="td">
                                                            <xsl:attribute name="width">50%</xsl:attribute>
                                                            <xsl:element name="table">
                                                                <xsl:attribute name="border">0</xsl:attribute>
                                                                <xsl:attribute name="width">100%</xsl:attribute>
                                                                <xsl:attribute name="id">tpl_viewsupinfo_lhead</xsl:attribute>
															<!-- name -->
                                                                <xsl:element name="tr">
                                                                    <xsl:element name="th">
                                                                        <xsl:value-of select="@name"/>
                                                                    </xsl:element>
                                                                </xsl:element>
															<!-- address -->
                                                                <xsl:element name="tr">
                                                                    <xsl:element name="td">
                                                                        <xsl:attribute name="id">address</xsl:attribute>
                                                                        <xsl:value-of select="address"/>
                                                                    </xsl:element>
                                                                </xsl:element>
															<!-- telephone -->
                                                                <xsl:element name="tr">
                                                                    <xsl:element name="td">
                                                                        <xsl:if test="tel">
                                                                            <xsl:attribute name="id">telephone</xsl:attribute>
                                                                            <xsl:value-of select="tel"/>
                                                                        </xsl:if>
                                                                    </xsl:element>
                                                                </xsl:element>
															<!-- web -->
                                                                <xsl:element name="tr">
                                                                    <xsl:element name="td">
                                                                        <xsl:if test="website">
                                                                            <xsl:attribute name="id">website</xsl:attribute>
                                                                            <xsl:element name="a">
                                                                                <xsl:attribute name="target">_blank</xsl:attribute>
                                                                                <xsl:attribute name="href">http://
                                                                                    <xsl:value-of select="website"/>
                                                                                </xsl:attribute>
                                                                                <xsl:value-of select="website"/>
                                                                            </xsl:element>
                                                                        </xsl:if>
                                                                    </xsl:element>
                                                                </xsl:element>
															<!-- email -->
                                                                <xsl:element name="tr">
                                                                    <xsl:element name="td">
                                                                        <xsl:if test="email">
                                                                            <xsl:attribute name="id">email</xsl:attribute>
                                                                            <xsl:element name="a">
                                                                                <xsl:attribute name="href">mailto:
                                                                                    <xsl:value-of select="email"/>
                                                                                </xsl:attribute>
                                                                                <xsl:value-of select="email"/>
                                                                            </xsl:element>
                                                                        </xsl:if>	
                                                                    </xsl:element>
                                                                </xsl:element>
                                                            </xsl:element> <!-- tpl_viewsupinfo_lhead -->
                                                        </xsl:element> <!-- tpl_viewsupinfo_lhead td -->
													<!-- middle -->
                                                        <xsl:element name="td">
                                                            <xsl:element name="table">
                                                                <xsl:attribute name="border">0</xsl:attribute>
                                                                <xsl:attribute name="id">tpl_viewsupinfo_mhead</xsl:attribute>
															<!-- other contact details -->
                                                                <xsl:element name="tr">
                                                                    <xsl:element name="td">
                                                                        <xsl:element name="table">
                                                                            <xsl:attribute name="border">0</xsl:attribute>
                                                                            <xsl:element name="tr">
                                                                                <xsl:element name="th">
                                                                                    <xsl:attribute name="colspan">2</xsl:attribute>
                                                                                    Additional Contact Details
                                                                                </xsl:element>
                                                                            </xsl:element>
                                                                            <xsl:element name="tr">
                                                                                <xsl:element name="td">
                                                                                    <xsl:attribute name="id">title</xsl:attribute>
                                                                                    <xsl:if test="ftel">
                                                                                        Free Call:
                                                                                    </xsl:if>
                                                                                </xsl:element>
                                                                                <xsl:element name="td">
                                                                                    <xsl:if test="ftel">
                                                                                        <xsl:attribute name="id">ftel</xsl:attribute>
                                                                                        <xsl:value-of select="ftel"/>
                                                                                    </xsl:if>
                                                                                </xsl:element>
                                                                            </xsl:element>
                                                                            <xsl:element name="tr">
                                                                                <xsl:element name="td">
                                                                                    <xsl:if test="fax">
                                                                                        Fax:
                                                                                    </xsl:if>
                                                                                </xsl:element>
                                                                                <xsl:element name="td">
                                                                                    <xsl:if test="fax">
                                                                                        <xsl:attribute name="id">fax</xsl:attribute>
                                                                                        <xsl:value-of select="fax"/>
                                                                                    </xsl:if>
                                                                                </xsl:element>
                                                                            </xsl:element>
                                                                            <xsl:element name="tr">
                                                                                <xsl:element name="td">
                                                                                    <xsl:if test="ffax">
                                                                                        Free Fax:
                                                                                    </xsl:if>
                                                                                </xsl:element>
                                                                                <xsl:element name="td">
                                                                                    <xsl:if test="ffax">
                                                                                        <xsl:attribute name="id">ffax</xsl:attribute>
                                                                                        <xsl:value-of select="ffax"/>
                                                                                    </xsl:if>
                                                                                </xsl:element>
                                                                            </xsl:element>
                                                                        </xsl:element>
                                                                    </xsl:element>
                                                                </xsl:element>
															<!-- postal address -->
                                                                <xsl:element name="tr">
                                                                    <xsl:element name="td">
                                                                        <xsl:if test="postal">
                                                                            <xsl:element name="table">
                                                                                <xsl:attribute name="border">0</xsl:attribute>
                                                                                <xsl:element name="tr">
                                                                                    <xsl:element name="th">
                                                                                        Mailing Address
                                                                                    </xsl:element>
                                                                                </xsl:element>
                                                                                <xsl:element name="tr">
                                                                                    <xsl:element name="td">
                                                                                        <xsl:attribute name="id">postal</xsl:attribute>
                                                                                        <xsl:value-of select="postal"/>
                                                                                    </xsl:element>
                                                                                </xsl:element>
                                                                            </xsl:element>
                                                                        </xsl:if>
                                                                    </xsl:element>
                                                                </xsl:element>
                                                            </xsl:element>
                                                        </xsl:element>
													<!-- right -->
                                                        <xsl:element name="td">
                                                            <xsl:value-of select="weblogo"/>
                                                        </xsl:element>
                                                    </xsl:element>
                                                </xsl:element>	
                                            </xsl:element>
                                        </xsl:element> 
									<!-- end supplier main branch row -->
                                        <xsl:if test="profile">
                                            <xsl:element name="tr">
                                                <xsl:element name="th">
                                                    <xsl:attribute name="id">description</xsl:attribute>
                                                    DESCRIPTION
                                                    <xsl:element name="hr"/>
                                                </xsl:element>
                                            </xsl:element>
                                            <xsl:element name="tr">
                                                <xsl:element name="td">
                                                    <xsl:attribute name="id">profile</xsl:attribute>
												
                                                    <xsl:value-of select="profile"/>
                                                    <xsl:element name="br"/>
                                                    <xsl:element name="br"/>
                                                </xsl:element>
                                            </xsl:element>
                                        </xsl:if>
					
                                        <xsl:if test="physical_address_latitude!=''">
                                        <!-- map - removed until we have time to research-->
                                            <div >                           
                                                <xsl:variable name="lat">
                                                    <xsl:value-of select="physical_address_latitude"/>
                                                </xsl:variable>
                                                <xsl:variable name="lng">
                                                    <xsl:value-of select="physical_address_longitude"/>
                                                </xsl:variable>
                                                <xsl:element name="a">
                                                    <xsl:attribute name="href">http://maps.google.com/maps?q=
                                                        <xsl:value-of select="physical_address_latitude"/>,+
                                                        <xsl:value-of select="physical_address_longitude"/>+%28
                                                        <xsl:if test="supplier_name!=''"> 
                                                            <xsl:value-of select="supplier_name"/>
                                                        </xsl:if> %29&amp;iwloc=A&amp;hl=en
                                                    </xsl:attribute>
                                                    <img src=""/>
                                                </xsl:element>
                                            </div>
                                        </xsl:if>               
                                        
                              
                                        <!-- begin supplier other branches row -->
                                        <xsl:if test="branch">
                                            <xsl:element name="tr">
                                                <xsl:element name="th">
                                                    <xsl:attribute name="id">branch</xsl:attribute>
                                                    <a href="#" onclick="hideDivs('branches','collapse_branch');return false;">
                                                        <span id="collapse_branch">[+]</span>
                                                    </a>
                                                    BRANCHES
                                                    <xsl:element name="hr"/>
                                                </xsl:element>
                                            </xsl:element>
                                        </xsl:if>
                                        <xsl:element name="tr">
                                            <xsl:element name="td">
                                                <div id="branches" style="display: none">
                                                    <xsl:element name="table">
                                                        <xsl:attribute name="width">100%</xsl:attribute>
                                                        <xsl:for-each select="branch">
                                                            <xsl:element name="tr">
                                                                <xsl:element name="td">
                                                                    <xsl:attribute name="width">100%</xsl:attribute>
                                                                    <xsl:element name="table">
                                                                        <xsl:attribute name="border">0</xsl:attribute>
                                                                        <xsl:attribute name="width">100%</xsl:attribute>
                                                                        <xsl:attribute name="id">tpl_viewsupinfo_head</xsl:attribute>
                                                                        <xsl:element name="tr">
																		<!-- left -->
                                                                            <xsl:element name="td">
                                                                                <xsl:attribute name="width">50%</xsl:attribute>
                                                                                <xsl:element name="table">
                                                                                    <xsl:attribute name="border">0</xsl:attribute>
                                                                                    <xsl:attribute name="width">100%</xsl:attribute>
                                                                                    <xsl:attribute name="id">tpl_viewsupinfo_lhead</xsl:attribute>
																				<!-- name -->
                                                                                    <xsl:element name="tr">
                                                                                        <xsl:element name="th">
                                                                                            <xsl:value-of select="@name"/>
                                                                                        </xsl:element>
                                                                                    </xsl:element>
																				<!-- address -->
                                                                                    <xsl:element name="tr">
                                                                                        <xsl:element name="td">
                                                                                            <xsl:if test="address">
                                                                                                <xsl:attribute name="id">address</xsl:attribute>
                                                                                                <xsl:value-of select="address"/>
                                                                                            </xsl:if>
                                                                                        </xsl:element>
                                                                                    </xsl:element>
																				<!-- telephone -->
                                                                                    <xsl:element name="tr">
                                                                                        <xsl:element name="td">
                                                                                            <xsl:if test="tel">
                                                                                                <xsl:attribute name="id">telephone</xsl:attribute>
                                                                                                <xsl:value-of select="tel"/>
                                                                                            </xsl:if>
                                                                                        </xsl:element>
                                                                                    </xsl:element>
																				<!-- email -->
                                                                                    <xsl:element name="tr">
                                                                                        <xsl:element name="td">
                                                                                            <xsl:if test="email">
                                                                                                <xsl:attribute name="id">email</xsl:attribute>
                                                                                                <xsl:element name="a">
                                                                                                    <xsl:attribute name="href">mailto:
                                                                                                        <xsl:value-of select="email"/>
                                                                                                    </xsl:attribute>
                                                                                                    <xsl:value-of select="email"/>
                                                                                                </xsl:element>
                                                                                            </xsl:if>	
                                                                                        </xsl:element>
                                                                                    </xsl:element>
                                                                                </xsl:element> <!-- tpl_viewsupinfo_lhead -->
                                                                            </xsl:element> <!-- tpl_viewsupinfo_lhead td -->
																		<!-- middle -->
                                                                            <xsl:element name="td">
                                                                                <xsl:element name="table">
                                                                                    <xsl:attribute name="border">0</xsl:attribute>
                                                                                    <xsl:attribute name="id">tpl_viewsupinfo_mhead</xsl:attribute>
																				<!-- other contact details -->
                                                                                    <xsl:element name="tr">
                                                                                        <xsl:element name="td">
                                                                                            <xsl:element name="table">
                                                                                                <xsl:attribute name="border">0</xsl:attribute>
                                                                                                <xsl:element name="tr">
                                                                                                    <xsl:element name="th">
                                                                                                        <xsl:attribute name="colspan">2</xsl:attribute>
                                                                                                        Additional Contact Details
                                                                                                    </xsl:element>
                                                                                                </xsl:element>
                                                                                                <xsl:element name="tr">
                                                                                                    <xsl:element name="td">
                                                                                                        <xsl:attribute name="id">title</xsl:attribute>
                                                                                                        <xsl:if test="ftel">
                                                                                                            Free Call:
                                                                                                        </xsl:if>
                                                                                                    </xsl:element>
                                                                                                    <xsl:element name="td">
                                                                                                        <xsl:if test="ftel">
                                                                                                            <xsl:attribute name="id">ftel</xsl:attribute>
                                                                                                            <xsl:value-of select="ftel"/>
                                                                                                        </xsl:if>
                                                                                                    </xsl:element>
                                                                                                </xsl:element>
                                                                                                <xsl:element name="tr">
                                                                                                    <xsl:element name="td">
                                                                                                        <xsl:if test="fax">
                                                                                                            Fax:
                                                                                                        </xsl:if>
                                                                                                    </xsl:element>
                                                                                                    <xsl:element name="td">
                                                                                                        <xsl:if test="fax">
                                                                                                            <xsl:attribute name="id">fax</xsl:attribute>
                                                                                                            <xsl:value-of select="fax"/>
                                                                                                        </xsl:if>
                                                                                                    </xsl:element>
                                                                                                </xsl:element>
                                                                                                <xsl:element name="tr">
                                                                                                    <xsl:element name="td">
                                                                                                        <xsl:if test="ffax">
                                                                                                            Free Fax:
                                                                                                        </xsl:if>
                                                                                                    </xsl:element>
                                                                                                    <xsl:element name="td">
                                                                                                        <xsl:if test="ffax">
                                                                                                            <xsl:attribute name="id">ffax</xsl:attribute>
                                                                                                            <xsl:value-of select="ffax"/>
                                                                                                        </xsl:if>
                                                                                                    </xsl:element>
                                                                                                </xsl:element>
                                                                                            </xsl:element>
                                                                                        </xsl:element>
                                                                                    </xsl:element>
																				<!-- postal address -->
                                                                                    <xsl:element name="tr">
                                                                                        <xsl:element name="td">
                                                                                            <xsl:if test="postal">
                                                                                                <xsl:element name="table">
                                                                                                    <xsl:attribute name="border">0</xsl:attribute>
                                                                                                    <xsl:element name="tr">
                                                                                                        <xsl:element name="th">
                                                                                                            Mailing Address
                                                                                                        </xsl:element>
                                                                                                    </xsl:element>
                                                                                                    <xsl:element name="tr">
                                                                                                        <xsl:element name="td">
                                                                                                            <xsl:attribute name="id">postal</xsl:attribute>
                                                                                                            <xsl:value-of select="postal"/>
                                                                                                        </xsl:element>
                                                                                                    </xsl:element>
                                                                                                </xsl:element>
                                                                                            </xsl:if>
                                                                                        </xsl:element>
                                                                                    </xsl:element>
                                                                                </xsl:element>
                                                                            </xsl:element>
                                                                        </xsl:element>
                                                                    </xsl:element>	
                                                                </xsl:element>
                                                            </xsl:element> 
                                                        </xsl:for-each>
                                                    </xsl:element> 
                                                </div>
                                            </xsl:element> 
                                        </xsl:element> 
									<!-- end supplier other branches row -->
									<!-- begin content row -->
                                        <xsl:if test="brand">
                                            <xsl:element name="tr">
                                                <xsl:element name="th">
                                                    <xsl:attribute name="id">brand</xsl:attribute>
                                                    <xsl:element name="br"/>
                                                    <a href="#" onclick="hideDivs('brands','collapse_brand');return false;">
                                                        <span id="collapse_brand">[+]</span>
                                                    </a>
                                                    BRANDS
                                                    <xsl:element name="hr"/>
                                                </xsl:element>
                                            </xsl:element>
                                            <xsl:element name="tr">
                                                <xsl:element name="td">
                                                    <div id="brands" style="display: none;">
                                                        <xsl:element name="ul">
                                                            <xsl:for-each select="brand">
                                                                <xsl:element name="li">
                                                                    <xsl:value-of select="."/>
                                                                </xsl:element>
                                                            </xsl:for-each>
                                                        </xsl:element>
                                                    </div>
                                                </xsl:element>
                                            </xsl:element>
                                        </xsl:if>
									<!-- end content row -->
                                    </xsl:element>
                                </div>
                            </xsl:for-each>
                        </xsl:element>
                    </xsl:element>
                </xsl:element>
            </body>
        </html>
    </xsl:template>	
</xsl:stylesheet>
