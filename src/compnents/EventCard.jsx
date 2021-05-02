import React from "react"
import "../css/EventCard.css"
import HeaderButton from "./HeaderButton"

function EventCard(props) {
    
    return (
        <div className="eventCard">
            <h1>{props.host}</h1>
            <p> presents </p>
            <h2>{props.eventName}</h2>
            <h3>{props.dateTime}</h3>
            <h4>{props.duration} hours</h4>
            <HeaderButton 
                to={props.to}
                className="headerButton"
                title={props.title}
                backgroundColor="white"
                hoverColor="black"
                textColor="black"
                hoverTextColor="white"
            />

        </div>
    );
}

export default EventCard;