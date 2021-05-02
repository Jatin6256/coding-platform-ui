import React from "react"
import "../css/ProblemCard.css"
import HeaderButton from "./HeaderButton"

function ProblemCard(props) {
    
    return (
        <div className="problemCard">
            <h1> Question {props.questionNumber} :</h1>
            <p> {props.question} </p>
            <form>
                <label for="myfile">Select a file:</label>
                <input type="file" id="myfile" name="myfile" />
                <input type="submit" value="Submit"  />
        
            </form>

        </div>
    );
}

export default ProblemCard;