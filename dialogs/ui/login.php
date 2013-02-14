<form id="loginform">

  <script language="javascript">
    function FormLogin()
    {
        var user;
        var password;
        var callbackresult;

        user=loginform.user.value;
        password=loginform.password.value;

        callbackresult=koolajax.callback(DoTPLLogin(user, password));

        if (callbackresult=="SUCCESS") 
        {
          parent.location='/dashboard/';  
          parent.adpHide('adpModal');
          parent.adpHideMask('adpMask');
        }
        else
        {
          document.getElementById("errormsg").innerHTML="&nbsp;<br><b>Invalid user name or password.  Please try again.</b><br><i>(Please note: Both fields are case sensitive)</i><br>&nbsp;";
        }
    }
  </script>
  
  <table border="0" cellpadding="0" cellspacing="8">
    <tr valign="top">
      <td align="left">
        <img src="/images/logo-small.png" alt="">
      </td>
      <td valign="bottom">
        <p class="BodyHeader"><b>Customer Login</b></p>
        <p class="BodyText">Please enter your user name and password in the fields below to access the Customer Portal.</p>
      </td>
    </tr>
    <tr>
      <td></td>
       <td class="ErrorText" id="errormsg">&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;</td>
    </tr>
    <tr>
      <td class="LoginText" align="right">User Name</td>
      <td class="LoginUser"><input type="text" name="user" size="40" maxlength="255" /></td>
    </tr>
    <tr>
      <td class="LoginText" align="right">Password</td>
      <td class="LoginPassword"><input type="password" name="password" size="24" maxlength="64" /></td>
    </tr>
    <tr>
      <td></td>
      <td><input type="submit" value="Submit" onclick="FormLogin();return false;" /></td>
    </tr>
  </table>
</form>
