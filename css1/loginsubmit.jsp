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
             String customer_email=request.getParameter("email");
             String customer_pass=request.getParameter("passw");
		     q="select customer_name from customer where customer.customer_email=? and customer.customer_pass=? ";
             st = con.prepareStatement(q);
             st.setString(1,customer_email);
			 st.setString(2,customer_pass);
			 
             System.out.println(q);
             rs = st.executeQuery();
			 String a= "";
			 while(rs.next())
				a= rs.getString(1);
			 System.out.println(a);
			 if (a!=null && a.length() > 0)
			 {
				 session.setAttribute("LOGGED_IN_USER_NAME",a);
				 session.setAttribute("LOGGED_IN_USER_EMAIL",customer_email);
				 
				 response.sendRedirect("customerloginhome.jsp");
			 }	 
			 
			 else
			 {
				 request.setAttribute("Error","Invalid Email/Password");
				 
				RequestDispatcher rd = request.getRequestDispatcher("customerlog.jsp");
			    
                rd.forward(request, response);	
				 //response.sendRedirect("customerlog.jsp");
				 System.out.println("invalid credentials");
			 }
			  
                  
    }
    catch(Exception e)
    {
                    System.out.println(e);
					e.printStackTrace();
                
    }
	
%>	