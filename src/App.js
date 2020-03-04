import React, { useState }                            from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

// IMPORT ASSETS
// import './css/App.css'

// IMPORT UTILITIES
import ProtectedRoute                                   from "./utilities/ProtectedRoute"

// IMPORT CONTEXTS
import GlobalContext                                    from "./context/GlobalConetext";
import UserContext                                      from "./context/UserContext";
import SessionContext                                   from "./context/SessionContext";
import QuoteContext                                     from "./context/QuoteContext";

// IMPORT INITIAL STATES
import User                                             from "./components/User/User";
import Quote                                            from "./components/Quote/Quote";

// IMPORT APP COMPONENTS
import Header                                           from "./components/Layout/Header";
import Footer                                           from "./components/Layout/Footer";
import Content                                          from "./components/Content/Content";
import UserAuth                                         from "./components/User/UserAuth";

function App() {

  let history                                           = useHistory();

  const [session, setSession]                           = useState(!!localStorage.getItem("token"));
  const [login, setLogin]                               = useState(User);
  const [quote, setQuote]                               = useState(Quote);

  return (
    <Router>
      <GlobalContext.Provider value={{history}}>
        <UserContext.Provider value={{ login, setLogin }}>
          <SessionContext.Provider value={{ session, setSession }}>
            <QuoteContext.Provider value={{ quote, setQuote }}>
              <div className="App">
                <Header />
                <main id="main-content" className="main-content">
                  <div className="container">
                    <Route exact path="/" component={Content} />
                    <Route
                      path="/user/login"
                      render={ props => <UserAuth{...props} role="login" />}
                    />
                    <Route
                      path="/user/register"
                      render={ props => <UserAuth{...props} role="register" />}
                    />
                  </div>
                </main>
                <Footer />
              </div>
            </QuoteContext.Provider>
          </SessionContext.Provider>
        </UserContext.Provider>
      </GlobalContext.Provider>
    </Router>
  );
}

export default App;
