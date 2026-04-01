import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";

const PlayersCard = ({ players, setCoin , coin }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {players.map((players) => {
          const [isSelectedPlayer, setSelectedPlayers] = useState(false);

          const handleChosePlayer = () => {
            alert(`${players.playerName}`)
            setSelectedPlayers(true);
            ( coin - players.playerPrice );
                    }
          return (
            <div className="card bg-base-100 shadow-sm mt-5 border border-gray-500">
              <figure>
                <img src={players.playerImage} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  <FaUser /> {players.playerName}
                </h2>
                <div className="flex justify-between gap-2 items-center ">
                  <div className="flex gap-2 items-center ">
                    <IoFlagSharp />
                    <p className="font-bold"> {players.playerCountry} </p>
                  </div>

                  <button className="btn btn-ghost">
                    {" "}
                    {players.playerType}{" "}
                  </button>
                </div>
                <div className="divider"></div>

                <h2 className="font-bold"> Ratting : ({players.ratting})</h2>

                <div className="flex justify-between gap-4  items-center ">
                  <p> {players.battingStyle} </p>
                  <p className="text-right"> {players.bowlingStyle} </p>
                </div>
                <div className="card-actions justify-between gap-4 items-center">
                  <p className="font-semibold ">
                    Price : {players.playerPrice}{" "}
                  </p>
                  <button
                    className="btn"
                    onClick={handleChosePlayer}
                    disabled={isSelectedPlayer}
                  >
                    {isSelectedPlayer ? "Selected" : "Choose Player"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayersCard;