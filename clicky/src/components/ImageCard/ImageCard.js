import React from "react";

const ImageCard = props => (
    <div className="card col-2">
        <div className="img-container">
            <img  src={props.image}   onClick={() => props.clicker(props.id, props.clicked)} data-clicked={props.clicked}/>
        </div>
   
    </div>
);
    


export default ImageCard;

// onClick = {() => props.clicker(props.id, props.clicked)} data-clicked={props.clicked}