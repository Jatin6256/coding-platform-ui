import React from "react"
import EventCard from "../compnents/EventCard";
import NavBar from "../compnents/NavBar";

function LiveEvents(params) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var liveEvents = [

        {
            host: "Codesoc",
            eventName: "Code Up 4",
            date: new Date(),
            duration: 3
        },
        {
            host: "Codesoc",
            eventName: "Code Up 5",
            date: new Date(),
            duration: 3
        },
    ]
    return (
        <div>
            <NavBar />
            {liveEvents.map(
                event => {
                    var { date } = event;
                    var dateTime = months[date.getMonth()] + " " + date.getDate() + ", " + date.getHours() + ":" + (date.getMinutes() === 0 ? "00" : date.getMinutes());
                    return <EventCard 
                            host={event.host}
                            eventName={event.eventName}
                            dateTime={dateTime}
                            duration={event.duration}
                            title="Start Now"
                            to="/problems/current"
                        />
                }
            )}
        </div>
    );
}

export default LiveEvents;