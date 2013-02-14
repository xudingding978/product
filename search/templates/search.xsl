<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>
    <xsl:param name="searchWord"/>
    <xsl:param name="target"/>
    <xsl:param name="count"/>
    <xsl:param name="pos"/>
    <xsl:param name="bc"/>
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" href="styles/search.css" type="text/css"/>
                <link rel="stylesheet" href="../custom.css" type="text/css"/>
				<!--(<script language="javascript">
					"*").each(function () { 
					   if ($(this).children().length == 0) {
					      var newHTML = $(this).html().replace('hihi','<img src = "image.jpg" />');
					      $(this).html(newHTML);
					   } 
					});
				</script>-->
                <script language="javascript">
                    function layoutPage() {
                    parent.document.getElementById('browse_container_group').style.display='block'; 
                    parent.document.getElementById('content_zone').className = 'content_zone group';
                    }
                </script>
            </head>
            <body onload="layoutPage();">
                <xsl:element name="span">
                    <xsl:if test="$searchWord">
                        <xsl:attribute name="id">pretext</xsl:attribute>
                        About 
                        <b>
                            <xsl:value-of select="$count"/>
                        </b> results found for keyword 
                        <b>
                            <xsl:value-of select="$searchWord"/>
                        </b>
                    </xsl:if>
                    <xsl:if test="$bc">
                        <xsl:attribute name="id">breadcrumb_sm</xsl:attribute>
                        <xsl:value-of select="$bc"/>
                    </xsl:if>
                </xsl:element>
                <xsl:for-each select="result/item">
                    <div id="summary_listing">
                        <xsl:if test="@bc">
                            <div class="breadcrumbs">
                                <xsl:if test="position()  mod 2 = 1">
                                    <span class="mod2-1"></span>
                                </xsl:if>
                                <xsl:if test="position()  mod 2 = 0">
                                    <span class="mod2-0"></span>
                                </xsl:if>
                                <xsl:value-of select="@bc"/>
                            </div>
                        </xsl:if>
                        <xsl:if test="position()  mod 2 = 1">
                            <span class="mod2-1"></span>
                        </xsl:if>
                        <div class="business-listing">
                            <div class="social-network-header-wrapper">
                                <div class="social-network-header">
	
                                </div>
                            </div><!--div class social network header-->
                            <div class="ribbon">
                                <div class="name-wrapper">
                                    <div class="name">
                                        <xsl:element name="a">
                                            <xsl:attribute name="href">
                                                <xsl:value-of select="@more"/>
                                            </xsl:attribute>
                                            <xsl:attribute name="target">
                                                <xsl:value-of select="$target"/>
                                            </xsl:attribute>
                                            <xsl:attribute name="class">name-link</xsl:attribute>
                                            <xsl:value-of select="@name"/>
                                        </xsl:element>
                                    </div>
                                    <div class="ribbon-left-arrow"></div>
                                </div><!--div class name wrapper-->
                                <div class="offer-wrapper">
                                    <div class="offer">
									<!--Latest Offer Expired-->
                                    </div>
                                    <div class="ribbon-right-arrow"></div>
                                </div>	
                            </div><!--div class ribbon-->
						<!--<xsl:if test="(dont show if breadcrumbs)">-->						
                            <xsl:if test="@address"><!--Removes contact info for search categories-->
                                <div class="logo-wrapper">
                                    <div class="logo">
                                        <xsl:choose>
                                            <xsl:when test="@weblogo">
                                                <xsl:element name="img">
                                                    <xsl:attribute name="src">
                                                        <xsl:value-of select="@weblogo"/>
                                                    </xsl:attribute>
                                                    <xsl:attribute name="width">110px</xsl:attribute>
                                                </xsl:element>
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <xsl:element name="img">
                                                    <xsl:attribute name="src">images/noimage.png</xsl:attribute>
                                                </xsl:element>
                                            </xsl:otherwise>
                                        </xsl:choose>
                                        <hr />
                                        <div class="star-rating">
                                            <div class="star1">
                                                <div class="star2">
                                                    <div class="star3">
                                                        <div class="star4">
                                                            <div class="star5">
                                                            </div><!--star5-->
                                                        </div><!--star4-->
                                                    </div><!--star3-->
                                                </div><!--star2-->
                                            </div><!--star1-->
                                        </div><!--star rating-->
                                    </div><!--div class logo-->
                                </div><!--div class logo wrapper-->
							<!--<xsl:if>-->
                                <div class="text">
                                    <xsl:if test=".">
                                        <xsl:value-of select="."/>
                                        <div class="full-detail">
                                            <xsl:element name="a">
                                                <xsl:attribute name="href">
                                                    <xsl:value-of select="@more"/>
                                                </xsl:attribute>
                                                <xsl:attribute name="target">
                                                    <xsl:value-of select="$target"/>
                                                </xsl:attribute>
                                                <xsl:attribute name="class">business-link</xsl:attribute>
                                                View Full Details For 
                                                <b>
                                                    <xsl:value-of select="@name"/>
                                                </b>
                                            </xsl:element>
											<!--<xsl:element name="a">
												<xsl:attribute name="href"><xsl:value-of select="@more"/></xsl:attribute>
												<xsl:attribute name="target"><xsl:value-of select="$target"/></xsl:attribute>
												<xsl:attribute name="class"></xsl:attribute>
												<xsl:attribute name="onclick">document.getElementById('tabs').tabber.tabShow(2)</xsl:attribute>
												testing		
											</xsl:element>-->
                                        </div>
                                    </xsl:if>
                                </div><!--div class text-->
                                <div class="contact-info">
                                    <div class="address">	
                                        <img src="http://ctb.business-software.co.nz/search/images/icon_map_sm.png" hspace="5px" alt="" align="left"/>	
                                        <a class="address-click" style="display:block" onclick="this.style.display='none'">Address</a>
                                        <div class="hidden-address" style="display:block">
                                            <xsl:value-of select="@address"/>
                                        </div>
                                    </div><!--div class address-->
                                    <div class="telephone">
                                        <xsl:if test="@tel">
                                            <img src="http://ctb.business-software.co.nz/search/images/icon_phone_sm.png" hspace="5px" alt="" align="left"/>
                                            <a class="tel-click" style="display:block" onclick="this.style.display='none'">Telephone</a>
                                            <div id="hidden-telephone"  style="DISPLAY: block">
                                                <xsl:value-of select="@tel"/>
                                            </div>
                                        </xsl:if>
                                    </div><!--div class telephone-->
                                    <div class="website">
                                        <xsl:if test="@web">
                                            <img src="http://ctb.business-software.co.nz/search/images/icon_web_sm.png" hspace="5px" alt="" align="left"/>
                                            <xsl:element name="a">
                                                <xsl:attribute name="target">_blank</xsl:attribute>
                                                <xsl:attribute name="class">contact-link</xsl:attribute>
                                                <xsl:attribute name="href">http://
                                                    <xsl:value-of select="@web"/>
                                                </xsl:attribute>Website
                                            </xsl:element>
                                        </xsl:if>
                                    </div><!--div class website-->	
                                    <div class="email">							
                                        <xsl:if test="@email">
                                            <img src="http://ctb.business-software.co.nz/search/images/icon_email_sm.png" hspace="7px" alt="" align="left"/>
                                            <xsl:element name="a">
                                                <xsl:attribute name="class">contact-link</xsl:attribute>
                                                <xsl:attribute name="href">mailto:
                                                    <xsl:value-of select="@email"/>
                                                </xsl:attribute>Email
                                            </xsl:element>
                                        </xsl:if>
                                    </div><!--div class email-->
                                </div><!--div class contact info-->
                            </xsl:if>
                            <div class="business-listing-footer">
                                <div class="business-listing-footer-content">
                                    <a href="" class="footer-link">Category 1</a>
                                </div>
                                <div class="business-listing-footer-content">
                                    <a href="" class="footer-link">Category 2</a>
                                </div>
                                <div class="business-listing-footer-content">
                                    <a href="" class="footer-link">Category 3</a>
                                </div>
                                <xsl:if test="@address">
                                    <div class="button-3">
                                        <a href="" class="about-us-btn">About us</a>
                                        <a href="" class="reviews-btn">Reviews</a>
                                        <a href="" class="branches-btn">Branches</a>
                                    </div>
                                </xsl:if>
                            </div>
                        </div><!--div class business-listing-->
                    </div><!--tpl-->
                </xsl:for-each>
                <br/>
                <xsl:element name="center">
                    <xsl:element name="table">
                        <xsl:attribute name="id">paging</xsl:attribute>
                        <xsl:attribute name="border">0</xsl:attribute>
                        <xsl:element name="tr">
                            <xsl:for-each select="result/nav">
                                <xsl:call-template name="loop.for.col">
                                    <xsl:with-param name="total" select="@pages"/>
                                    <xsl:with-param name="cur" select="@cur"/>
                                    <xsl:with-param name="limit" select="@startind + @limit"/>
                                    <xsl:with-param name="i" select="@startind"/>
                                </xsl:call-template>
                            </xsl:for-each>
                        </xsl:element>
                    </xsl:element>
                </xsl:element>
            </body>
        </html>
    </xsl:template>
    <xsl:template name="loop.for.col">
        <xsl:param name="total" />
        <xsl:param name="cur" />
        <xsl:param name="limit" />
        <xsl:param name="i" />
        <xsl:if test="$i &lt; $limit and $i &lt;= $total">
            <xsl:element name="td">
                <xsl:attribute name="id">website</xsl:attribute>
                <xsl:attribute name="width">20px</xsl:attribute>
                <xsl:element name="a">
                    <xsl:choose>
                        <xsl:when test="$i = $cur">
                            <xsl:value-of select="$i"/>
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:attribute name="href">
                                <xsl:value-of select="@href"/>
                                <xsl:value-of select="$i"/>
                            </xsl:attribute>
                            <xsl:value-of select="$i"/>
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:element>
                <xsl:call-template name="loop.for.col">
                    <xsl:with-param name="total" select="$total"/>
                    <xsl:with-param name="cur" select="$cur"/>
                    <xsl:with-param name="limit" select="$limit"/>
                    <xsl:with-param name="i" select="$i + 1"/>
                </xsl:call-template>
            </xsl:element>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>
