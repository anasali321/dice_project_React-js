import React, { useState } from "react";
import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";

const App = () => {
  const [start, setStart] = useState(false);
  const togglePlay = () => {
    setStart(<PlayGame />);
  };

  return <>{start ? <PlayGame /> : <StartGame toggle={togglePlay} />}</>;
};

export default App;
