<%@ page import="java.sql.*"%>
<%@ page import="java.util.*"%>
<%@ page import="intern.Electrical"%>

<%

Class.forName("com.mysql.cj.jdbc.Driver");
Connection con =  DriverManager.getConnection("jdbc:mysql://localhost:3306/registration?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&user=root");


	    PreparedStatement st = null;
        ResultSet rs=null;
        String q="";
   
    try
	{
            
//  setProductCost  setImgdata			
		     q="select * from electrical ";
             st = con.prepareStatement(q);
             ArrayList <Electrical> electricalList = new ArrayList<Electrical>();
             rs = st.executeQuery();
			 String a= "";
			 while(rs.next())
			 {	 
		        
				Electrical ee = new Electrical();
				byte[] imgData = null;
				ee.setProductName(rs.getString("product_name"));
				System.out.println("v1");
				ee.setProductCost(rs.getString("cost_of_the_product"));
				System.out.println("v2");
				ee.setProductId(rs.getString("product_id"));
				System.out.println("v3");
				System.out.println("shop==="+rs.getString("name_of_the_shop"));
				ee.setProductShopName(rs.getString("name_of_the_shop"));
				System.out.println("shop==="+ee.getProductShopName());
				
				ee.setProductViewInfo(rs.getString("view_more_info"));
				//Blob image = rs.getBlob("product_image");
				//imgData = image.getBytes(1, (int) image.length());
				electricalList.add(ee);

			 }	
			request.setAttribute("ELECTRICALLIST",electricalList);
			RequestDispatcher rd = request.getRequestDispatcher("customerhomedisplay.jsp");
			    
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