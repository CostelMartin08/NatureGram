import React, { useState, useEffect } from "react";
import './likebutton.css'

function AfisareLike(props) {
  const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    setLikeList(props.pru);
  }, [props.pru]);
 
  return (
    
     <div className="mx-2"><small>Apreciat de</small>
        {likeList.map((like, index) => (
          
           <small key={index} className="d-inline"> {like}</small> 
           
       
       ))}
      </div>
   
  );
}

export default AfisareLike;
