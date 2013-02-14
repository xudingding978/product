<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding='utf-8' indent='yes'/>
	<xsl:param name="row" />
	<xsl:param name="col" />
	<xsl:param name="morepage" />
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" href="styles/search.css" type="text/css"/>
                                <link rel="stylesheet" href="../custom.css" type="text/css"/>
			</head>
			<body onload="parent.document.getElementById('browse_container_group').style.display='block'">
				<xsl:for-each select="result">
					<xsl:attribute name="id">breadcrumb</xsl:attribute>
					<xsl:value-of select="@bc"/>
				</xsl:for-each>
				<xsl:for-each select="result/item">
					<div class="business-listing-leaf">
						<div class="social-network-header-wrapper">
							<div class="social-network-header">
							</div>
						</div><!--div class social network header-->
						<div class="ribbon">
							<div class="name-wrapper">
								<div class="name">
									<xsl:element name="a">
										<xsl:attribute name="href"><xsl:value-of select="@more"/></xsl:attribute>
										<xsl:attribute name="target">_self</xsl:attribute>
										<xsl:attribute name="class">name-link</xsl:attribute>
										<xsl:value-of select="@name"/>
									</xsl:element>
								</div>
								<div class="ribbon-left-arrow"></div>
							</div><!--div class name wrapper-->
							<div class="offer-wrapper">
								<div class="offer"></div>
								<div class="ribbon-right-arrow2"></div>
							</div>	
						</div>
						<div class="business-listing-footer-leaf">
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
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
	
	<xsl:template name="loop.for.row">
		<xsl:param name="i" />
		<!--  begin row -->
			<xsl:if test="$i &lt;= $row">
				<xsl:element name="tr">
					<xsl:call-template name="loop.for.col">
						<xsl:with-param name="ii">1</xsl:with-param>
						<xsl:with-param name="col">$col</xsl:with-param>
					</xsl:call-template>
				</xsl:element>
			</xsl:if>
			
			<!--begin_: RepeatTheLoopUntilFinished-->
			<xsl:if test="$i &lt;= $row">
				<xsl:call-template name="loop.for.row">
					<xsl:with-param name="i">
						<xsl:value-of select="$i + 1"/>
					</xsl:with-param>
				</xsl:call-template>
			</xsl:if>
		<!-- end row -->
	</xsl:template>
	
	<xsl:template name="loop.for.col">
		<xsl:param name="ii" />
		<!--  begin col -->
			<xsl:if test="$ii &lt;= $col">
				<xsl:element name="td">
					<xsl:attribute name="id">name</xsl:attribute>
					<xsl:value-of select="@name"/>
				</xsl:element>
			</xsl:if>
			
			<!--begin_: RepeatTheLoopUntilFinished-->
			<xsl:if test="$ii &lt;= $col">
				<xsl:call-template name="loop.for.col">
					<xsl:with-param name="ii">
						<xsl:value-of select="$ii + 1"/>
					</xsl:with-param>
				</xsl:call-template>
			</xsl:if>
		<!--  end col -->
	</xsl:template>
</xsl:stylesheet>
