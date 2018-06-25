import React from "react";
import "./ImageCard.css"
const ImageCard = props => (
    <div className="row">
        <div className="card col-2">
            <div className="img-container">
                <img  src={props.image}   onClick={() => props.clicker(props.id, props.clicked)} data-clicked={props.clicked}/>
            </div>  
        </div>
    </div>
);
    


export default ImageCard;

// onClick = {() => props.clicker(props.id, props.clicked)} data-clicked={props.clicked}