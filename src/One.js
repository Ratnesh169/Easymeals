function One(props) {
  return (
    <div className="One">
        <img src={props.src1} alt="image" style={{width:"250px",hieght:"450px"}}/>
        <p style={{display: "grid",gridTemplateColumns: "1.5rem 7.5rem 2rem 6rem"}}>
          <span style={{marginTop:"7px"}}><img src={props.src2}  alt="image"style={{width:"15px"}}/></span>
          <span style={{marginTop:"7px"}}><h6>{props.data1}</h6></span>
          <span><img src={props.src}  alt="image"style={{width:"30px"}}/> </span>
          <span style={{marginTop:"9px"}}><h6>{props.data2}</h6></span>
        </p>
        <p>{props.data}</p>
    </div>
    
  );
}

export default One;