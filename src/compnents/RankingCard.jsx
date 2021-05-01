import React from "react"
import "../css/RankingCard.css"

function RankingCard(params) {
    
    return (
        <div className="card">
            <img className="profileImage" src="https://lh5.googleusercontent.com/-dBvoPg7zTx4/AAAAAAAAAAI/AAAAAAAAAEY/oV5vRxpVsb0/photo.jpg"></img>
            <h2>Jatin Sachdeva</h2>
            <h3>CS19B1013</h3>
            <h4>score: 100</h4>
            <h4>rank: 1</h4>
        </div>
    );
}

export default RankingCard;