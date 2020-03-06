import React, { useState }                            from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

// IMPORT ASSETS
// import './css/App.css'
// import './assets/coreui/css/all.min.css'

// IMPORT UTILITIES
import ProtectedRoute                                   from "./utilities/ProtectedRoute"

// IMPORT CONTEXTS
// import GlobalContext                                    from "./context/GlobalContext";
import UserContext                                      from "./context/UserContext";
import SessionContext                                   from "./context/SessionContext";
import QuoteContext                                     from "./context/QuoteContext";

// IMPORT INITIAL STATES
import User                                             from "./components/User/User";
import Quote                                            from "./components/Quote/Quote";

// IMPORT APP COMPONENTS
import Header                                           from "./components/Layout/Header";
import Footer                                           from "./components/Layout/Footer";
import Actions                                          from "./components/Actions/Actions";
import Content                                          from "./components/Content/Content";
import UserAuth                                         from "./components/User/UserAuth";
import QuotesList                                       from "./components/Quote/QuoteList";
import QuoteAddForm                                     from "./components/Quote/QuoteAddForm";

function App() {

  // let history                                           = useHistory();

  const [session, setSession]                           = useState(!!localStorage.getItem("token"));
  const [login, setLogin]                               = useState(User);
  const [quote, setQuote]                               = useState(Quote);

  return (
    <Router>
      {/*<GlobalContext.Provider value={{history}}>*/}
        <UserContext.Provider value={{ login, setLogin }}>
          <SessionContext.Provider value={{ session, setSession }}>
            <QuoteContext.Provider value={{ quote, setQuote }}>
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
                  <ProtectedRoute exact path="/quotes" component={QuotesList} />
                  <ProtectedRoute exact path="/quotes/add" component={QuoteAddForm} />

                </main>
                {/*<Footer />*/}
                {session ? (<Actions />) : (" ")}
              </div>
            </QuoteContext.Provider>
          </SessionContext.Provider>
        </UserContext.Provider>
      {/*</GlobalContext.Provider>*/}
    </Router>
  );
}

export default App;
