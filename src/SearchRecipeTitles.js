import Search from "./image/s1.jpg"
function SearchRecipeTitles() {
 
    return (
    <div className="SearchRecipeTitles">
      <h3>Search Recipe Titles:</h3>
      
      <span style={{marginTop:"10px"}}><input type="text" placeHolder="Enter Keyword..." style={{height:"40px",width:"150px",border:"2px solid whitesmoke"}}/></span>
      <span ><button type="button" style={{height:"40px",width:"40px",backgroundColor:"black",border:"none",marginTop:"10px"}}><img src={Search} width="25px"/></button></span>
      
      
    </div>
  );
}

export default SearchRecipeTitles;
