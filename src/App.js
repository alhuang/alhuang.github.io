import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Goshen from "./components/pages/Goshen";
import Netflix from "./components/pages/Netflix";
import Peregrine from "./components/pages/Peregrine";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/goshen" exact component={Goshen} />
          <Route path="/netflix" exact component={Netflix} />
          <Route path="/peregrine" exact component={Peregrine} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
