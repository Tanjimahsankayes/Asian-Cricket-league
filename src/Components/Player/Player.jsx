import React, { use, useState } from "react";
import AvailblePlayers from "../AvailblePlayers/AvailblePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Player = ({ playerPromis, setCoin, coin }) => {
  const players = use(playerPromis);

  const [isSelected, setSelected] = useState("available");
  console.log("isSelected", isSelected);
  return (
    <div className="w-11/12 mx-auto my-20 ">
      <div className="flex justify-between items-center gap-4 mb-5 ">
        {isSelected === "available" ? (
          <h2 className="text-3xl font-bold">Available Players</h2>
        ) : (
          <h2 className="text-3xl font-bold">Selected Players (2/6) </h2>
        )}

        <div className="rounded-2xl">
          <button
            onClick={() => {
              setSelected("available");
            }}
            className={`${
              isSelected === "available" ? "bg-blue-500" : "bg-transparent"
            } 
                btn rounded-r-none rounded-l-xl cursor-pointer border border-blue-500`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setSelected("selected");
            }}
            className={`${
              isSelected === "selected" ? "bg-blue-500" : "bg-transparent"
            } 
                btn rounded-l-none rounded-r-xl cursor-pointer border border-blue-500`}
          >
            Selected
          </button>
        </div>
      </div>
      {isSelected === "available" ? (
        <AvailblePlayers players={players} setCoin={setCoin} coin={coin} ></AvailblePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
};

export default Player;
