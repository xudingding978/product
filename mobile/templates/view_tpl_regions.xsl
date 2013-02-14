<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="/">
	<div id="region_list">
    	<xsl:for-each select="regions/region">
        	<!-- region -->
            <xsl:element name="a">
            <xsl:attribute name="class">region</xsl:attribute>
            	<xsl:attribute name="href">?stype=reg&amp;sreg=<xsl:value-of select="PHYSICAL_ADDRESS_STATE"/></xsl:attribute>
                <!-- name -->
                <xsl:element name="div">
                	<xsl:attribute name="class">region_name</xsl:attribute>
                    <xsl:value-of select="substring-before(PHYSICAL_ADDRESS_STATE,'Region')"/>
                </xsl:element>
                 <xsl:element name="div">
                    	<xsl:attribute name="class">supplier_address_suburb</xsl:attribute>
                        <xsl:value-of select="PHYSICAL_ADDRESS_SUBURB"/>
                    </xsl:element>
                <xsl:element name="div">
                    <xsl:attribute name="class">supplier_address_city</xsl:attribute>
                    <xsl:value-of select="PHYSICAL_ADDRESS_CITY"/>
                </xsl:element>
            </xsl:element>
            <hr />
        </xsl:for-each>
    </div>
</xsl:template>
</xsl:stylesheet>