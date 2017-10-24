<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Project1.aspx.cs" Inherits="Project.Project1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Projects 1</title>
    <link rel="stylesheet" type="text/css" href="styles/Main.css"/>
    <script language="JavaScript" type="text/JavaScript" src="Scripts/Project.js"></script>
   
</head>
<body onload="init();" class="Project">
   <form id="form1" runat="server">
   
         <h1>SuperSite</h1>

        <br/><br/>
        <h2>Already a registered SuperSite user？Sign in with one of the following services</h2>
         <br/>
         <img id="myPic1" src="images/FacebookDepressed.ico" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onclick="alert('You clicked me.');" alt="This is a pic" />
         <img id="myPic2" src="images/GoogleDepressed.ico" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onclick="alert('You clicked me.');" alt="This is a pic" />
         <img id="myPic3" src="images/WinLiveDepressed.ico" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onclick="alert('You clicked me.');" alt="This is a pic" />
         <img id="myPic4" src="images/YahooDepressed.ico" onmouseover="mouseOver(this);" onmouseout="mouseOut(this);" onclick="alert('You clicked me.');" alt="This is a pic" />
         <br/>
         <br/>
         <br/>
       <div class="link">
           <a id="MyLink1" style="font-family:Arial;font-size:10pt;font-weight:bolder;color:blue" >sign in with your SuperSite username and password
           <br/>  add another authentication service from the list 
           <br/>  above change your SuperSite password</a>
           </div>
        
          <h2 id="before">If you haven't already registered with following:</h2>
          <h2 id="after">Register to use SuperSite service with following form:</h2>

         <div id="registerform">
         <h3>&nbsp;</h3>
             <h3>&nbsp;&nbsp;&nbsp; Username:</h3>
         <input type="text" id="txtData" class="txtType" onmouseover="setBGColour(this);" onmouseout="unsetBGColour(this);" maxlength="20"/>
         <br/>
         <h3>&nbsp;&nbsp;&nbsp; Password:</h3>
         <input id="Password1" type="password" class="password" />
         <br/>
         <h3>&nbsp;&nbsp;&nbsp; Verify Password:</h3>
         <input id="Password2" type="password" class="password"/>
         <br/>
         <h4>&nbsp;&nbsp;&nbsp;&nbsp; Finish your registeration by signing in 
             <br/>&nbsp;&nbsp;&nbsp; with one of the services above or save
             <br/>&nbsp;&nbsp;&nbsp; your registration directly.
         </h4>
         <br/>
          &nbsp; <a id="MyLink2" style="font-family:Arial;font-size:20px;font-weight:bolder;color:blue" href="javascript:procSave();">Save</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a id="MyLink3" style="font-family:Arial;font-size:20px;font-weight:bolder;color:blue" href="javascript:CancelShow();">Cancel</a>
        </div>
       <div class="link">
        <a id="MyLink" style="font-family:Arial;font-size:50px;font-weight:bolder;color:blue" href="javascript:showform();" >Register now</a>
         </div>
        <br /><br />
    
    </form>
</body>


</html>
