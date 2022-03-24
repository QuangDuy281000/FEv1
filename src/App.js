import "./App.css";
import TestCPN from "./component/TestCPN";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import Profile from "./component/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/employee" component={TestCPN}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/profile" component={Profile}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
