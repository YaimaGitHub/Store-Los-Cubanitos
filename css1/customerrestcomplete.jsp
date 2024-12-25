<%@ page import="java.sql.*"%>
<%

Class.forName("com.mysql.cj.jdbc.Driver");
Connection con =  DriverManager.getConnection("jdbc:mysql://localhost:3306/registration?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&user=root");

%>
<%
	    Statement st = null;
        ResultSet rs1;
        String q="";
   
    try
	{
		     String cemail=request.getParameter("email");
             String customer_pass=request.getParameter("passw");
			 String customer_newpass=request.getParameter("passw1");
             st = con.createStatement();
			 if(customer_pass==customer_newpass)
			 {
             q="update  customer set  customer_pass ='"+customer_pass+"' where customer_email = '"+cemail+"'";
			 }
			 else
			 {
				request.setAttribute("Error","mismatchh Password");
				 
				response.sendRedirect("customerlog.jsp");
			 }
             System.out.println(q);
             int a = st.executeUpdate(q);
			System.out.println(a);
                   
    }
    catch(Exception e)
    {
                    System.out.println(e);
					e.printStackTrace();
                
    }
	
%>	