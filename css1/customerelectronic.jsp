<%@ page import="java.sql.*"%>
<%@ page import ="java.util.*"%>
<%@ page import="intern.Electronics"%>
<%

Class.forName("com.mysql.cj.jdbc.Driver");
Connection con =  DriverManager.getConnection("jdbc:mysql://localhost:3306/registration?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&user=root");


	    PreparedStatement st = null;
        ResultSet rs=null;
        String q="";
   
    try
	{
            
//  setProductCost  setImgdata			
		     q="select * from electronics ";
             st = con.prepareStatement(q);
             ArrayList<Electronics>  electronicsList = new ArrayList<Electronics>();
             rs = st.executeQuery();
			 String a= "";
			 while(rs.next())
			 {	 
				Electronics ee = new Electronics();
				byte[] imgData = null;
				ee.setProductName(rs.getString("product_name"));
				ee.setProductCost(rs.getString("cost_of_the_product"));
				ee.setProductId(rs.getString("product_id"));
				ee.setProductShopName(rs.getString("name_of_the_shop"));
				ee.setProductViewInfo(rs.getString("view_more_info"));
				//Blob image = rs.getBlob("product_image");
				//imgData = image.getBytes(1, (int) image.length());
				electronicsList.add(ee);

			 }	
			request.setAttribute("ELECTRONICSLIST",electronicsList);
			RequestDispatcher rd = request.getRequestDispatcher("customerelectronicdisplay.jsp");
			    
                rd.forward(request, response);	
	}
  catch(Exception e)
  {
	  e.printStackTrace();
  }
  finally
  {
	  if(rs!=null)
		  rs.close();
	  if(st!= null)
		  st.close();
	  if(con != null)
		  con.close();
  }
%>    