<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
       <script type="text/javascript" language="JavaScript">
            function keywordCheck() {
            if (document.search_form.key.value == '')
                {
                    alert('Please enter a search keyword')
                    return false;
                }
            if (document.search_form.key.value.length==1)
             {
                alert('Please enter at least 3 characters')
                return false;
              }
            if (document.search_form.key.value.length==2)
             {
                alert('Please enter at least 3 characters')
                return false;
              }
           }
       </script>
        <div class="divSearch">
         <form name='search_form' action="/index.php" method="get" onSubmit="return keywordCheck();">   
            <input name="key" class="inputSearch" style="height:30px;" type="text" size="20" value="" onFocus="this.value=''"/>
            <input class="btnSearch" style="height:40px; width:60px;" type="submit" value="Go" />
        </form>
        <div class="divSearchTitle">Search for New Zealand Food Products</div>
         <div class="hr"></div>
         </div>
    </xsl:template>

</xsl:stylesheet>
