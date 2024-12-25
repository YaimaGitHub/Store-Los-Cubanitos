package intern;

import javax.servlet.*;

import java.sql.*;
import java.io.*;
import javax.servlet.http.*;


public class UploadElectricalServlet extends HttpServlet
{
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        
            Connection con =null;
            PreparedStatement st = null;
                    ResultSet rs=null;
                    String q="";
            InputStream inputStream = null;
            try
            {
                     Class.forName("com.mysql.cj.jdbc.Driver");
                     con =  DriverManager.getConnection("jdbc:mysql://localhost:3306/registration?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&user=root");
                    String name_of_the_shop=request.getParameter("sname");
                    String address=request.getParameter("address");
			        String product_type=request.getParameter("ptype");
                    String product_name=request.getParameter("pname");
             //String product_image=request.getParameter("pimage");
            
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

                     q="insert into electrical (name_of_the_shop,address,product_type,product_name,product_image,product_id,cost_of_the_product,view_more_info,image_content_type) values (?,?,?,?,?,?,?,?,?)";
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
                     int a = st.executeUpdate();
                    System.out.println(a);

            }
          catch(Exception e)
          {
              e.printStackTrace();
          }
          finally
          {
            try
            {
              if(rs!=null)
                  rs.close();
              if(st!= null)
                  st.close();
              if(con != null)
                  con.close();
            }
            catch(Exception e)
            {
            
            }
          }
          response.sendRedirect("css1/adminhomepage.jsp");
        }
    
}