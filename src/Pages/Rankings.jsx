import React from "react"
import NavBar from "../compnents/NavBar";
import RankingCard from "../compnents/RankingCard";

function Rankings(params) {
    var registeredStudent = [

        {
            key:1,
            name: "Jatin Sachdeva",
            rollNumber: "CS19B1013",
            points: 100,
            imageUrl: "https://lh5.googleusercontent.com/-dBvoPg7zTx4/AAAAAAAAAAI/AAAAAAAAAEY/oV5vRxpVsb0/photo.jpg"
        },
        {
            key:2,
            name: "Kushagra Indurukhiya",
            rollNumber: "CS19B1017",
            points: 100,
            imageUrl: "https://lh5.googleusercontent.com/-dBvoPg7zTx4/AAAAAAAAAAI/AAAAAAAAAEY/oV5vRxpVsb0/photo.jpg"
        },
        {
            key:3,
            name: "Abhijeet Wankhade",
            rollNumber: "CS19B1028",
            points: 100,
            imageUrl: "https://lh5.googleusercontent.com/-dBvoPg7zTx4/AAAAAAAAAAI/AAAAAAAAAEY/oV5vRxpVsb0/photo.jpg"
        },
        {
            key:4,
            name: "Aditya Aggarwal",
            rollNumber: "CS19B1013",
            points: 100,
            imageUrl: "https://lh5.googleusercontent.com/-dBvoPg7zTx4/AAAAAAAAAAI/AAAAAAAAAEY/oV5vRxpVsb0/photo.jpg"
        }
    ];
    return (
        <div>
            <NavBar 
                id="1"
            />
            {registeredStudent.map( student => 
                <RankingCard
                    key={student.key}
                    name={student.name}
                    rollNumber={student.rollNumber}
                    points={student.points}
                    imageUrl={student.imageUrl}
                 /> 
            )}
        </div>
    );
}

export default Rankings;