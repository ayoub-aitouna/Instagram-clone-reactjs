import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components";
import { Home, Messanger, Explore, Auth, Profile } from "./pages";

function App({ match }) {
  const [isloged, setlogin] = useState(true);
  const [location, setlocation] = useState(0);

  return (
    <>
      <div className="App">
        <Router>
          {isloged ? (
            <>
              <Navbar path_code={location} isLoged={() => setlogin(false)} />
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Home
                      path={() => {
                        setlocation(0);
                      }}
                    />
                  )}
                ></Route>
                <Route
                  path="/messanger"
                  component={() => (
                    <Messanger
                      path={() => {
                        setlocation(1);
                      }}
                    />
                  )}
                ></Route>
                <Route
                  path="/explore"
                  component={() => (
                    <Explore
                      path={() => {
                        setlocation(2);
                      }}
                    />
                  )}
                ></Route>
                <Route exact path="/profile" component={Profile}></Route>
              </Switch>
            </>
          ) : (
            <div>
              <Auth isLoged={() => setlogin(true)} />
            </div>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
