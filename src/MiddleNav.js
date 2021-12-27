import Bookmark from "./image/bookmark.jpg"
import Search from "./image/search.png"
import Cart from "./image/cart.jpg"
function MiddleNav() {
    return (
      <div style={{marginTop:"15px",marginBottom:"0px" }}>
      <div >
      <div className="MiddleNav" style={{display:"flex",justifyContent:"space-around",height:"60px"}}>
   
   <div style={{display:"flex"}}> 
     <p>EASYMEALS</p>  
   </div>
   <div style={{display:"flex"}} >
       <div>
       <p style={{border:"2px solid whitesmoke",padding:"2px"}}><span><select style={{height:"30px",width:"137px",backgroundColor:"whitesmoke",border:"none"}}><option>ALL CATEGORIES</option><option>SWEET</option><option>SNACKS</option></select></span><input type="text" placeHolder="Select recipes..." style={{height:"30px",width:"300px",border:"none"}}/></p>
       </div>
       <button style={{height:"37px",width:"40px",backgroundColor:"yellow",border:"none"}}><img src={Search} width="40px" height="38px"/></button>
      
        <p><label><img src={Bookmark} width="35px"/><button style={{border:"none",backgroundColor:"white" }}>Favorites</button></label></p>
        <span  style={{border:"none",color:"whitesmoke",fontWeight:"x-large"}}>|</span>
        <p><label><img src={Cart} width="35px"/><button style={{border:"none",backgroundColor:"white"}}>Cart</button></label></p>
       
   </div>
   </div>
      </div>
       
      </div>
       
      
    );
  }
  
  export default MiddleNav;