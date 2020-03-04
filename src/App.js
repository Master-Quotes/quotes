import React, { useState }                from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// IMPORT ASSETS
// import './css/App.css'

// IMPORT UTILITIES
import ProtectedRoute                     from "./utilities/ProtectedRoute"

// IMPORT CONTEXTS
import UserContext                        from "./context/UserContext";
import SessionContext                      from "./context/SessionContext";

// IMPORT INITIAL STATES
import User                               from "./components/User/User";
// IMPORT APP COMPONENTS
import Header                             from "./components/Layout/Header";
import Footer                             from "./components/Layout/Footer";
import Content                            from "./components/Content/Content";
import UserAuth                           from "./components/User/UserAuth";
import QuoteItem                          from "./components/Quote/Quote";



function App() {

  const [session, setSession]              = useState(!!localStorage.getItem("token"));
  const [login, setLogin]                  = useState(User);

  return (
    <Router>
      <UserContext.Provider value={{ login, setLogin }}>
        <SessionContext.Provider value={{ session, setSession }}>
          <div className="App">
            <Header />
            <main id="main-content" className="main-content">
              <Route exact path="/" component={Content} />
              <Route
                path="/user/login"
                render={ props => <UserAuth{...props} role="login" />}
              />
              <Route
                path="/user/register"
                render={ props => <UserAuth{...props} role="register" />}
              />
            </main>
            <Footer />
          </div>
        </SessionContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
