import React from "react";
import PlayersCard from "../PlayarsCard/PlayersCard";

const AvailblePlayers = ({ players, setCoin, coin }) => {
  return (
    <div className="container mx-auto">
      <PlayersCard players={players} setCoin={setCoin} coin={coin}></PlayersCard>
    </div>
  );
};

export default AvailblePlayers;
