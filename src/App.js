import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { Navbar, Mtop } from "./components";
import {
  Home,
  Messanger,
  Explore,
  Auth,
  Profile,
  Notification,
  Search,
} from "./pages";

function App({ match }) {
  const [isloged, setlogin] = useState(true);
  const [location, setlocation] = useState(0);

  return (
    <>
      <div className="App">
        <Router basename="/Instagram-clone-reactjs">
          {" "}
          {isloged ? (
            <>
              <Mtop path_code={location} className="Mtop">
                {" "}
              </Mtop>{" "}
              <Navbar path_code={location} isLoged={() => setlogin(false)} />{" "}
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
                ></Route>{" "}
                <Route
                  path="/messanger"
                  component={() => (
                    <Messanger
                      path={() => {
                        setlocation(1);
                      }}
                    />
                  )}
                ></Route>{" "}
                <Route
                  path="/explore"
                  component={() => (
                    <Explore
                      path={() => {
                        setlocation(2);
                      }}
                    />
                  )}
                ></Route>{" "}
                <Route
                  path="/profile"
                  component={() => (
                    <Profile
                      path={() => {
                        setlocation(4);
                      }}
                    />
                  )}
                ></Route>{" "}
                <Route
                  path="/Notification"
                  component={() => (
                    <Notification
                      path={() => {
                        setlocation(3);
                      }}
                    />
                  )}
                ></Route>
                <Route
                  path="/Search"
                  component={() => (
                    <Search
                      path={() => {
                        setlocation(5);
                      }}
                    />
                  )}
                ></Route>
                {/*<Route exact path="/profile" component={Profile}></Route>*/}
              </Switch>
            </>
          ) : (
            <div>
              <Auth isLoged={() => setlogin(true)} />{" "}
            </div>
          )}{" "}
        </Router>{" "}
      </div>{" "}
    </>
  );
}

export default App;
