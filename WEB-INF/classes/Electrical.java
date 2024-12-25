package intern;
public class Electrical
{
	private String productName;
	private String productCost;
	private String productId;
	private String productShopName;
	private String productViewInfo;

	private byte[] imgdata;
	public String getProductId()
	{
		return  productId;
	}
	
	public void setProductId(String id1) 
	{
		this.productId = id1;
	}
	public String getProductName()
	{
		return  productName;
	}

	public void setProductName(String nn) 
	{
		this.productName = nn;
	}
	public String getProductCost()
	
	{
		return  productCost;
	}
	public void setProductCost(String cc)
	{
		this.productCost = cc;
	}
public void setProductShopName(String ps) 
	{
		this.productShopName = ps;
	}
	public String getProductShopName()
	{
		return  productShopName;
	}
	public void setProductViewInfo(String vi) 
	{
		this.productViewInfo = vi;
	}
	public String getProductViewInfo()
	{
		return  productViewInfo;
	}
	public byte[] getImgdata()
	{
		return  imgdata;
	}
	public void setImgdata(byte[]  ii)
	{
		this.imgdata = ii;
	}
}