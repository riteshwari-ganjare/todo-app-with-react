const Card = (props) => {
  const {arr}=props;
  
  
  return (
    arr.map((value)=>{
return(
<div className="container">
  <div className="card">
    <div className="circle">
    <h6>{value.id}<br></br>{value.heading}</h6>
    {/* <h5>{value.heading}</h5> */}
    </div>
    <div className="content"><p>{value.Disc}</p></div>
    </div>

</div>  

)
    })
    
  );
  }
  export default Card;

