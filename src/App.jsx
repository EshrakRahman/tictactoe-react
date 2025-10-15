import Player from "./components/Player";

function App() {
  return (
    <main>
      <div className="" id="game-container">
        <ol id="players">
           <Player initialName="player one" symbol="X" />
           <Player initialName="player two" symbol="O"/>
            
          
        </ol>
        Game Board
      </div>
      Log
    </main>
  );
}

export default App;
