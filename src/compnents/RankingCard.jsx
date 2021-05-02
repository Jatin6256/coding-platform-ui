import React from "react"
import "../css/RankingCard.css"

function RankingCard(props) {
    
    return (
        <div className="card">
            <img className="profileImage" src={props.imageUrl} alt="profileImage"></img>
            <h2>{props.name}</h2>
            <h3>{props.rollNumber}</h3>
            <h4>Points: {props.points}</h4>
        </div>
    );
}

export default RankingCard;