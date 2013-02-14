<?php
    class mediahandler {
        function MoveFileExactLocation($tempfilename,$actualfilename,$mediafolder) {
            
            try {                     
                    $path_doc_root = $_SERVER["DOCUMENT_ROOT"];
                    $tempfilepath =$tempfilename; 
                    //$actualfilename=$actualfilename . "_". $_SESSION["shadow_supplier_id"] . substr(strrchr($tempfilename,'.'),1);
                    $filepath = $path_doc_root . "media/" . $mediafolder . "/" .$actualfilename;                    
                    if(file_exists($tempfilepath))
                    {                      
                      //unlink($path_doc_root . "/media/" . $mediafolder . "/" .$old_medianame);   
                      if (copy($tempfilepath,$filepath)) {                           
                         unlink($tempfilepath);
                      }  
                    }                 
                    return true;
                
            } catch (Exception $e) {
                error_log('Caught exception: ',  $e->getMessage(), "\n");
              
            }

        }
    }
?>
