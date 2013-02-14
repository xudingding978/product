<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  version="1.0" >
    <xsl:output method="html"/>
    <xsl:template match="/">
        <xsl:if test="string(categories/category/root)">
            <div class="products_header_text">
                                Whether you're an industry professional or enthusiastic amateur, The 
                <i>Taste Of New Zealand</i> directory includes suppliers of New Zealand's best fresh producers.
            </div>
        </xsl:if>
        <div id="search_results_list">Search Results
            <xsl:for-each select="categories/category">
                <div class="category">
                    <xsl:element name="a">
                        <xsl:attribute name="class">category_name</xsl:attribute>
                        <xsl:choose>
                            <xsl:when test="string(//suppliers/.)">
                                <xsl:attribute name="href">?stype=cat&amp;crec=<xsl:value-of select="rec_id"/>&amp;srec=<xsl:value-of select="//suppliers/supplier_rec_id"/></xsl:attribute>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:attribute name="href">?stype=cat&amp;crec=<xsl:value-of select="rec_id"/>
                                </xsl:attribute>
                            </xsl:otherwise>
                        </xsl:choose>
                        <xsl:if test="string(web_image_location)">
                            <div class="category_image">
                                <xsl:variable name="cat_web_img">
                                    <xsl:value-of select="web_image_location"/>
                                </xsl:variable>
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
                                <div class="category_name_search ">
                                    <xsl:value-of select="name"/>
                                </div><!--category name -->
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:element>
                   <!-- suppliers for each category found in the keyword search -->
                    <xsl:for-each select=".//supplier"><div class="hr"></div>
                            <xsl:element name="a">
                                <xsl:attribute name="class">supplier_link</xsl:attribute>
                                <xsl:attribute name="href">?stype=sup&amp;srec=<xsl:value-of select="supplier_rec_id"/>&amp;crec=<xsl:value-of select="//category/rec_id"/>
                                </xsl:attribute>
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
                            </xsl:element>
                    </xsl:for-each>
                </div>
            </xsl:for-each>
        </div>
    </xsl:template>
</xsl:stylesheet>