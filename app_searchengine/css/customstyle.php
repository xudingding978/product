<?php
header("Content-type: text/css; charset: UTF-8");
$back_gound_color = '#999';
$color_1 = '#07b7ea';
$color_2 = '#02a6dc';
$bootstrap_widget_header_color = '#111';
$text_color = '#rgb(222,222,222)';
?>

<?php
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// header and title parts  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
?>


body {

font-size:15.5px;

}



.titleText{
margin:13px 0 0 17%;

}

.navbar-fixed-bottom .navbar-inner {

background-color: <?php echo $color_1; ?>;
background-image: -moz-linear-gradient(top,<?php echo $color_1; ?> , <?php echo $color_2; ?>);
background-image: -ms-linear-gradient(top, <?php echo $color_1; ?> , <?php echo $color_2; ?> );
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(<?php echo $color_1; ?> ), to( <?php echo $color_2; ?>));
background-image: -webkit-linear-gradient(top, <?php echo $color_1; ?> ,  <?php echo $color_2; ?>);
background-image: -o-linear-gradient(top, <?php echo $color_1; ?> ,  <?php echo $color_2; ?>);
background-image: linear-gradient(top, <?php echo $color_1; ?> ,  <?php echo $color_2; ?>);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='<?php echo $color_1; ?>', endColorstr='<?php echo $color_2; ?>', GradientType=0);
box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);
}


.navbar-inner {
height: 45px;
background-color: <?php echo $color_1; ?>;
background-image: -moz-linear-gradient(top,<?php echo $color_1; ?> , <?php echo $color_2; ?>);
background-image: -ms-linear-gradient(top, <?php echo $color_1; ?> , <?php echo $color_2; ?> );
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(<?php echo $color_1; ?> ), to( <?php echo $color_2; ?>));
background-image: -webkit-linear-gradient(top, <?php echo $color_1; ?> ,  <?php echo $color_2; ?>);
background-image: -o-linear-gradient(top, <?php echo $color_1; ?> ,  <?php echo $color_2; ?>);
background-image: linear-gradient(top, <?php echo $color_1; ?> ,  <?php echo $color_2; ?>);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='<?php echo $color_1; ?>', endColorstr='<?php echo $color_2; ?>', GradientType=0);
-webkit-box-shadow: 0px 0px 15px rgb(0, 0, 0);
-moz-box-shadow: 0px 0px 15px rgb(0, 0, 0);
box-shadow: 0px 0px 15px rgb(0, 0, 0);

border:0px;
}
.navbar{
overflow:visible;
color:white;
-webkit-box-shadow: 0px 0px 15px rgb(0, 0, 0);
-moz-box-shadow: 0px 0px 15px rgb(0, 0, 0);
box-shadow: 0px 0px 15px rgb(0, 0, 0);

}


.navbar .nav > li > a {
float: none;
padding: 10px 15px;
color: rgb(119, 119, 119);
text-decoration: none;
text-shadow: none;
}

.navbar .brand {
display: block;
float: left;
padding: 5px 10px;
margin-left: 0px;
font-size: 20px;
font-weight: 200;
color: rgb(119, 119, 119);
text-shadow: none;
}

.bootstrap-widget-header {

position: relative;

height: 40px;
/*line-height: 40px;*/

background: <?php echo $bootstrap_widget_header_color; ?>;
background: -moz-linear-gradient(top, #FAFAFA 0%, <?php echo $bootstrap_widget_header_color; ?> 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #FAFAFA), color-stop(100%, <?php echo $bootstrap_widget_header_color; ?>)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top, #FAFAFA 0%, <?php echo $bootstrap_widget_header_color; ?> 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top, #FAFAFA 0%, <?php echo $bootstrap_widget_header_color; ?> 100%); /* Opera11.10+ */
background: -ms-linear-gradient(top, #FAFAFA 0%, <?php echo $bootstrap_widget_header_color; ?> 100%); /* IE10+ */
background: linear-gradient(top, #FAFAFA 0%, <?php echo $bootstrap_widget_header_color; ?> 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr = '#FAFAFA', endColorstr = '<?php echo $bootstrap_widget_header_color; ?>');
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FAFAFA', endColorstr='<?php echo $bootstrap_widget_header_color; ?>')";

border: 1px solid #D5D5D5;

-webkit-border-top-left-radius: 4px;
-webkit-border-top-right-radius: 4px;
-moz-border-radius-topleft: 4px;
-moz-border-radius-topright: 4px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;

-webkit-background-clip: padding-box;
}

.navbar .nav > li > a {
float: none;
padding: 10px 15px;
color: <?php echo $text_color; ?>;
text-decoration: none;

}


.dropdown-menu {
position: absolute;
top: 100%;
left: 0px;
z-index: 1000;
display: none;
float: left;
min-width: 170px;
min-height: 200px;
padding: 0px 30px;
margin: 14px 0px 0px -1px;
list-style: none outside none;
background-color: rgba(0, 0, 0,1);
border: none;
border-radius: 6px 6px 6px 6px;
box-shadow: none;
background-clip: padding-box;
}


.main-nav .dropdown-menu{

background-color: rgba(242, 240, 240,0);
padding: 0px 0px 0px 30px;
}


.navbar .nav {
color:rgb(242,240,240);
position: absolute;

left: 80%;
top: 72px;
display: block;
float: left;
margin: -27px 0px 0px 31%;
width:190px;
}





.navbar .nav .dropdown-toggle .caret {
margin-top: 8px;
margin-left: 110px;
}



.dropdown-menu li > a {
display: block;
padding: 2px 20px;
clear: both;
font-weight: normal;
line-height: 30px;
color: rgb(62, 59, 62);
white-space: nowrap;
}
.open > .dropdown-menu {

margin-top: 50px;
}

.navbar .nav > li {
float: none;
}

.login_icon{
positison:absolute;
margin: 10px 10px 10px 10px ;



}

.loging_image{
margin-top: -65px;
position: absolute;
left:72%;
float: right;
}

.loging_text{
margin-top: -60px;
position: absolute;
left:75%;
float: right;
}

.navbar .nav.loging_table {
float: right;
margin: 48px 0px 0px 0px;
}
.loging_table >.dropdown>.dropdown-toggle>.caret {
positison:absolute;
margin-top: 8px;
margin-left: 10px;
}


.dropdown-menu li > a:hover, .dropdown-menu li > a:focus, .dropdown-submenu:hover > a {

background-image: linear-gradient(to bottom, rgb(0, 136, 204), rgb(0, 119, 179));
background-repeat: repeat-x;
}


.dropdown-menu .active > a {
color: rgb(51, 51, 51);
text-decoration: none;
background-color: rgb(242, 240, 240);
background-image:none;
background-repeat: repeat-x;
outline: 0px none;
}


.smallIcon{
position:absolute;
margin: -65px 0px 0px ;
display:none;
left:70%;
width:250px;
z-index:10000;
cursor:pointer;
line-height: 32px;
}

.smallIcon a, .smallIcon a:visited  {color:rgb(242,240,240); ; text-decoration:none;}
.smallicon a:active {color: rgb(255,255,255); text-decoration: none; text-shadow: ;}
.smallIcon a:hover{color: rgb(255,255,255); text-decoration: none;}

.icon_a{


}
.icon_b{
margin: 0 0 0 22px;

}
.icon_c{
margin: 0 0 0 24px;

}


.navbar .nav li.dropdown > .dropdown-toggle .caret {
border-top-color: white;
border-bottom-color:white;
}


.carousel .active {
left: 0px;
height: 650px;
}


#item_detail_modal .carousel .active {

height: auto;
}


.carousel .item > img {
display: block;
line-height: 1;
width: 1980px;
}

#item_detail_modal  .carousel .item {

background-color: black;
}


#item_detail_modal  .carousel .item > img {

width: auto;
margin:auto;
height:600px;
}


h2 {
font-family: Arial,Helvetica,sans-serif;
font-size: 14px;
font-weight: bold;
}



.carousel {
position: relative;
margin-bottom: 0px;
line-height: 1;
min-width:769px;
}

#item_detail_modal  .carousel {

min-width:569px;
}




.navbar-fixed-top {
margin-bottom: 0px;
height:45px;
}


.navbar .btn, .navbar .btn-group {
margin-top: -30px;
}

.modal.fade {
top:50%;

}
.modal{
width:auto;
}
#mainmenu > #myModal {

}

.modal-backdrop {

background-color: rgba(255, 255, 255,0.8);
}


.modal-body {
height: 100%;
padding: 15px;
overflow-y: visible;
max-height:100%;

}


.modal-backdrop {

top: 45px;

}



.social_modal {
position: relative;
width:500px;
z-index: 1050;
background-color: rgb(255, 255, 255);
outline: medium none;
background-clip: padding-box;
border-radius: 0 0 6px 6px;
}

.email_modal {
position: relative;

z-index: 1050;
width: 700px;

height: 300px;
}

.register_modal{
position: relative;

z-index: 1050;
width: 500px;

height: 500px;

}
.question_modal{
background-color: rgb(255, 255, 255);
outline: medium none;
background-clip: padding-box;
position: fixed;
width:420px;
z-index: 99050;
top:20%;
margin-left:24%;
height:300px;
}



.fade{
opacity:1;
}

.row{
margin-left: 0
}

.row > .required {
font-size: 16px;
font-weight: bold;
}

.row > #LoginForm_username {
width: 100%;
height: 30px;
font-size: 16px;
}

.row > #LoginForm_password {
width: 100%;
height: 30px;
font-size: 16px;
}


.row > #User_EMAIL_ADDRESS {
text-align: center;
width: 100%;
height: 30px;
font-size: 16px;
}

.row > #User_USER_NAME {
text-align: center;
width: 100%;
height: 30px;
font-size: 16px;
}

.row > #User_PWD_HASH {
text-align: center;
width: 100%;
height: 30px;
font-size: 16px;
}

.row > #User_repeatPassword {
text-align: center;
width: 100%;
height: 30px;
font-size: 16px;
}





#LoginForm_rememberMe {
margin-top: 1px;
}

.form .btn {
width: 100px;
height: 25px;
line-height: 14px;
font-size: 13px;
font-weight: bold;
color:white;
border-radius:2px;

-moz-text-shadow: -1px -1px  #595757; 
-webkit-text-shadow: -1px -1px  #595757;
text-shadow: -1px -1px  #595757;

background: rgb(115,191,133);
background: -webkit-gradient(linear, 0 0, 0 bottom, from(rgb(115,191,133)), to(rgb(35,140,60)));
background: -webkit-linear-gradient(rgb(115,191,133), rgb(35,140,60));
background: -moz-linear-gradient(rgb(115,191,133), rgb(35,140,60));
background: -ms-linear-gradient(rgb(115,191,133), rgb(35,140,60));
background: -o-linear-gradient(rgb(115,191,133), rgb(35,140,60));
background: linear-gradient(rgb(115,191,133), rgb(35,140,60));
-pie-background: linear-gradient(rgb(115,191,133), rgb(35,140,60));
behavior: url(/pie/PIE.htc);

}

.form .btn:hover {
background: rgb(84,181,112);
background: -webkit-gradient(linear, 0 0, 0 bottom, from(rgb(84,181,112)), to(rgb(39,162,75)));
background: -webkit-linear-gradient(rgb(84,181,112), rgb(39,162,75));
background: -moz-linear-gradient(rgb(84,181,112), rgb(39,162,75));
background: -ms-linear-gradient(rgb(84,181,112), rgb(39,162,75));
background: -o-linear-gradient(rgb(84,181,112), rgb(39,162,75));
background: linear-gradient(rgb(84,181,112), rgb(39,162,75));
-pie-background: linear-gradient(rgb(84,181,112), rgb(39,162,75));
behavior: url(/pie/PIE.htc);

}

.carousel-control {

top: 50%;

}

body{
padding-right:0px;
padding-left:0px;
}

.dropdown-submenu > .dropdown-menu {

top: 0px;
left: 100%;
margin-top: -110px;
margin-left: 0px;
border-radius: 0px 6px 6px 6px;
}

.main-nav .nav a:hover{
background-color:black;
color:rgba(255,255,255,1);
font-weight:bold;
}



.nav li + .nav-header {
margin-top: 0px;
color:black;
font-style: italic;
}

.moveTop{
top:-40px;
}

.login_guest{
margin: -64px 0px 0px 3%;
}


#mainmenu #dd ul li a {

font-size: 100%;
text-decoration: none;
padding: 10px;

}

#mainmenu #dd1 ul li a {
padding: 10px;
}

#mainmenu #dd2 ul li a {
padding: 10px;
}



.dropdown-menu .dropdown-submenu > a:after {
margin-top: 10px;
margin-right: -50px;
border-left-color: transparent;
border-width: 10px;
}

.dropdown-menu .dropdown-submenu:hover > a:after {

border-left-color: rgb(242,240,240);
}



















<?php
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// isotope parts   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
?>
