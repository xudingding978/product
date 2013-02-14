<?php
  if(!isset($_SESSION)) session_start();
 
  if(!isset($client_user))
  { ?>
    <script type="text/javascript" src="/dashboard/js/login_adplib.js"></script>
    <script type="text/javascript" src="/dashboard/js/ADPMask.js"></script>
    <script type="text/javascript" src="/dashboard/js/login.js"></script>

    <script language="javascript">
      function TPLLogin()
      {     
        adpContent('adpModal', '<iframe src="/dialogs/login.php" name="dialogframe" id="dialogframe" width=100% height=100% align="center" Frameborder="0" Scrolling="no" marginheight="0" marginwidth="0"></iframe>');
        adpShow('adpModal');
        adpShowMask('adpMask');
      }
    </script>
 <?php }
  else
  { ?>
    <script type="text/javascript" src="/dashboard/js/login_adplib.js"></script>
    <script type="text/javascript" src="/dashboard/js/ADPMask.js"></script>
    <script type="text/javascript" src="/dashboard/js/portal.js"></script>
    <script language="javascript">
      var activetab;
      var activedoc;
      function TPLLogin()
      {
        self.location='/dashboard';
      }
    
      function TPLLogout()
      {
        koolajax.callback(DoTPLLogout());
        self.location='/';
      }
    
      function ValidateTPLSessionActive()
      {
        
        if (!koolajax.callback(DoTPLSessionActive())) 
          {
            self.location='/dashboard';
            return false;
          }
        else
          {
            return true;
          }
      }
    
      function TPLSetModalDialog(dialogname, dialogkey)
      {
        if (koolajax.callback(DoTPLSetModalDialog(dialogname, dialogkey)) == "SUCCESS") 
          {
            return true;
          }
        else
          {
            return false;
          }
      }
    </script> 
 <?php }
?>