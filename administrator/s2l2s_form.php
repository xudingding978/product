<?php
require_once("popup_form.php");
include_once "../common/util/DBTransaction.php";
include_once "../common/dao/TplDirectoryPeriodDAO.php";
include_once "../common/dao/TplDirectoryDAO.php";

class S2L2SForm extends PopupForm
{
        private $directorystatus;
        private $directoryid;
        private $dbconn;       
        private $tpldirperioddao;
        private $tpldirectorydao;
	function __construct()
	{
		global $ADMIN_DB_NAME;
		$this->_dbConnectionObj = new DataConnection(MYSQLI, $ADMIN_DB_NAME);
	}
        public function setDirectorystatus($direstatus){
           $this-> directorystatus=$direstatus; 
        }
        public function setDirectoryID($direID){
           $this-> directoryid=$direID; 
        }
	protected function viewPage() {
          $dbtrans = new DBTransaction();
          $this->dbconn = $dbtrans->getConnection($GLOBALS["DB_NAME"]);
          $this->tpldirperioddao = new TplDirectoryPeriodDAO();  
          $this->tpldirectorydao = new TplDirectoryDAO();
          
	?>
		<script>
		$(function() {
			$("#step1_s2lBtn").button();
			$("#step1_ltsBtn").button();
			$("#step2_l2sBtn").button();
			$(".s2l2s-options-panel #tabs").tabs();
			$("#step2_l2sBtn").hide();
		});
		</script>
		<div class="s2l2s-options-panel">
			<div id="tabs">
				<ul>
					<li><a href="#s2l-content">Shadow 2 Live</a></li>
					<li><a href="#l2s-content">Live 2 Shadow</a></li>
				</ul>
				<div id="s2l-content">
					<table>
					<?php
						global $DB_NAME;
						echo "<tr><td>Directory</td><td>:</td><td>";
						$this->DirectoryField(1);
						echo "</td></tr><tr><td>Year <small><i>(backend)</i></small></td><td>:</td><td>";
						$this->YearField(1);
						echo "</td></tr>";
					?>
						<tr><td colspan="3"><button id="step1_s2lBtn" onclick="return doShadow2Live(1)">Execute</button></td></tr>
						<tr><td colspan="3"><div id="progressbar1"><font style="color:red"><b><small>Recommended: </b>Backup this database <?php echo "\"".$DB_NAME."\""; ?></small></font></div></td></tr>
					</table>
				</div>
				<div id="l2s-content">
					<table>
					<?php
						echo "<tr><td>Directory</td><td>:</td><td>";
						$this->DirectoryField(2);						
						$this->SourceYearField(2);                                                
						
						$this->TargetYearField(2);
                                                
					?>
						<tr>
							<td colspan="2">
								<button id="step1_ltsBtn" onclick="return doLive2ShadowStep1(2)">Execute Step 1</button>
							</td>
							<td>
								<button id="step2_l2sBtn" onclick="return doLive2ShadowStep2(2)">Execute Step 2</button>
							</td>
						</tr>
						<tr><td colspan="3"><div id="progressbar2"><font style="color:red"><b><small>Recommended: </b>Backup this database <?php echo "\"".$DB_NAME."\""; ?></small></font></div></td></tr> <!-- toggle this -->
					</table>
				</div>
			</div>
		</div>
	<?php
	}
	protected function addPage() {}
	protected function editPage() {}
	protected function removePage()	{}
	protected function searchPage()	{}
	protected function reserve1Page() {}
		
	private function DirectoryField($id)
	{
		//global $DB_NAME;		
                $dirs=$this->tpldirectorydao->selectDirectories($this->dbconn, null);
                
               
		if (count($dirs)> 0) {
			echo "<select id='dir".$id. "' name='dir".$id."' onChange='return reloadYear2(this,".$id.")'>";
			foreach ( $dirs as $dir) 
			{
				$selected = "";                                
                                if($this->directoryid==$dir['REC_ID']){                                    
                                    $selected="selected";
                                }
				echo '<option ' . $selected. ' value="'.$dir['REC_ID'].'">'.$dir['NAME'].'</option>';
			}			
			echo "</select>";
		}
               
	}
	private function SourceYearField($id)
	{
               
                $param_arr=array($this->directoryid);                	
                $avail_years=$this->tpldirperioddao->selectDefaultYears($this->dbconn,$param_arr);                               
		if (count($avail_years) > 0) { 
                    $year= $avail_years[0];
                    echo "</td></tr><tr><td>Source Year </td><td>:</td><td>";
                    echo "<div id='sourceYearField'><input type='text' id='sourceyear' value='".$year['CURRENT_YEAR']."' name='sourceyear' ref=".$year['REC_ID']."  readonly></div>";
		    echo "</td></tr><tr><td>Source Period</td><td>:</td><td>";
                    echo "<div id='sourceYearField".$id."'><input type='text' id='sourceperiod".$id."' value='".$year['START_DATE']." To ".$year['END_DATE']."' name='sourceperiod".$id."' ref=".$year['REC_ID']." readonly></div>";
                    echo "</td></tr>";                 
                }
		else {
			echo "The database eiher return an error or empty record.";
		}
	}
        private function TargetYearField($id)
	{
               
                $param_arr=array($this->directoryid);                	
                $avail_years=$this->tpldirperioddao->selectDefaultYears($this->dbconn,$param_arr);               	
		if (count($avail_years) > 0) { 
                    $year= $avail_years[0]; 
                    $targetyear;
                        echo "<tr><td>Target Year </td><td>:</td><td>";
			echo "<div id='targetyearField'><select id='targetyear' name='targetyear'>";
			foreach ($avail_years as $year) 
			{   
                               if($targetyear==null){  
                                   $targetyear=$year;  
                               }
				if ( $year['CURRENT_YEAR'] == $this ->directorystatus ) 
					$selected = "SELECTED";
				echo '<option ' . $selected. ' value="'.$year['REC_ID'].'">'.$year['CURRENT_YEAR'].'</option>';
				
			}			
			echo "</select></div>";
                        echo "</td></tr><tr><td>Target Period</td><td>:</td><td>";
                        echo "<div id='targetYearField".$id."'><input type='text' id='targetperiod' value='".$targetyear['START_DATE']." To ".$targetyear['END_DATE']."' name='targetperiod' ref=".$targetyear['REC_ID']."></div>";
                        echo "</td></tr>";
		}
		else {
			echo "The database eiher return an error or empty record.";
		}
	}        
        private function YearField($id)
	{
               
                $param_arr=array($this->directoryid);                	
                $avail_years=$this->tpldirperioddao->selectYears($this->dbconn,$param_arr);               	
		if (count($avail_years) > 0) { 
                    $year= $avail_years[0];                    
			echo "<div id='yearField".$id."'><select id='year".$id."' name='year".$id."'>";
			foreach ($avail_years as $year) 
			{
				echo '<option ' . $selected. ' value="'.$year['CURRENT_YEAR'].'">'.$year['CURRENT_YEAR'].'</option>';
				
			}			
			echo "</div>";
		}
		else {
			echo "The database eiher return an error or empty record.";
		}
	}
}
