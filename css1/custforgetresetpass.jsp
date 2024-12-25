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
             String cemail=request.getParameter("email");
             String cphone=request.getParameter("Phone");
		     q="select count(*) from customer where customer.customer_email=? and customer.customer_phone=? ";
             st = con.prepareStatement(q);
             st.setString(1,cemail);
			 st.setString(2,cphone);
			 
             System.out.println(q);
             rs = st.executeQuery();
			 int a= 0;
			 while(rs.next())
				a= rs.getInt(1);
			 System.out.println("a");
			 if (a==1) 
			 {
				  request.setAttribute("email",cemail);
				 RequestDispatcher rd = request.getRequestDispatcher("customerreset.jsp");
				 rd.forward(request, response);
				//response.sendRedirect("customerreset.jsp");
			 }	
			 
			 else
			 {
				
				 
				RequestDispatcher rd = request.getRequestDispatcher("customersignup.jsp");
			    
                rd.forward(request, response);	
				 //response.sendRedirect("customersignup.jsp");
				 System.out.println("invalid credentials");
			 }
			  
                  
    }
    catch(Exception e)
    {
                    System.out.println(e);
					e.printStackTrace();
                
    }
	
%>	