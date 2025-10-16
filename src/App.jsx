import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import {useState} from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSquareSelect() {
    setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X");
  }
  return (
    <main>
      <div className="" id="game-container">
        <ol id="players" className="highlight-player">
           <Player initialName="player one" symbol="X" isActive={activePlayer === "X"}/>
           <Player initialName="player two" symbol="O" isActive={activePlayer === "O"}/>
            
          
        </ol>
        <GameBoard onSelectSquare={handleSquareSelect} activePlayerSymbol={activePlayer}/>
      </div>
      Log
    </main>
  );
}

export default App;
