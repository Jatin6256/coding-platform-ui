import React from "react"
import LoginButton from "../compnents/LoginButton"
import "../css/LoginPage.css"

function LoginPage() {

    return (

        <div className="login-page">
            <p className="heading"> IIITR CODECHEF </p>
            <LoginButton 
                imageUrl="https://pluspng.com/img-png/google-logo-png-revised-google-logo-1600.png"
                altText="google logo"
                buttonColor="rgb(0, 225, 255)"
                hoverColor="blue"
            />
        </div>
    );

}

export default LoginPage;