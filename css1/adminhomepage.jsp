<%@page import="java.util.*" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Admin Page</title>
	<link rel="stylesheet" href="styles.css">
	<style>
	.header{
				width:100%;
				height:60px;
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

</head>
<body>
		<div class="header">
  			<img src="images/amartadmin.png" alt="logo" />
			<form>
        <a href="index.jsp"><i class="fa fa-fw fa-user"></i> Logout</a>			
      </form>
    </div>
	<meta name="viewport" content="width=device-width, initial-scale=1">


<script>
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
</script>

<div class="wrapper">
    <div class="sidebar">
        <h2>Admin Panel</h2>
        <ul>
			<li><a href="electricals.jsp"><i class="fas fa-home"></i>Electrical Products</a></li>
            <li><a href="electronics.jsp"><i class="fas fa-user"></i>Electonics Products</a></li>
			<li><button onclick="myFunction()">Dark mode</button></li>
        </ul> 
    </div>
</div>


</body>
</html>