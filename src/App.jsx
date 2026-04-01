import { Suspense } from "react";
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
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Player playerPromis={playerPromis}></Player>
        </Suspense>
      </div>
    </>
  );
}
export default App;
