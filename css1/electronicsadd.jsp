<%@ page import="java.sql.*"%>
<%@ page import="javax.servlet.http.Part"%>
<%@ page import="java.io.*"%>
<%

Class.forName("com.mysql.cj.jdbc.Driver");
Connection con =  DriverManager.getConnection("jdbc:mysql://localhost:3306/registration?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&user=root");

%>
<%
	    PreparedStatement st = null;
        ResultSet rs1;
        String q="";
		InputStream inputStream = null; 
   
    try
	{
		     String name_of_the_shop=request.getParameter("sname");
			 String address=request.getParameter("address");
			 String product_type=request.getParameter("ptype");
			 String product_name=request.getParameter("pname");
             String product_image=request.getParameter("pimage");
			 Part filePart = request.getPart("pimage");
             System.out.println(filePart);
            if (filePart != null) {
                // prints out some information for debugging
                System.out.println(filePart.getName());
                System.out.println(filePart.getSize());
                System.out.println(filePart.getContentType());

                // obtains input stream of the upload file
                inputStream = filePart.getInputStream();
            }
             String product_id=request.getParameter("pdetails");
			 String cost_of_the_product=request.getParameter("pcost");
			 String view_more_info=request.getParameter("vinfo");
             q="insert into electronics values(?,?,?,?,?,?,?,?,?)";
             st = con.prepareStatement(q);
             st.setString(1,name_of_the_shop);
             st.setString(2,address);
             st.setString(3,product_type);
             st.setString(4,product_name);
             st.setBlob(5,inputStream);
             st.setString(6,product_id);
             st.setString(7,cost_of_the_product);
             st.setString(8,view_more_info);
             st.setString(9,filePart.getContentType());
             System.out.println(q);
             int a = st.executeUpdate(q);
			System.out.println(a);
                   
    }
    catch(Exception e)
    {
                    System.out.println(e);
					e.printStackTrace();
                
    }
	response.sendRedirect("adminhomepage.jsp");
%>	