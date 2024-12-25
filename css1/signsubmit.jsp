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
		     String customer_name=request.getParameter("cname");
			 String customer_dob=request.getParameter("Dob");
			 String customer_phone=request.getParameter("Phone");
			 String customer_address=request.getParameter("Address");
             String customer_email=request.getParameter("email");
             String customer_pass=request.getParameter("passw");
			 System.out.println("name="+customer_name);
			 System.out.println("dob="+customer_dob);
			 System.out.println("customer_phone="+customer_phone);
			 System.out.println("customer_address="+customer_address);
			 System.out.println("customer_email="+customer_email);
			 System.out.println("customer_pass="+customer_pass);
             st = con.createStatement();
             q="insert into customer values('"+customer_name+"','"+customer_dob+"','"+customer_phone+"','"+customer_address+"','"+customer_email+"','"+customer_pass+"')";
             System.out.println(q);
             int a = st.executeUpdate(q);
			System.out.println(a);
                   
    }
    catch(Exception e)
    {
                    System.out.println(e);
					e.printStackTrace();
                
    }
	response.sendRedirect("customerlog.jsp");
%>	