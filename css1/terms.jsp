<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
    .container{
  max-width: 730px;
  margin-top: 25px;
  margin-left: 340px;
  background: #f2f2f2 ;
  overflow: auto;
}

.product1{
  margin: 5px;
  border: 2px ;
  float: left;
  background-color:  #1e05ff;
  width: 350px;
  height: 100px;
}
.product1 a h1{
  color:white ;
  display: inline-block;
  text-align: center;
}
.product1:haver a h1{
  background-color: blue;
  padding:400px 100px ;
}

.product2{
  margin: 5px;
  border: 2px ;
   background-color: #1e05ff;
  float: left;
  width: 350px;
  height: 100px;
}
.product2 a h1{
  color: white;
  display: inline-block;
  text-align: center;
}


.product2:haver a h1{
  background-color: blue;
  padding:400px 100px ;
}

/*code for banner*/
 {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
.mySlides {display: none}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width:1000px;
  position: relative;
  margin-left: 250px;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0px;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

body{
  background:#e9e9f5;
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
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
    </style>
  </head>
  <body>
    <div class="header">
        <img src="images/amart.png" alt="logo" />
      <form>
        <input type="text" name="search" placeholder="Search..">
        <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>      
      </form>
    </div>

    <h1>Terms & Conditions</h1>
    <p>www.amart.com is an internet based online course booking platform owned and operated by Prinston Smart Engineers, a company incorporated under the laws of India, with its registered office at C113/114 2nd floor Abul Fazal Enclave, Okhla New Delhi-110025 and recognised by WeDir Technology (MEP Services) , Doha Qatar.</p>
    <p>Through the Website, Amart shall provide you online services for buying or selling of products over the Internet across cities in Bangalore, Delhi , Hyderabad and Mumbai.</p>
    <h2>Terms and Conditions adherence to acceptance</h2>
    <p>This Enroller Agreement gives out the terms and conditions on which Course4job shall provide the Services to the Enroller through the Website. In addition to this Agreement and depending on the Services opted by the enroller, this Agreement elaborates the terms and conditions under which enrollers are allowed to use the Website and describes the manner in which we can treat your account when you raise an enquiry with the company to take the services.</p>
    <p>The services, terms and conditions are subject to change from time to time, at the sole discretion of the company and the enroller is asked to read and accept the correct Terms of service every time willing to take the services. Terms of service shall be judged to be a part of this Agreement and in the event of a conflict between such terms of service and this Agreement, the terms of this Agreement shall take.</p>
    <p>Use of the Website is given to the Enroller conditioned on acceptance without changes of all the terms, conditions and notices allotted in this Agreement and the Terms of service, as may be published on the Website from time to time. This Agreement replaces all previous oral and written terms and conditions discussed by any third party to enroller relating to your use of the Website for Services. For the clearance of doubts, it is obvious that use of the Website by the enroller makes an acknowledgement and acceptance by the enroller of this Agreement and the terms of service.</p>
    <p>Here we have the right to collect data from the enroller for improvement of our services also to make sure enroller avails the services without any hurdles.</p>
    <p>Additionally, the Service Provider (“training centres”) may give terms and guidelines that govern particular features, offers or the operating rules and policies applicable to each Service and the enroller is required to stick to the same. The enroller shall be responsible for compliance with the terms and guidelines or operating rules and policies of the Service Provider with whom the enroller selects to deal, including terms and conditions set forth in a Service Providers.</p>
    <p>In the event that any of the terms, conditions and notices given in this Agreement or the terms of service conflict with the additional/other terms and guidelines specified by the Service Provider, then the latter terms/guidelines shall prevail.</p>
    <p>We reserve the right to update the terms, conditions and notices under which the Services that are provided through the Website, including but not limited to the costs for the Services given through the Website at any point of time. The enroller shall be responsible for regularly taking these terms and conditions.</p>
    <p>The Enroller hereby agrees, expresses that he has read and fully understands the Terms and Condition of Course4job in respect of the Website, and the Enroller further assures that the terms and conditions are acceptable to him. If you do not agree with any part of the Agreement, please do rethink on using services provided by the company.</p>
    <p>Any customer grievances, doubts and queries can be clarified by reporting to the company at course4job20@gmail.com The Enroller agrees and undertakes, and is not allowed to sell, trade or resell or exploit for any commercial purposes, any portion of the Service. The Website is strictly not for commercial use but is specifically meant for personal use only for every user.</p>
    <p>The content on this website is only for information purposes only.</p>
    <p>Amart is entitled to ensure that all the information on the website is correct to best of our knowledge.</p>
    <p>Amart is only as a booking agent, hence, it shall not have any liability for any aspect of the services between the service provider and the enroller as regards the standards of services provided by the service providers. In no circumstances shall the company be liable for the services provided by the service provider.</p>

    <h3>All Rights Reserved:</h3>
    <p>Amart reserves the right, to terminate the access to the website and the related services or any portion thereof at any time, without notice.</p>
    <p>The company reserves the right to charge course booking fees for few courses, as well as booking fees based on certain completed transactions using the company’s Services.</p>

    <h3>Privacy Policy:</h3>
    <p>Individual information is collected purely to serve the purpose of education service provision. The enroller submits personal information in different forms, such as enquiry form, via emails or personal conversations through telephones.</p>
    <p>All the information provided by the user is at best of our knowledge used only for providing the services opted for. By reading the Privacy Policy, the enroller hereby agrees to the collection of such information by the company. At course4job20@gmail.com, part of Course4job, we understand the individual information is private and we are here to protect your privacy and we commit to safeguard your personal information. We assure to take measures to maintain physical, electronic, and practical upholds to safeguard the enroller’s information from unauthorized access, use, or disclosure. We respect each enroller’s privacy and the enroller’s information is private information of the enroller alone and will not be shared with any other party without the permission of the enroller. We guarantee that the information will not be collected or disclosed to any other party.</p>
    <p>For more information please visit the User agreement policy on our Terms and Conditions page.</p>

    <h3>Disclaimer:</h3>
    <p>Web world is a huge place and due to absence of use of encryption in internet, the internet is not considered as a secure medium and 100% privacy cannot be ensured. Information provided by the enroller to the company website will be received by the company on a non-confidential basis. We recommend the user to use appropriate security, antivirus, and other protective software tools.</p>
    

    <footer class="footer-distributed">
    <div class="footer-left">
    <p class="footer-links">
    <a href="about.jsp">About Us</a><br>  
    <a href="terms.jsp">Terms and Condition</a>   
    <br>
    <a href="contact.jsp">Contact us</a>
    <br>
     <a href="adminlogin.jsp">AdminLogin</a>
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
    <h3>Follw us:<h3>
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
    </div>
    </div>
    </footer>
       
  </body>
</html>

