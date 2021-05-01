import React from "react"

function LoginButton(props) {

    var [buttonColor,changeColor] = React.useState(props.buttonColor);

    function handleHoverOver(params) {
        changeColor(props.hoverColor);
    }

    function handleHoverOut(params) {
        changeColor(props.buttonColor);
    }

    return (

        <div className="login-button" onMouseOver={handleHoverOver} onMouseOut={handleHoverOut} style={ {backgroundColor: buttonColor} }>
            <img src={props.imageUrl} alt={props.altText} />
            <p> Login </p>
            
        </div>
    );

}

export default LoginButton;