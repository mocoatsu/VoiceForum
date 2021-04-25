import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './scss/index.scss';
import { Navbar } from "./components/organisms/Navbar/index";
import { PostMessage } from "./components/pages/PostMessage";
import { MessagesList } from "./components/pages/MessagesList";

export function App(): JSX.Element {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        {/* <Route path="/">
          <MessagesList></MessagesList>
        </Route> */}
        <Route path="/">
          <PostMessage></PostMessage>
        </Route>
      </Switch>
    </Router>
  );
}

window.onload = () => {
  if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
  }
};