import One from "./One.js";
import Dosa from "./image/dosa.jpg"
import Thumbsup from "./image/thumsup.jpg"
import Cake from "./image/cake.jpg"
import Pizza from "./image/pizza.jpg"
import Maggi from "./image/maggi.jpg"
import Pasty from "./image/pasty.jpg"
import KadhaiPanner from "./image/kadhaipaneer.jpg"
import IceCream from "./image/icecream.jpg"
import Pasta from "./image/pasta.jpg"
import Rajbhog from "./image/rajbhog.jpg"
import Time from "./image/time.jpg"

function Main() {
    const text="Baked Sweet Potates with creamy avocado & pumkin";
    const text1="30 MINUTES";
    const text2="SUPER EASY";

 
    return (
    <div className="Main" style={{width:"50px",hieght:"450px"}}>
    <div style={{display: "grid",gridTemplateColumns: "15rem 15rem 15rem", gridGap: "2rem"}}>
        <One data={text}  data1={text1} data2={text2} src={Thumbsup} src1={Cake} src2={Time} />
        <One data={text}  data1={text1} data2={text2} src={Thumbsup} src1={Pizza} src2={Time}/>
        <One data={text}  data1={text1} data2={text2} src={Thumbsup} src1={Dosa}  src2={Time}/>
        <One data={text}  data1={text1} data2={text2} src={Thumbsup} src1={Maggi} src2={Time}/>
        <One data={text}  data1={text1} data2={text2} src={Thumbsup} src1={Pasty} src2={Time}/>
        <One data={text}  data1={text1} data2={text2} src={Thumbsup} src1={KadhaiPanner} src2={Time}/>
        <One data={text}  data1={text1} data2={text2} src={Thumbsup} src1={IceCream} src2={Time}/>
        <One data={text}  data1={text1} data2={text2} src={Thumbsup} src1={Pasta} src2={Time}/>
        <One data={text}  data1={text1} data2={text2} src={Thumbsup} src1={Rajbhog} src2={Time}/>
    </div>    
    </div>
  );
}

export default Main;
