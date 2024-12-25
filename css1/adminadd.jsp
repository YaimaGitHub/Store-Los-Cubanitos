<%@ page import="java.sql.*"%>
<%

Class.forName("com.mysql.cj.jdbc.Driver");
Connection con =  DriverManager.getConnection("jdbc:mysql://localhost:3306/registration?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&user=root");

%>
<%
	    PreparedStatement st = null;
        ResultSet rs=null;
        String q="";
   
    try
	{
			 String email=request.getParameter("email");
			 String password=request.getParameter("pass");
             q="Select count(*) from admin_profile where admin_profile.email=? and admin_profile.password=? ";
             st = con.prepareStatement(q);
             st.setString(1,email);
			 st.setString(2,password);
			 
             System.out.println(q);
             rs = st.executeQuery();
			 int a=0;
			 while(rs.next())
				a=rs.getInt(1);
			 System.out.println("a");
			 if (a==1)
				 response.sendRedirect("adminhomepage.jsp");
			 else
			 {
				 request.setAttribute("Error","Invalid Email/Password"); 
				RequestDispatcher rd = request.getRequestDispatcher("adminlogin.jsp");
			    
                rd.forward(request,response);	
				 //response.sendRedirect("adminlogin.jsp");
				 System.out.println("invalid credentials");
			 }
			  
                  
    }
    catch(Exception e)
    {
                    System.out.println(e);
					e.printStackTrace();
                
    }
	%>
	