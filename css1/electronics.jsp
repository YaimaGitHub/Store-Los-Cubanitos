<%@ page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
    
    <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
<meta charset="UTF-8">
	<link rel="stylesheet" href="kk.css">
       
    </head>
      <body>
          <style>
              @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
			  .header{
				width:100%;
				height:20px;
				background-color:  #594f8d;
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
          

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}

body{
   background-color: #f3f5f9;
}

.wrapper{
  display: flex;
  position: relative;
}

.wrapper .sidebar{
  width: 200px;
  height: 100%;
  background: #4b4276;
  padding: 30px 0px;
  position: fixed;
}

.wrapper .sidebar h2{
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li{
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
}    

.wrapper .sidebar ul li a{
  color: #bdb8d7;
  display: block;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;
}

.wrapper .sidebar ul li:hover{
  background-color: #594f8d;
}
    
.wrapper .sidebar ul li:hover a{
  color: #fff;
}
 
.wrapper .sidebar .social_media{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.wrapper .sidebar .social_media a{
  display: block;
  width: 40px;
  background: #594f8d;
  height: 40px;
  line-height: 45px;
  text-align: center;
  margin: 0 5px;
  color: #bdb8d7;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.wrapper .main_content{
  width: 50%;
  margin-left: 200px;
}

.wrapper .main_content .header{
  padding: 20px;
  background: #fff;
  color: #717171;
  border-bottom: 1px solid #e0e4e8;
}

.main_content .info{
  margin-left: 18%;
  color: #717171;
  line-height: 25px;
   font-size: 25px;
}

.wrapper .main_content .info div{
  margin-bottom: 20px;
}

@media (max-height: 500px){
  .social_media{
    display: none !important;
  }
}

 input[type=submit] {
  background-color:darkcyan;
  color: black;
  padding:15px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float:right;
  margin-top:35px; 
 
}
input[type=text] {
   border: 1px solid #ccc;
  width: 70%
  border-radius: 2px;
 padding: 12px 57px;
    padding-top: 10px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
 
}
			body {
  padding: 0px;
  background color: #594f8d;
  color: black;
  font-size: 18px;
}

.dark-mode {
  background-color: black;
  color: white;
}
          
  </style>
	 
<div class="wrapper">
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
    <div class="sidebar">
        <h2>Admin Panel</h2>
        <ul>
			<li><a href="electricals.jsp">Electrical Products</a></li>
            <li><a href="electronics.jsp">Electronics Products</a></li>
			<li><button onclick="myFunction()">Dark mode</button></li>
        
        </ul> 
    </div>
    </div>
    

    <div class="main_content">
        <div class="header">ELECTRONICS</div>  
        <div class="info">
        
    
  <form name="Admin electronics" action="<%=request.getContextPath()%>/UploadElectronicsServlet" method="post" enctype="multipart/form-data">
<table cellpadding="2" width="50%" align="center"
cellspacing="2">
  <tr>
    <td><label>Name of the shop:</label></td>
    <td> <input type="text" id="sname" name="sname"><br><br></td>
  </tr>
  <tr>
    <td><label>Address:</label></td>
    <td> <input type="text" id="address" name="address"><br><br></td>
  </tr>
<tr>
  <td><label>Product type:</label></td>
  <td><input type="text" id="ptype" name="ptype"><br><br></td>
</tr>
<tr>
  <td><label>Product name:</label></td>
  <td><input type="text" id="pname" name="pname"><br><br></td>
</tr>
<tr>
  <td><label>Product image:</label></td>
  <td><input type="file" id="pimage" name="pimage" accept="image/*"><br><br></td>
</tr>
<tr>
  <td><label> Product ID:</label></td>
  <td><input type="text" id="pdetails" name="pdetails"><br><br></td>
</tr>
<tr>
  <td><label>Cost of product:</label></td>
  <td><input type="text" id="pcost" name="pcost"><br><br></td>
</tr>
<tr>
  <td><label>View more information:</label></td>
  <td><input type="text" id="vinfo" name="vinfo"><br><br></td>
</tr>
<tr>
 <td><input type="submit" value="Submit" ></td>
</tr>
</table>
</form> 
 </div>
 </div>
</body>
</html>