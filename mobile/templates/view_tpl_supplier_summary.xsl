<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="/">
	<div id="supplier_list">
    	<xsl:for-each select="suppliers/supplier">
        <!-- supplier distance -->
            <xsl:if test="string(distance)">
                <div class="supplier_distance">
                	<xsl:choose>
                    	<xsl:when test="distance &gt; 1">
                    		<xsl:value-of select="substring(round(100*distance) div 100,1,3)"></xsl:value-of> <div class="supplier_distance_metrics">km's</div>
                        </xsl:when>
                        <xsl:otherwise>
                        	<xsl:value-of select="round(1000*distance)"></xsl:value-of> <div class="supplier_distance_metrics">mtrs</div>
                        </xsl:otherwise>
                    </xsl:choose>
                </div>
            </xsl:if>
                    <!-- Web Logo 
                <xsl:if test="string(web_logo_location)">
                	<div class="supplier_web_logo">
                    	<xsl:element name="img">
                        	<xsl:attribute name="src">http://www.hospitalitybiz.co.nz/images/mobile/<xsl:value-of select="web_logo_location" /></xsl:attribute>
                        </xsl:element>
                    </div>
                </xsl:if> -->
        <!-- display block for listing anchor -->
        <xsl:element name="div">
         <xsl:attribute name="class"><xsl:value-of select="directory_offer"/></xsl:attribute>
        	<!-- supplier name and details-->
            <xsl:element name="a">
            <xsl:attribute name="class">supplier_link</xsl:attribute>
            	<xsl:attribute name="href">?stype=sup&amp;srec=<xsl:value-of select="supplier_rec_id"/>&amp;crec=<xsl:value-of select="parent_category"/></xsl:attribute>
                <div class="street_view_image">
                 <xsl:element name ="img">
                        <xsl:attribute name="src">http://cbk0.google.com/cbk?output=thumbnail&amp;w=90&amp;h=68&amp;ll=<xsl:value-of select="physical_address_latitude"/>,<xsl:value-of select="physical_address_longitude"/>&amp;thumb=0</xsl:attribute>
                     </xsl:element>
                 </div>
                
                <!-- name -->
                <xsl:element name="div">
                	<xsl:attribute name="class">supplier_name</xsl:attribute>
                    <xsl:value-of select="trading_as_name"/>
                </xsl:element>
                
               
                <!-- sub info -->
                <xsl:element name="div">
                	<xsl:attribute name="class">supplier_sub_info</xsl:attribute>
                    <!-- region -->
                    <xsl:element name="div">
                        <xsl:attribute name="class">supplier_region</xsl:attribute>
                         <xsl:value-of select="physical_address_suburb"/>
                        <!-- street_address
                        <xsl:element name="div">
                            <xsl:attribute name="class">supplier_street_address</xsl:attribute>
                            <xsl:value-of select="physical_address_street_address"/>
                        </xsl:element>--> 
                    </xsl:element>
                </xsl:element>
             
            <!-- Categories -->
            <div class="supplier_categories">                
                <xsl:for-each select=".//product_category_name">
                	<xsl:choose>
                        <xsl:when test="position()=last()">
                            <xsl:value-of select="."></xsl:value-of>. 
                        </xsl:when>
                        <xsl:otherwise>
                        	<xsl:value-of select="."></xsl:value-of>,  
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:for-each>
            </div>
            <!-- Service Description -->
            <div class="supplier_description">
            	<xsl:if test="string(company_profile_text)">
            		<xsl:value-of select="substring(company_profile_text,0,200)"></xsl:value-of>...[MORE]
                </xsl:if>
            </div> 
             </xsl:element>                            	
            </xsl:element>
            <div class="hr"></div>
        </xsl:for-each>
    </div>
</xsl:template>
</xsl:stylesheet>