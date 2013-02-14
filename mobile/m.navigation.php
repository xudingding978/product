<div class="top-navigation">
<table width="100%" border="0" bordercolor="#000">
	<tr height="36">
        <td align="center" class="<?php if (isset($_GET['lat'])) { if ($_GET['lat'] != "") { echo "selected "; } }?>active navlink near"><a href="?lat=-36.847385&lng=174.765735&mode=debug"><span class="navtext">Near Me</span></a></td>
    	<td align="center" class="<?php if (isset($_GET['stype'])) { if ($_GET['stype'] == "reg") { echo "selected "; }	} else { echo "active "; }?>active navlink map"><a href="?stype=reg&mode=debug"><span class="navtext">Regions</span></a></td>
        <td align="center" class="<?php if (isset($_GET['stype'])) { if ($_GET['stype'] == "cat") { echo "selected "; }	}?>active navlink products"><a href="?stype=cat&mode=debug"><span class="navtext">Products</span></a></td>
    </tr>
</table>
</div>