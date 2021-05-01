import React from "react"
import { Link } from "react-router-dom";

function HeaderButton(props)
{
    var [backgroundColor,changeColor] = React.useState(props.backgroundColor);
    var [textColor,changeTextColor] = React.useState(props.textColor);

    function handleMouseOver() {
        changeColor(props.hoverColor);
        changeTextColor(props.hoverTextColor);
    }

    function handleMouseOut() {
        changeColor(props.backgroundColor);
        changeTextColor(props.textColor);
    }

    return (
        <li className={props.className} style={{
                backgroundColor: backgroundColor, 
            }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link style={{textDecoration: "none",color:textColor}} to={props.to}>{props.title}</Link>
        </li>

    );
}


export default HeaderButton;