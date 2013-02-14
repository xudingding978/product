<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  version="1.0" >
<xsl:output method="html"/>
<xsl:template match="/">
	<xsl:if test="string(categories/category/root)">
        <div class="products_header_text">
        	Whether you're an industry professional or enthusiastic amateur, The <i>Taste Of New Zealand</i> directory includes suppliers of New Zealand's best fresh producers.
        </div>
    </xsl:if>
	<div id="category_list">
    	<xsl:for-each select="categories/category">
        	<div class="category">
                <xsl:element name="a">
                	<xsl:attribute name="class">category_name</xsl:attribute>

                    <xsl:choose>
                        <xsl:when test="string(//suppliers/.)">
                            <xsl:attribute name="href">?stype=cat&amp;crec=<xsl:value-of select="rec_id"/>&amp;srec=<xsl:value-of select="//suppliers/supplier_rec_id"/></xsl:attribute>
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:attribute name="href">?stype=cat&amp;crec=<xsl:value-of select="rec_id"/></xsl:attribute>
                        </xsl:otherwise>
                    </xsl:choose>
                    <xsl:if test="string(web_image_location)">
                       <div class="category_image">
                        <xsl:variable name="cat_web_img"><xsl:value-of select="web_image_location"/></xsl:variable>
                        	<img src="{$cat_web_img}"/>
                       </div><!--category image -->
                    </xsl:if>
                    <xsl:choose>
                        <xsl:when test="string(text)">
                            <div class="category_text_label">
                                <xsl:value-of select="text"/>
                            </div><!--category text label -->
                        </xsl:when>
                        <xsl:otherwise>
                        	<div class="category_name">
                            	<xsl:value-of select="name"/>
                            </div><!--category name -->
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:element>
                <xsl:for-each select="product_category_node">
                	<xsl:for-each select="name">
	                	<div class="product_category_node"><xsl:value-of select="."></xsl:value-of></div>
                    </xsl:for-each>
                </xsl:for-each>
            </div>
            <div class="hr"></div>
        </xsl:for-each>
    </div>
</xsl:template>
</xsl:stylesheet>