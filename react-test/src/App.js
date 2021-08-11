import React from "react";
import Header from "./components/Headers";
import Movie from "./components/Movies";
import MovieDetails from "./components/Movies/MovieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Movie} />
          <Route path="/movie/:movieID" exact component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
