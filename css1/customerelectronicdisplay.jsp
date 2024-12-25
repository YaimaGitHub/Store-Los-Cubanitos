<%@ page import="java.util.*"%>
<%@ page import="intern.Electronics"%>
    
<html>
<body>
<style>
.header{
				width:100%;
				height:60px;
				background-color: #1e05ff;
			}
			body{
				margin:0px;
				padding:0px;
			}
            .header a {
  				float: right;
  				padding: 12px;
  				color: white;
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
            input[type=text] {
  				width: 130px;
  				box-sizing: border-box;
  				border: 2px solid #ccc;
  				border-radius: 4px;
  				font-size: 16px;
          margin-top: 5px;
          margin-left: 19%;
  				background-color: white;
  				background-image: url('searchicon.png');
  				background-position: 10px 10px; 
  				background-repeat: no-repeat;
  				padding: 12px 20px 12px 40px;
  				-webkit-transition: width 0.4s ease-in-out;
  				transition: width 0.4s ease-in-out;
			}

			input[type=text]:focus {
  				width: 50%;
			}

body {
  margin:0  auto;
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
  top:50;
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
  color:  white;
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
  color: white;
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
  color: white;
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
  color:  white;
  text-decoration: none;;
}
 
.footer-distributed .footer-right{
  width: 20%;
  color:white;
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
 
  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right{
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
 
  .footer-distributed .footer-center i{
    margin-left: 0;
  }
  .main {
    line-height: normal;
    font-size: auto;
  }
 
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

body{
  background:#ffffff;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
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

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-max-max-max-max-max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}

.dark-mode {
  background-color: black;
  color: white;
}
.electricbutton {
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 600px;
  transition-duration: 0.4s;
  cursor: pointer;
}



.electricbutton {
  background-color: white; 
  color: black; 
  border: 2px solid #1e05ff;
}

.electricbutton:hover {
  background-color: #1e05ff;
  color: white;
}
.electricbox{
	width=900px;
	position: centre;
	box-shadow: 0 0 9px 9px #1e05ff;
	border-radius: 20px;
}
.electronicsad{
	margin-top:-150px;
	margin-left:300px;
}
.electricbutton2 {
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  display: in-block;
  font-size: 16px;
  margin: 10px 580px;
  transition-duration: 0.4s;
  cursor: pointer;
}



.electricbutton2 {
  background-color: white; 
  color: black; 
  border: 2px solid #1e05ff;
}

.electricbutton2:hover {
  background-color: #1e05ff;
  color: white;
}

     
</style>
<body>
<div class="header">
  			<img src="images/amart.png" alt="logo" />
			<form>
			
        <a href="index.jsp"><i class="fa fa-fw fa-user"></i> Logout</a>				
      </form>
    </div>
		<script>
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
</script>
<%
   ArrayList<Electronics> electronicsList  = (ArrayList<Electronics>)request.getAttribute("ELECTRONICSLIST");
   Iterator itr = electronicsList.iterator();
   while(itr.hasNext())
   {  
        Electronics ee =(Electronics)itr.next();
%>    
    <div class ="electricbox">
	
    <img src="<%=request.getContextPath()%>/DownloadElectronicsImage?electronicsPID=<%=ee.getProductId()%>" max-width="250px" height="200px">
    <div class="electronicsad">
  <div>Product Name: <%=ee.getProductName()%></div>
 <div>  Product Cost Rs:  <%=ee.getProductCost()%></div>
<div>   Shop Name : <%=ee.getProductShopName()%> </div>
 <div>  More Info: <%=ee.getProductViewInfo()%> </div>
 </div>  


 <a href="mailto:support@company.com"><button class="electricbutton button2">Book</button></a>
   <a data-toggle="tooltip" data-placement="top" title="" href="https://api.whatsapp.com/send?phone=919538823192&amp;text=&amp;source=&amp;data=" onclick="gtag('event', 
   'WhatsApp',{'event_action': 'whatsapp_chat', 'event_category': 'Chat','event_label': 'Chat_WhatsApp'});" target="_blank" data-original-title="whatsapp" >
   <button class="electricbutton2 button2">WhatsApp</button></a>
   
</div>
<% }%>    
<footer class="footer-distributed">
    <div class="footer-left">
    <p class="footer-links">
				
    <a href="about.jsp">About Us</a><br>  
    <a href="terms.jsp">Terms and Condition</a>   
    <br>
    <a href="contact.jsp">Contact us</a>
    <br>
     <a href="adminlogin.jsp">Admin Login</a>
	 <br>
	 <button onclick="myFunction()">Dark mode</button>	
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
   <div class="footer-icons">
    <h3>Follow us:<h3>
    <a href="www.facebook.com"><i class="fa fa-facebook"></i></a>
    <a href="www.twitter.com"><i class="fa fa-twitter"></i></a>
    <a href="www.linkedin.com"><i class="fa fa-linkedin"></i></a>
    <a href="www.github.com"><i class="fa fa-github"></i></a>
    </div><br><br>
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
</a>              
    </div>
    </div>
    </footer>
       
	</body>
</html>


</body>
</html>  