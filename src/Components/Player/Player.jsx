import React, { use } from "react";
import AvailblePlayers from "../AvailblePlayers/AvailblePlayers";



const Player = ({ playerPromis }) => {
    console.log(playerPromis)
    const players = use(playerPromis);
    console.log(players);
  return (
    <div className="w-11/12 mx-auto" >
      <h1> Players : {players.length} </h1>
      <AvailblePlayers players={players} ></AvailblePlayers>
    </div>
  );
};

export default Player;
