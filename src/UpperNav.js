import Register from "./image/Register.jpg"
import User from "./image/user.jpg"

function UpperNav() {
  return (
    <div className="UpperNav" style={{background:"black" ,color:"whitesmoke",display:"flex",justifyContent:"space-around" ,height:"30px"}}>
    <div style={{display:"flex",margin:"5px" }}>
        <p style={{color:"#999999" }}>Furum</p> 
        <p style={{marginLeft:"15px",color:"#999999" }}>Categories</p> 
        <p style={{marginLeft:"15px",color:"#999999" }}>Books</p> 
        <p style={{marginLeft:"15px"  }}>Recipe Index</p> 
        <p style={{marginLeft:"15px",color:"#999999" }}>Popular</p> 
    </div>
    <div style={{display:"flex",margin:"5px"}}>
        <span><img src={Register} width="15px" style={{marginTop:"2px"}}/><span style={{margin:"3px"}}>Register</span></span>
        <p style={{marginLeft:"15px"}}><img src={User} width="15px" height="15px"/><span style={{margin:"3px"}}>Login</span></p>
    </div>
    </div>
  );
}

export default UpperNav;