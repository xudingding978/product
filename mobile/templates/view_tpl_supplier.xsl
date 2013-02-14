<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="/">
<xsl:if test="string(supplier)">
    <xsl:for-each select="supplier">
    	<div class="view_supplier_supplier">
            <!-- primary details -->
        	<div class="view_supplier_primary_details">
            <!--wrapper1-->
                <div class="street_view_image">
                 <xsl:element name ="img">
                        <xsl:attribute name="src">http://cbk0.google.com/cbk?output=thumbnail&amp;w=90&amp;h=68&amp;ll=<xsl:value-of select="physical_address_latitude"/>,<xsl:value-of select="physical_address_longitude"/>&amp;thumb=0</xsl:attribute>
                     </xsl:element>
                 </div>
                <div class="supplier_wrapper_1">
                    <!-- supplier logo -->
                    <xsl:if test="string(web_logo_location)">
                        <div class="web_logo">
                            <xsl:value-of select="web_logo_location" />
                        </div>
                    </xsl:if>
                    <!-- supplier name -->
                    <div class="view_supplier_name">
                        <xsl:value-of select="trading_as_name" />
                    </div>
                    <!-- Categories -->
                    <div class="supplier_categories">
                        <xsl:value-of select="product_category_name"></xsl:value-of>
                    </div>
                    <!-- -->
                    <!-- physical address -->
                    <div class="view_supplier_address">
                        <xsl:if test="string(physical_address_street_address)"><xsl:value-of select="physical_address_street_address" /></xsl:if>, 
                            <xsl:choose>
                                <xsl:when test="physical_address_suburb = physical_address_city">
                                    <xsl:if test="string(physical_address_suburb)"><xsl:value-of select="physical_address_city" /></xsl:if>, 
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:if test="string(physical_address_suburb)"><xsl:value-of select="physical_address_suburb" /></xsl:if>, 
                                    <xsl:if test="string(physical_address_city)"><xsl:value-of select="physical_address_city" /></xsl:if>, 
                                </xsl:otherwise>
                            </xsl:choose>          
                        <xsl:if test="physical_address_state"><xsl:value-of select="physical_address_state" /></xsl:if>, 
                        <xsl:if test="physical_address_post_code"><xsl:text></xsl:text><xsl:value-of select="physical_address_post_code" /></xsl:if>
                    </div>
                    <!-- phone number -->
                    <div class="view_supplier_phone">
                        <xsl:if test="telephone_no">
                        	<xsl:element name="a">
	                            <xsl:attribute name="href">tel:<xsl:value-of select="telephone_no" /></xsl:attribute><xsl:value-of select="telephone_no" />
                            </xsl:element>
                        </xsl:if>
                    </div>
                    <!-- email 
                    <div class="view_supplier_email">
                        <xsl:if test="string(email_address)">
                            <xsl:element name="a">
                                <xsl:attribute name="href">mailto:<xsl:value-of select="email_address"/></xsl:attribute><xsl:value-of select="email_address" />
                            </xsl:element>
                        </xsl:if>
                    </div>-->
                    <!-- website -->
                    <div class="view_supplier_url view_supplier_website">
                        <xsl:if test="string(website_address)">
                            <xsl:element name="a">
                                <xsl:attribute name="target">_blank</xsl:attribute>
                                <xsl:attribute name="href">http://<xsl:value-of select="website_address"/></xsl:attribute><xsl:value-of select="website_address" />
                            </xsl:element>
                        </xsl:if>
                    </div>
                </div><!--wrapper1--> 
                <!-- map - removed until we have time to research-->
                        <div class="view_supplier_map supplier_wrapper_1">
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
                                    <xsl:value-of select="supplier_name"/>%29&amp;iwloc=A&amp;hl=en
                                </xsl:attribute>
                                <img src="http://maps.googleapis.com/maps/api/staticmap?center={$lat},{$lng}&amp;zoom=12&amp;size=320x200&amp;sensor=true&amp;scale=1&amp;markers=color:red%7Csize:large%7C{$lat},{$lng}"/>
                            </xsl:element>
                        </div>
                <div class="supplier_wrapper_2">
				<!-- facebook -->
                <div class="view_supplier_url view_supplier_facebook">
                	<xsl:if test="string(facebook_address_url)">
                        <xsl:element name="a">
                         	<xsl:attribute name="target">_blank</xsl:attribute>
                            <xsl:attribute name="href">http://<xsl:value-of select="facebook_address_url"/></xsl:attribute><xsl:value-of select="facebook_address_url" />
                        </xsl:element>
                    </xsl:if>
                </div>
                <!-- twitter -->
                <xsl:if test="string(twitter_address_url)">
                	<div class="view_supplier_url view_supplier_twitter">
                        <xsl:element name="a">
                         	<xsl:attribute name="target">_blank</xsl:attribute>
                            <xsl:attribute name="href">http://<xsl:value-of select="twitter_address_url"/></xsl:attribute><xsl:value-of select="twitter_address_url" />
                        </xsl:element>
                    </div>
                </xsl:if>
                <!-- LinkedIn -->
                <div class="view_supplier_url view_supplier_linkedin">
                	<xsl:if test="string(linkedin_address_url)">
                        <xsl:element name="a">
                         	<xsl:attribute name="target">_blank</xsl:attribute>
                            <xsl:attribute name="href">http://<xsl:value-of select="linkedin_address_url"/></xsl:attribute><xsl:value-of select="linkedin_address_url" />
                        </xsl:element>
                    </xsl:if>
                </div>
                <!-- YouTube -->
                <xsl:if test="string-length(youtube_address_url)>0">
                	<div class="view_supplier_url view_supplier_youtube">
                        <xsl:element name="a">
                         	<xsl:attribute name="target">_blank</xsl:attribute>
                            <xsl:attribute name="href">http://<xsl:value-of select="youtube_address_url"/></xsl:attribute>Watch Us On YouTube
                        </xsl:element>
                	</div>
                </xsl:if>
                  <!-- FOURSQUARE -->
                <xsl:if test="string-length(foursquare_address_url)>0">  
               		<div class="view_supplier_url view_supplier_foursquare">
                        <xsl:element name="a">
                         	<xsl:attribute name="target">_blank</xsl:attribute>
                            <xsl:attribute name="href">http://<xsl:value-of select="foursquare_address_url"/></xsl:attribute>CheckIn Via FourSquare
                        </xsl:element>
                    </div>
                </xsl:if>
            <!-- Service Description -->
            <div class="supplier_service_description">
            	<xsl:if test="string(company_profile_text)">
                	<xsl:value-of select="company_profile_text"></xsl:value-of>
                </xsl:if>
            </div>
        	<div class="view_supplier_secondary_details">
            	<!-- additional details -->
                <xsl:choose>
                <xsl:when test="string(free_telephone_no) or string(fax_no) or string(free_fax_no)">
                    <div class="view_supplier_ad_details">
                        Additional Contact Details
                    </div>
                    <table>
                        <!-- free telephone -->
                        <xsl:if test="string(free_telephone_no)">
                            <tr>
                                <td class="view_supplier_fcall">Free Call:</td>
                                <td class="view_supplier_fcall"><xsl:value-of select="free_telephone_no" /></td>
                            </tr>
                        </xsl:if>
                        <!-- fax -->
                        <xsl:if test="string(fax_no)">
                            <tr>
                                <td class="view_supplier_fax">Fax:</td>
                                <td class="view_supplier_fax"><xsl:value-of select="fax_no" /></td>
                            </tr>
                        </xsl:if>
                         <!-- free fax no-->
                        <xsl:if test="string(free_fax_no)">
                            <tr>
                                <td class="view_supplier_fax">Free Fax:</td>
                                <td class="view_supplier_fax"><xsl:value-of select="free_fax_no" /></td>
                            </tr>
                        </xsl:if>
                    </table>
                </xsl:when>
                </xsl:choose>
                <xsl:if test="string(postal_address_street_address)">
                <div class="view_supplier_ad_details">
                	Mailing Address
                </div>
                <!-- mailing address -->
                <table>
                	<xsl:if test="string(postal_address_street_address)">
                    	<tr>
                        	<!--postal_address_building_address-->
                        	<xsl:if test="string(postal_address_building_address)">
                            	<td class="view_supplier_postal_address_building_address">Building Address:</td>
                                <td class="view_supplier_postal_address_building_address"><xsl:value-of select="postal_address_building_addres" /></td>
                            </xsl:if>
                            <!--postal_address_street_address-->
                            <xsl:if test="string(postal_address_street_address)">
                            	<td class="view_supplier_postal_address_street_address">Postal Street Adddress:</td>
                            	<td class="view_supplier_postal_address_street_address"><xsl:value-of select="postal_address_street_address" /></td>
                            </xsl:if> 
                        </tr>
                    </xsl:if> 
                </table>
                </xsl:if>
            </div>
            <!-- mailing address -->
            <xsl:if test="string(postal_address_street_address)">
                <div class="view_supplier_maddress_title">
                    Mailing Address
                </div>
                <div class="view_supplier_maddress"><xsl:value-of select="postal_address_street_address" />
                    <xsl:if test="string(postal_address_suburb)">, <xsl:value-of select="postal_address_suburb" /></xsl:if>
                    <xsl:if test="string(postal_address_city)">, <xsl:value-of select="postal_address_city" /></xsl:if>
                    <xsl:if test="string(postal_address_state)">, <xsl:value-of select="postal_address_state" /></xsl:if>
                    <xsl:if test="string(postal_address_post_code)"><xsl:text> </xsl:text><xsl:value-of select="postal_address_post_code" /></xsl:if>
                </div>
            </xsl:if>
        </div>
      </div><!--wrapper2-->
    </div><!--supplier listing -->
    </xsl:for-each>
</xsl:if>
</xsl:template>
</xsl:stylesheet>