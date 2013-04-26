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
padding:10px;
margin-left: 0px;
font-size: 20px;
font-weight: 200;
color: rgb(119, 119, 119);
text-shadow: none;
margin:0;
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
margin: 15px 0px 0px 0px;
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
position: relative;

left: 10px;
display: block;
top:-115px;
width:200px;
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
color: rgb(62, 59, 62);
white-space: nowrap;
}


.open > #yw6 {

background: none repeat scroll 0% 0% rgb(45,45,45);
border: 1px solid rgba(0,0,0,0.17);
margin-top:20px;
padding:0px;
width:200px;
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
left:76%;
float: right;
}

.navbar .nav.loging_table {
float: right;
margin: 50px 0px 0px 0px;
}
.loging_table >.dropdown>.dropdown-toggle>.caret {
positison:absolute;
margin-top: 8px;
margin-left: 0px;
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
margin: -68px 0px 0px ;
display:none;
left:65%;
width:150px;
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


.carousel > #modal_insert > .item > img {
display: block;
line-height: 1;
width: auto;
height:auto;
margin:auto;
position:absolute;
top:0;
bottom:0;
max-height:600px;
max-width:550px;
}


.carousel-inner > .item > img {
width:100%;
height:auto;
}



#item_detail_modal  .carousel .item {
background-color: white;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
max-width:550px;
max-height:600px;
}




#item_detail_modal  .carousel .item > img {

width: auto;
margin:auto;

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
min-width:1280px;
}

#item_detail_modal  .carousel {

min-width:550px;
}

#myCarousel > #modal_insert {
position:relative;
width:550px;
height:600px;


}



.navbar-fixed-top {
margin-bottom: 0px;
height:45px;
top:0;
position: fixed;
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
top:15%;
left:33%;
height:auto;
overflow:hidden;
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

background: rgb(35,140,60);
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
background: rgb(39,162,75);
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




#slider-control {
text-decoration: none;
color: rgba(255,255,255,0.5);
}





#slider-control:hover {
text-decoration: none;
color: rgba(255,255,255,1);
}



#discovery_search_bar > #search_key {

height: 35px;
width: 29%;

}

#discovery_search_bar > #search_business {

height: 35px;
width: 70%;

}

.navbar > .navbar-inner {
padding:0;

}

.navbar-inner > .container {
min-width:950px;
height:45px;
}



#discovery_search_bar > a {
color: #ccc;

}

#discovery_search_bar > .cancleIcon {
color: #333333;
}

#discovery_search_bar > .cancleIcon:hover {
color: #ccc;
}


#discovery_search_bar > a:hover {

color:#333333;
text-decoration: none;
}


#mainmenu #yw6 li a {
border-radius: 0px;
color: white;
border-bottom:1px solid black;
padding:10px;
border-top:1px solid rgb(66,66,66);
box-shadow:none;
margin:0;

}


.navbar .nav > li > #yw6:after {
border-color: #000 transparent;
left:3%

}


.navbar .nav > li >#yw6:before {

left:3%;


}

#yw6 {
padding:0px;
}

#yw2 > li > a {
padding: 7.5px 20px;
}

#yw2 > li > #yw3 > li {
padding:7px 20px;
}

#yw2 > li > #yw4 > li {
padding:7px 20px;
}


a:hover {
text-decoration: none;

}


.album_status_bar a {
margin:10px;

}

.question_bar a {
margin:10px;
}

.question_bar a > i {
color:#ccc;
}

.question_bar a > .icon-rss:hover {
color: orange;
} 

.question_bar a > .icon-print:hover {
color: #333333;
} 

.question_bar a > .icon-facebook:hover {
color: #3b5998;
} 

.question_bar a > .icon-twitter:hover {
color: #4099ff;
} 

.question_bar a > .icon-google-plus:hover {
color: #e64522;
} 


.ligthbox_contact > .btn {

border-radius:3px;
color: white;
text-shadow: -1px -1px 0 #333333;
font-size: 20px;
font-weight: bold;
background-color: rgb(35,140,60);
background-image: -moz-linear-gradient(top, rgb(115,191,133), rgb(35,140,60));
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgb(115,191,133)), to(rgb(35,140,60)));
background-image: -webkit-linear-gradient(top, rgb(115,191,133), rgb(35,140,60));
background-image: -o-linear-gradient(top, rgb(115,191,133), rgb(35,140,60));
background-image: linear-gradient(to bottom, rgb(115,191,133), rgb(35,140,60));
background-repeat: repeat-x;

}

/*login panel login button hover state*/

#mainmenu .modal-topbox .dropdown li:nth-child(1):hover a{

    background: rgba(0,172,237,0.2);
}
#mainmenu .modal-topbox .dropdown li:nth-child(2):hover a{

    background: rgba(211,72,54,0.2);
}
#mainmenu .modal-topbox .dropdown li:nth-child(3):hover a{

    background: rgba(123,0,153,0.2);
}
#mainmenu .modal-topbox .dropdown li:nth-child(4):hover a{

    background: rgba(245,213,0,0.2);
}
#mainmenu .modal-topbox .dropdown li:nth-child(5):hover a{

    background: rgba(62,59,62,0.2);
}
#mainmenu .modal-topbox .dropdown li:nth-child(6):hover a{

    background: rgba(0,153,68,0.2);
}


.footer_contentbox  ul li a {
color: #ccc;
}


.footer_contentbox ul li:hover a{
color: #fff;
}

#footer  .socon {
    display: inline-block;
    
    
}


.profilemain > .tabs-right > .nav-tabs > li {

margin: 75px 24px 0px -30px;


}




.profilemain > .tabs-right > .nav-tabs > li > a {
color: #555;
background-color: rgba(255,255,255,0.5);

text-align: center;
font-weight: bold;
box-shadow: 2px -2px 2px #333;

-webkit-transform: rotate(90deg);   
-moz-transform: rotate(90deg);
-ms-transform: rotate(90deg);
-o-transform: rotate(90deg);
transform: rotate(90deg);

margin: 0 -3px 0 -3px;
border-radius: 5px 5px 0px 0px;
border-bottom:0 solid transparent;

}

.profilemain > .tabs-right > .nav-tabs > li > a:hover {
color: #0088cc;
background-color: rgba(255,255,255,0.8)
}

.profilemain > .tabs-right > .nav-tabs > .active > a {

color: #333;
cursor: default;
background-color: #ffffff;
border: 1px solid #ddd;
border-bottom-color: transparent;

}

.profilemain > .tabs-right > .nav-tabs {
margin:0;
border-left:0px solid transparent;

}

.main_Gallery > .profile_gallery > .profilegallerypics > .thumbnail {
width: 65px;
height: 65px;
padding: 0;
overflow: hidden;
margin: 0.5px;
display: inline-block;
}

<?php
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// isotope parts   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
?>
