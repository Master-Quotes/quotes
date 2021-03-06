import React, { useState, useMemo  }                            from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Modal                                          from "react-modal"

// IMPORT ASSETS
// import './css/App.css'
import './assets/coreui/css/all.min.css'

// IMPORT UTILITIES
import ProtectedRoute                                   from "./utilities/ProtectedRoute"

// IMPORT CONTEXTS
import GlobalContext                                    from "./context/GlobalContext";
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
import UserDashboard                                    from "./components/User/UserDashboard";
import QuoteList                                        from "./components/Quote/QuoteList";
import QuoteAddForm                                     from "./components/Quote/QuoteAddForm";

Modal.setAppElement('#root');

function App() {

  // let history                                           = useHistory();

  // DEFINE STATES
  const [itemToggle, setItemToggle]                     = useState(0);
  const [modal, setModal]                               = useState(false);
  const [login, setLogin]                               = useState(User);
  const [session, setSession]                           = useState(!!localStorage.getItem("token"));
  const [quote, setQuote]                               = useState(Quote);
  const [quotes, setQuotes]                             = useState([]);

  const username                                        = localStorage.getItem("username");
  console.log("Username: ", username);

  return (
    <Router>
      <GlobalContext.Provider value={{itemToggle, setItemToggle, modal, setModal}}>
        <UserContext.Provider value={{ login, setLogin, username }}>
          <SessionContext.Provider value={{ session, setSession }}>
            <QuoteContext.Provider value={{ quote, setQuote, quotes, setQuotes }}>
              <div className="App">
                <Header />
                <main id="main-content" className="main-content">
                  <Route exact path="/" component={Content} />
                  <Route
                    path="/user/login"
                    render={ props => <UserAuth {...props} role="login" />}
                  />
                  <Route
                    path="/user/register"
                    render={ props => <UserAuth {...props} role="register" />}
                  />
                  <ProtectedRoute exact path="/user" component={UserDashboard} />
                  <ProtectedRoute exact path="/quotes" component={QuoteList} />
                  <Modal
                    isOpen={modal}
                    onRequestClose={() => setModal(false)}
                  >
                    <QuoteAddForm />
                  </Modal>
                </main>
                {/*<Footer />*/}
                {session ? (<Actions />) : (<></>)}
              </div>
            </QuoteContext.Provider>
          </SessionContext.Provider>
        </UserContext.Provider>
      </GlobalContext.Provider>
    </Router>
  );
}

export default App;
