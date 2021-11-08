import React from "react";
import { CustomHooks } from "./CustomHooks";
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import { ContextoPrueba } from "./ContextoPrueba";
import { Menu } from "./components/Menu";

const App = () => {
  return (<>

    <Router>
      <Menu />
      <Routes >
        
        <Route path="/" element={<CustomHooks />} />
        <Route path="/contexto" element={<ContextoPrueba />} />
        
      </Routes>
    </Router>
    
  </>);
}

export default App;
