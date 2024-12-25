<%@ page import="java.sql.*"%>
<%

Class.forName("com.mysql.cj.jdbc.Driver");
Connection con =  DriverManager.getConnection("jdbc:mysql://localhost:3306/registration?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&user=root");

%>
<%
	    Statement st = null;
        ResultSet rs=null;
        String q="";
   
    try
	{        String 	Name=request.getParameter("Name");
             String Email=request.getParameter("Email_id");
             String number=request.getParameter("number");
			 String city=request.getParameter("city");
			 String Message=request.getParameter("Message");
			 st = con.createStatement();
		     q="insert into contact_us values('"+Name+"','"+Email+"','"+number+"','"+city+"','"+Message+"')";
             System.out.println(q);
             int a = st.executeUpdate(q);
			System.out.println(a);
                   
    }
    catch(Exception e)
    {
                    System.out.println(e);
					e.printStackTrace();
                
    }
	response.sendRedirect("index.jsp");
%>	