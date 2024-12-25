<!DOCTYPE html>
<html>
<title>Admin login page</title>

<style>
*{margin:0px; padding:0px; font-family:Helvetica, Arial, sans-serif;}

/* Full-width input fields */
input[type=text], input[type=password] {
    width: 90%;
    padding: 12px 20px;
    margin: 8px 26px;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
	font-size:10px;
}

/* Set a style for all buttons */
button {
    background-color: #1e05ff;
    color: white;
    padding: 14px 20px;
    margin: 8px 26px;
    border: none;
    cursor: pointer;
    width: 90%;
	font-size:20px;
}
button:hover {
    opacity: 0.8;
}

/* Center the image and position the close button */
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}
.avatar {
    width: 100px;
	height:100px;
    border-radius: 50%;
}

/* The Modal (background) */
.modal {
	display:none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}

/* Modal Content Box */
.modal-content {
    background-color: #fefefe;
    margin: 4% auto 15% auto;
    border: 1px solid #888;
    width: 40%; 
	padding-bottom: 30px;
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
}
.close:hover,.close:focus {
    color: red;
    cursor: pointer;
}

/* Add Zoom Animation */
.animate {
    animation: zoom 0.6s
}
.input-field{
	width: 100%;
	padding: 10px 0;
	margin:5px 0;
	border-left: 0;
	border-right: 0;
	border-bottom: 1px solid #999;
	outline: none;
	background: transparent;
}
.input-group{
	top: 50px;
	position: absolute;
	width: 200px;
	transition: 0.5s;
}

.submit-btn{
	width: 85%;
	padding: 10px 30px;
	cursor:  pointer;
	display: block;
	margin: auto;
	background: linear-gradient(to right, #ff105f,#800080);
	border: 0;
	outline: none;
	border-radius: 170px;
}

}
.form-box{
	width: 300px;
	height: 270px;
	position: relative;
	margin: 6% auto;
	background: #fff;
	padding: 5px;
	overflow: hidden;
}
.button-box{
	width: 300px;
	margin: 40px auto;
	position: relative;
	border-radius: 30px;
	box-shadow: 5px 10px 10px 10px #ff61241f;
}
#btn{
	top: 0;
	left: 0;
	position: absolute;
	width: 110px;
	height: 100%;
	border-radius: 30px;
	transition: 0.5s;
}
.hero{
	height: 50%;
	width: 100%;
	background-size: cover;
	background-position: centre;

}
.span{
	color: #777;
	font-size: 12px;
	bottom: 68px;
	position: absolute;
}
@keyframes zoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
}
.header{
				width:100%;
				height:60px;
				background-color:#1e05ff;
			}
			body{
				margin:0px;
				padding:0px;
			}
            .header a {
  				float: right;
  				padding: 12px;
  				color: black;
  				text-decoration: none;
  				font-size: 17px;
			}
            .header a:hover {
  				background-color: #efd7f5;
			}
            .header img {
  				float: left;
  				width: 150px;
  				height: 60px;
  				background: #1e05ff;
			}

body {
  margin: 0;
  padding: 0;
}
.main {
  max-height: 300px;;
  background-color: #292c2f;
  color: white;
  font-size: 38pt;
  text-align: center;
  line-height: 350px;
}

footer{
  position: relative;
  bottom: 0;
}
.footer-distributed{
  background-color:#1e05ff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 55px 50px;
  margin-top: 100px;

}
 
.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
  display: inline-block;
  vertical-align: top;
}
 
.footer-distributed .footer-left{
  width: 40%;
}
 
.footer-distributed .footer-links{
  color:  black;
  margin: 20px 0 12px;
  padding: 0;
}
 
.footer-distributed .footer-links a{
  display:inline-block;
  line-height: 1.8;
  text-decoration: none;
  color:  inherit;
}
 
.footer-distributed .footer-company-name{
  color: black;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}
 
 
.footer-distributed .footer-center{
  width: 35%;
}
 
.footer-distributed .footer-center i{
  background-color:  #33383b;
  color: white;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}
 
.footer-distributed .footer-center i.fa-envelope{
  font-size: 17px;
  line-height: 38px;
}
 
.footer-distributed .footer-center p{
  display: inline-block;
  color: black;
  vertical-align: middle;
  margin:0;
}
 
.footer-distributed .footer-center p span{
  display:block;
  font-weight: normal;
  font-size:14px;
  line-height:2;
}
 
.footer-distributed .footer-center p a{
  color:  black;
  text-decoration: none;;
}
 
.footer-distributed .footer-right{
  width: 20%;
}
 
 
.footer-distributed .footer-icons{
  margin-top: 25px;
}
 
.footer-distributed .footer-icons a{
  display: inline-block;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color:white;
  border-radius: 2px;
 
  font-size: 20px;
  color: black;
  text-align: center;
  line-height: 35px;
 
  margin-right: 3px;
  margin-bottom: 5px;
}
 
 
@media (max-width: 880px) {
 
  .footer-distributed{
    font: bold 14px sans-serif;
  
  }
 

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}


</style>
</style>
<body background="../background1.png">
<body>
		<div class="header">
  			<img src="images/amart.png" alt="logo" />
    </div>

    
       


<button onclick="document.getElementById('modal-wrapper').style.display='block'" style="width:200px; margin-top:10px; margin-left:600px;">
Admin Login</button>

<footer class="footer-distributed">
    <div class="footer-left">
    <p class="footer-links">
    <a href="#">About Us</a><br>  
    <a href="#">Terms and Condition</a>   
    <br>
    <a href="#">Privacy</a>       
    <br>
    <a href="#">Contact us</a>
    <br>
    <a href="#">Support</a>
    <br>
     <a href="#">AdminLogin</a>
    </p>
    <p class="footer-company-name"> &copy; 2020,Amart.com</p>
    </div>
    <div class="footer-center">
    <div>
    <i class="fa fa-map-marker"></i>
    <p><span>21 Revolution Street</span> Bangalore, India</p>
    </div>
    <div>
    <i class="fa fa-phone"></i>
    <p>+91 9565656966</p>
    </div>
 
    <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">contact@ amart.com</a></p>
    </div>
    </div>
 
    <div class="footer-right">
    <img src="images/play.jpg" style="
    height: 50px;"><br>
    <br>
    <img src="images/play1.jpg" style="
    height: 47px;">
    </div>
    <div class="filter-bot" style="background:red;
    width: 100%;
    padding: 0;
    position: static;
    bottom: 0;
    margin-left:0%;
    z-index: 999 !important;
    box-shadow: 0 5px 20px #444;
    text-align: center;   
    background-color: red;">
     <a data-toggle="tooltip" data-placement="top" title="" href="https://api.whatsapp.com/send?phone=919538823192&amp;text=&amp;source=&amp;data=" onclick="gtag('event', 'WhatsApp',{'event_action': 'whatsapp_chat', 'event_category': 'Chat','event_label': 'Chat_WhatsApp'});" target="_blank" data-original-title="whatsapp" style="
    color:black ;
    width: 30%;
    font-size:larger;
    background-repeat:no-repeat;">  
    <img src="images/whatsapp.png" style="height: 30px;margin-bottom: 0px;margin-left: 0px;"><span style="">Whatsapp</span></a>
    <a data-toggle="tooltip" data-placement="top" title="" href="tel:9758695632 " style="
    color:black ;
    width: 60%;
    font-size:smaller;
    "><img src="images/phone.png" style="
    height: 30px;">
    <span>Call Us</span></a>              
    </div>
    </div>
    </footer>

<div id="modal-wrapper" class="modal">
  
  <form class="modal-content animate" name="Admin Login" action="adminadd.jsp" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modal-wrapper').style.display='none'" class="close" title="Close PopUp">&times;</span>
      <img src="images/1.png" alt="Avatar" class="avatar">
      <h1 style="text-align:center">Admin Page</h1>
    </div>

	<div class="hero">
		<div class="form-box">
		<div class="button-box">
			<div id="btn"></div>
			

		<input type="text" class="input-field" name="email" placeholder="User Id" required>
		<input type="password" class="input-field" name="pass" placeholder="Enter Password" required>
		<button type="submit" class="submit-btn">Log In</button>
			
		</div>
    
  </form>
  
</div>

<script>
// If user clicks anywhere outside,it will close

var modal = document.getElementById('modal-wrapper');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
<footer class="footer-distributed">
    <div class="footer-left">
    <p class="footer-links">
    <a href="about.jsp">About Us</a><br>  
    <a href="terms.jsp">Terms and Condition</a>   
    <br>
    <a href="#">Contact us</a>
    <br>
    <a href="#">Support</a>
    <br>
     <a href="#">AdminLogin</a>
    </p>
    <p class="footer-company-name"> &copy; 2020,Amart.com</p>
    </div>
    <div class="footer-center">
    <div>
    <i class="fa fa-map-marker"></i>
    <p><span>21 Revolution Street</span> Bangalore, India</p>
    </div>
    <div>
    <i class="fa fa-phone"></i>
    <p>+91 9565656966</p>
    </div>
 
    <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">contact@ amart.com</a></p>
    </div>
    </div>
 
    <div class="footer-right">

    <img src="images/play.jpg" style="
    height: 50px;"><br>
    <br>
    <img src="images/play1.jpg" style="
    height: 47px;">
    </div>
    <div class="filter-bot" style="background:red;
    width: 100%;
    padding: 0;
    position: static;
    bottom: 0;
    margin-left:0%;
    z-index: 999 !important;
    box-shadow: 0 5px 20px #444;
    text-align: center;   
    background-color: red;">
     <a data-toggle="tooltip" data-placement="top" title="" href="https://api.whatsapp.com/send?phone=919538823192&amp;text=&amp;source=&amp;data=" onclick="gtag('event', 'WhatsApp',{'event_action': 'whatsapp_chat', 'event_category': 'Chat','event_label': 'Chat_WhatsApp'});" target="_blank" data-original-title="whatsapp" style="
    color:black ;
    width: 30%;
    font-size:larger;
    background-repeat:no-repeat;">  
    <img src="images/whatsapp.png" style="height: 30px;margin-bottom: 0px;margin-left: 0px;"><span style="">Whatsapp</span></a>
    <a data-toggle="tooltip" data-placement="top" title="" href="tel:9758695632 " style="
    color:black ;
    width: 60%;
    font-size:smaller;
    "><img src="images/phone.png" style="
    height: 30px;">
    <span>Call Us</span></a>              
    </div>
    </div>
    </footer>

</body>
</html>
