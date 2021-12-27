import Insta from "./image/insta.jpg"
import P from "./image/p.jpg"
import Fbk from "./image/fbk.jpg"
import Wifi from "./image/wifi.jpg"
import Youtube from "./image/youtube.jpg"
import Twitter from "./image/twitter.jpg"
function LowerNav() {
    return (

      <div style={{marginTop:"5px",marginBottom:"40px" }}>
        <div style={{borderTop:"2px solid whitesmoke",borderBottom:"2px solid whitesmoke" }}>
        <div className="LowerNav" style={{color:"black",display:"flex",justifyContent:"space-around",marginTop:"10px",marginBottom:"5px"}}>
      <div style={{display:"flex"}}>
        <p style={{marginLeft:"0px" }}>HOME</p> 
        <p style={{marginLeft:"25px" }}>CATEGORES</p>  
        <p style={{marginLeft:"25px" }}>RECIPES</p> 
        <p style={{marginLeft:"25px" }}>CONTACT</p>
        <p style={{marginLeft:"25px" }}>ABOUT</p>
      </div>
      <div style={{display:"flex"}}>
          <p style={{marginLeft:"8px" }}><img src={Insta} width="15px"/></p>
          <p style={{marginLeft:"8px" }}><img src={Twitter} width={"15px"}/></p>
          <p style={{marginLeft:"8px" }}><img src={Fbk} width="15px"/></p>
          <p style={{marginLeft:"8px" }}><img src={P} width="20px"/></p>
          <p style={{marginLeft:"8px" }}><img src={Wifi} width="15px"/></p>
          <p style={{marginLeft:"8px" }}><img src={Youtube} width="15px"/></p>
      </div>
      </div>
      </div>
      </div>
    );
  }
  
  export default LowerNav;