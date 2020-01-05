import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { useRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        {useRoutes(true)}
      </div>
    </Router>
  );
}

export default App;
