import React from "react"
import EventCard from "../compnents/EventCard"
import NavBar from "../compnents/NavBar"

function PastEvents(params) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var prevEvents = [

        {
            host: "Codesoc",
            eventName: "Code Up 1",
            date: new Date(2021,3,20,22,0),
            duration: 3
        },
        {
            host: "Codesoc",
            eventName: "Code Up 2",
            date: new Date(2021,3,25,22,0),
            duration: 3
        },
        {
            host: "Codesoc",
            eventName: "Code Up 3",
            date: new Date(2021,3,30,22,0),
            duration: 3
        },
    ]
    return (
        <div>
            <NavBar 
                id="2"
            />
            {prevEvents.map(
                event => {
                    var { date } = event;
                    var dateTime = months[date.getMonth()] + " " + date.getDate() + ", " + date.getHours() + ":" + (date.getMinutes() === 0 ? "00" : date.getMinutes());
                    return <EventCard 
                            host={event.host}
                            eventName={event.eventName}
                            dateTime={dateTime}
                            duration={event.duration}
                            title="Practice"
                            to="/problems/past"

                        />
                }
            )}
        </div>
    );
}

export default PastEvents;