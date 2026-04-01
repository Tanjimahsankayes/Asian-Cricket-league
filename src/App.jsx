import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/NavBar/Navbar";
import Player from "./Components/Player/Player";

const fetchPlayer = async () => {
  const res = await fetch("/Data.json");
  return res.json() ;
};

function App() {
  const playerPromis = fetchPlayer();
  const [coin, setCoin] = useState(10000);
  return (
    <>
      <div>
        <Navbar coin={coin} ></Navbar>
        <Banner></Banner>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Player playerPromis={playerPromis} setCoin={setCoin} coin ={coin} ></Player>
        </Suspense>
      </div>
    </>
  );
}
export default App;
