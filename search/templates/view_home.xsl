<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" href="styles/home.css" type="text/css"/>
                <link rel="stylesheet" href="../custom.css" type="text/css"/>
                <script type="text/javascript" src="scripts/jquery.js"></script>
                <script type="text/javascript" src="scripts/easySlider1.7.js"></script>
                <!--Easy Slider-->
                <script type="text/javascript">
                    $(document).ready(function(){	
                    $("#slider").easySlider({
                    auto: true, 
                    continuous: true
                    });
                    });	
                </script>
            </head>
            <body>
                <div id="slide-wrapper">
                    <div id="slider">                    
                        <ul>				
                            <xsl:for-each select="frontpage-listing/slider-listing/listing">
                                <li>
                                    <div class="frontpage-slider">
                                        <div class="frontpage-slider-left">
                                            <xsl:element name="img">
                                                <xsl:attribute name="src">
                                                    <xsl:value-of select="image"/>
                                                </xsl:attribute>
                                                <xsl:attribute name="width">100%</xsl:attribute>
                                            </xsl:element>
                                        </div>
                                        <div class="frontpage-slider-right">
                                            <h1>
                                                <xsl:value-of select="title"/>
                                            </h1>
                                            <br />
                                            <xsl:value-of select="desc"/>
                                        </div>
                                    </div>
                                </li>
                            </xsl:for-each>
                        </ul>
                    </div>
                </div>
                <div id="featured-listing-wrapper">
                    <div id="featured-listing">
                        <br />
                        <h2>
                            Categories
                            <a href="/#/categories" class="view-all" target="_parent">View all categories</a>
                        </h2>
                        <div id="featured-listing-thumb-wrapper">
                            <xsl:for-each select="frontpage-listing/category-listing/category">
                                <xsl:element name="a">
                                    <xsl:attribute name="href">/search/view.php?key=c,<xsl:value-of select="rec_id"/>,tree</xsl:attribute>
                                    <div class="featured-listing-thumb"> 
                                        <div class="featured-listing-thumb-image">                                   
                                            <xsl:element name="img">
                                                <xsl:attribute name="src">
                                                    <xsl:value-of select="web_image_location"/>
                                                </xsl:attribute>
                                                <xsl:attribute name="width">168px</xsl:attribute>                                            
                                            </xsl:element>
                                        </div>
                                        <h3>
                                            <xsl:value-of select="name"/>
                                        </h3>
                                        <div class="featured-listing-thumb-content">
                                            <xsl:element name="a">                                                
                                                <xsl:attribute name="href">#</xsl:attribute>
                                                <xsl:attribute name="style">font-size:10px;</xsl:attribute>                                            
                                                <xsl:value-of select="category"/>                                            
                                            </xsl:element>
                                            <br />
                                            <xsl:value-of select="desc"/>
                                        </div>
                                    </div>
                                </xsl:element>
                            </xsl:for-each>
                        </div>
                    </div>
                </div>
                <div id="featured-listing-wrapper">
                    <div id="featured-listing">
                        <h2>
                            Featured Listings
                            <a href="#" class="view-all">View all listings</a>
                        </h2>
                        <div id="featured-listing-thumb-wrapper">
                            <xsl:for-each select="frontpage-listing/featured-listing/listing">  
                                <div class="featured-listing-thumb"> 
                                    <div class="featured-listing-thumb-image">                                   
                                        <xsl:element name="img">
                                            <xsl:attribute name="src">
                                                <xsl:value-of select="image"/>
                                            </xsl:attribute>
                                            <xsl:attribute name="width">188px</xsl:attribute>                                            
                                        </xsl:element>
                                    </div>
                                    <h3>
                                        <xsl:value-of select="title"/>
                                    </h3>
                                    <div class="featured-listing-thumb-content">
                                        in 
                                        <xsl:element name="a">                                                
                                            <xsl:attribute name="href">#</xsl:attribute>
                                            <xsl:attribute name="style">font-size:10px;</xsl:attribute>                                            
                                            <xsl:value-of select="category"/>                                            
                                        </xsl:element>
                                        <br />
                                        <xsl:value-of select="desc"/>
                                    </div>
                                </div>
                            </xsl:for-each>
                        </div> 
                        <div id="featured-deals">
                            <br />
                            <h2>Featured Deals 
                                <a href="#" class="view-all">View all deals</a>
                            </h2>
                            
                            <xsl:for-each select="frontpage-listing/featured-deals/listing"> 
                                <xsl:if test ="position() = 1">
                                    <div id="featured-deals-large_thumb">
                                        <div class="dc-amount-arrow"></div>
                                        <div class="dc-amount-wrapper">                                            
                                            <xsl:value-of select="dc-amount"/>                                           
                                        </div>
                                        <div id="featured-deals-large-thumb-img">
                                            <xsl:element name="img">
                                                <xsl:attribute name="src">
                                                    <xsl:value-of select="image"/>
                                                </xsl:attribute>
                                                <xsl:attribute name="width">152px</xsl:attribute>
                                                <xsl:attribute name="style">float:right;</xsl:attribute>
                                            </xsl:element>
                                        </div>
                                        <div id="featured-deals-large-thumb-content">
                                            <b>
                                                <xsl:value-of select="dc-detail"/>
                                            </b>
                                            <br />
                                            by
                                            <xsl:element name="a">                                                
                                                <xsl:attribute name="href">#</xsl:attribute>
                                                <xsl:attribute name="style">font-size:10px;</xsl:attribute>                                            
                                                <xsl:value-of select="business"/>                                            
                                            </xsl:element>
                                        </div>
                                    </div>
                                </xsl:if>
                                <div class="featured-deals-right">   
                                    <div class="dc-amount-arrow"></div>
                                    <div class="dc-amount-wrapper">                                            
                                        <xsl:value-of select="dc-amount"/>                                           
                                    </div>
                                    <div class="featured-deals-large-thumb-content">
                                        <b>
                                            <xsl:value-of select="dc-detail"/>
                                        </b>
                                        <br />
                                        by
                                        <xsl:element name="a">                                                
                                            <xsl:attribute name="href">#</xsl:attribute>
                                            <xsl:attribute name="style">font-size:10px;</xsl:attribute>                                            
                                            <xsl:value-of select="business"/>                                            
                                        </xsl:element>
                                    </div>
                                </div>
                            </xsl:for-each>
                        </div>
                    </div>                      
                </div> 
               
               
                
                
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
