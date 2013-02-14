<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Easy Slider jQuery Plugin Demo</title>
                <link rel="stylesheet" href="styles/home.css" type="text/css"/>
                
                <script type="text/javascript" src="http://cssglobe.com/lab/easyslider/js/easySlider.packed.js"></script>
                <script type="text/javascript" src="http://cssglobe.com/lab/easyslider/js/jquery.js"></script>
                <script type="text/javascript">
                        $(document).ready(function(){	
                                $("#slider").easySlider({
                                        auto: true, 
                                        continuous: true
                                });
                        });	
                </script>
	
	
</head>
<body>
	
		<div id="slider">
			<ul>				
				<li>Slide1</li>
				<li>Slide2</li>
                                <li>Slide3</li>
                                <li>Slide4</li>
			</ul>
		</div>

</body>
</html>
