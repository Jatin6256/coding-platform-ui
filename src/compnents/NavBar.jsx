import React from "react"
import "../css/NavBar.css"
import HeaderButton from "./HeaderButton"

function NavBar(){

    var options = [
        {
            key: 1,
            title: "Rankings",
            to:"/rankings"
        },
        {
            key: 2,
            title: "Past Events",
            to:"/pastEvents"
        },
        {
            key: 3,
            title: "Live Events",
            to:"/liveEvents"
        },
        {
            key: 4,
            title: "Log out",
            to:"/login"
        }

    ];
    return (

        <header>
            <div className="heading">
                <p> Welcome Jatin !!</p>
            </div>
            <div className="options"> 
                <ul>
                    { options.map( item => 
                    <HeaderButton 
                            key={item.key}
                            to={item.to}
                            className="headerButton"
                            title={item.title}
                            backgroundColor="black"
                            hoverColor="white"
                            textColor="white"
                            hoverTextColor="black"
                        />
                    )}
                </ul>
            </div>
        </header>
    );
}

export default NavBar;