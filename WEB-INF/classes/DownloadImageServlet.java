package intern;

import javax.servlet.*;

import java.sql.*;
import java.io.*;
import javax.servlet.http.*;
public class DownloadImageServlet extends HttpServlet
{
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
    {
        String pid = req.getParameter("electricalPID");
        System.out.println("pid==="+pid);
        if(pid != null && pid.length() > 0)
        {
            Connection con =null;
            PreparedStatement st = null;
                    ResultSet rs=null;
                    String q="";
            try
            {
                    Class.forName("com.mysql.cj.jdbc.Driver");
                     con =  DriverManager.getConnection("jdbc:mysql://localhost:3306/registration?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&user=root");
                    
        //  setProductCost  setImgdata			
                     q="select product_image,image_content_type from electrical where product_id=? ";
                     st = con.prepareStatement(q);
                     st.setString(1,pid);
                     System.out.println(q);
                     rs = st.executeQuery();
                     byte[] imgData = null;
                     String conType = "";
                     while(rs.next())
				     {   
                        Blob image = rs.getBlob("product_image");
                        System.out.println("1234");
                        imgData = image.getBytes(1, (int) image.length());
                        conType = rs.getString("image_content_type");
                     }
                     resp.setHeader("Content-Type", conType);
                     resp.setHeader("Content-Disposition", "inline; filename=a.jpg");
                     resp.getOutputStream().write(imgData);

    

                    	
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
        }
        
    }
}