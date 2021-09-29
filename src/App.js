import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import Friends from "./Components/Friends/Friends";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Notfound from "./Components/Notfound/Notfound";
import Postdetails from "./Components/Postdetails/Postdetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/post/:postId">
            <Postdetails />
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetails></FriendDetails>
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
