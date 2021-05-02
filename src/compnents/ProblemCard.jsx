import React from "react"
import "../css/ProblemCard.css"
import HeaderButton from "./HeaderButton";


function ProblemCard(props) {
    
    return (
        <div className="problemCard">
            <h1> Question {props.questionNumber} :</h1>
            <p> {props.question} </p>
            { !props.isPastEvent ? <form>
                <label for="myfile">Select a file:</label>
                <input type="file" id="myfile" name="myfile" />
                <input className="button" type="submit" value="Submit"  />
        
            </form> :
            <HeaderButton 
                to="#"
                className="headerButton"
                title="Download Test Cases"
                backgroundColor="white"
                hoverColor="black"
                textColor="black"
                hoverTextColor="white"
            />
            }

        </div>
    );
}

export default ProblemCard;