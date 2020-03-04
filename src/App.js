import React, { useState }                from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// IMPORT ASSETS
// import './css/App.css'

// IMPORT UTILITIES
import ProtectedRoute                     from "./utilities/ProtectedRoute"

// IMPORT CONTEXTS
import LoggedContext                      from "./context/LoggedContext";

// IMPORT APP COMPONENTS
import Header                             from "./components/Layout/Header";
import Footer                             from "./components/Layout/Footer";
import QuoteItem                          from "./components/Quote/Quote";


function App() {

  const [logged, setLogged]                = useState( localStorage.getItem("token") );

  return (
    <Router>
      <LoggedContext.Provider value={{ logged, setLogged }}>
        <div className="App">
          <Header />
          <main>

          </main>
          <Footer />
        </div>
      </LoggedContext.Provider>
    </Router>
  );
}

export default App;
