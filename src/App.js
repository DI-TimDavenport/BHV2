import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import GameProgressBar from "./Components/GamePages/Progress";
import NavBar from './Components/NavBar';
import Roadmap from "./Components/Roadmap";
import UtilityToken from "./Components/Token";
import Gameplay from "./Components/GamePages/Gameplay";
import GamePlanets from "./Components/GamePages/GamePlanets";
import GameCharacters from "./Components/GamePages/GameCharacter";
import GameLore from "./Components/GamePages/GameLore";
import Collections from "./Components/Collections";
import NotFound from "./Components/NotFound";
import TheTeam from "./Components/TheTeam";
import CollectionsGen0 from "./Components/Collections/CollectionsGen0";
import CollectionsSS from "./Components/Collections/CollectionsSS";
import Merch from "./Components/Merch/Merch";

function App() {
  return (
    <BrowserRouter>
      <div className="AppContainer">
        <div className="content-wrap">
          <div className="App">
            <NavBar />
            <div className="component-bg">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/collections/*" element={<Collections />} />
                <Route path="/collections/Gen0/*" element={<CollectionsGen0 />} />
                <Route path="/collections/SolSabers/*" element={<CollectionsSS />} />
                <Route path="/lore" element={<GameLore />} />
                <Route path="/characters" element={<GameCharacters />} />
                <Route path="/planets/*" element={<GamePlanets />} />
                <Route path="/gameplay" element={<Gameplay />} />
                <Route path="/progress" element={<GameProgressBar />} />
                <Route path="/staking" element={<Home />}  />
                <Route path="/token" element={<UtilityToken />} />
                <Route path="/merch" element={<Merch />} />
                <Route path="/merch/*" element={<Merch />} />
                <Route path="/team" element={<TheTeam />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
