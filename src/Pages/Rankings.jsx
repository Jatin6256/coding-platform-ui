import React from "react"
import NavBar from "../compnents/NavBar";
import RankingCard from "../compnents/RankingCard";

function Rankings(params) {
    return (
        <div>
            <NavBar />
            <RankingCard />
            <RankingCard />
            <RankingCard />
            <RankingCard />
        </div>
    );
}

export default Rankings;