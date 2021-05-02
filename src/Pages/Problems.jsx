import React from "react"
import { useParams } from 'react-router-dom';
import ProblemCard from "../compnents/ProblemCard";


function Problems() {
    var params = useParams();
    
    var questions = [
        {
            questionNumber: 1,
            question: "You are given an array  of length  and can perform the following operation on the array: Select a subarray from array  having the same value of elements and decrease the value of all the elements in that subarray by any positive integer .Find the minimum number of operations required to make all the elements of array  equal to zero.",
            

        },
        {
            questionNumber: 2,
            question: "You are given an array  of length  and can perform the following operation on the array: Select a subarray from array  having the same value of elements and decrease the value of all the elements in that subarray by any positive integer .Find the minimum number of operations required to make all the elements of array  equal to zero.",
            

        },
        
    ];
    return (
    <div>
        {questions.map(
            question => 
            <ProblemCard 
                questionNumber={question.questionNumber}
                question={question.question}
                isPastEvent={params.type === "past" ? true : false }
                to="#"
            />
        )}
    </div>
    );
    
}

export default Problems;