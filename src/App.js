import BkGroundImage from "./image/Background.jpg"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UpperNav from "./UpperNav";
import Main from "./Main"
function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${BkGroundImage})`}}>
    <div style={{height:"60px",opacity:"0.5"}}></div>
     <div style={{margin:"0px 60px 0px 60px", backgroundColor:"white"}}>
        <UpperNav/>
        <div style={{margin:"0px 50px 0px 75px"}}>
          <Navbar/> 
          <div style={{display: "grid",gridTemplateColumns: "15rem 15rem",gridGap:"2rem"}} >
            <Sidebar/>
            <Main />
          </div>  
        </div> 
      </div>
      </div>
);
}

export default App;
