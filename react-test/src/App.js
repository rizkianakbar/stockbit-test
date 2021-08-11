import React from "react";
import Header from "./components/Headers";
import Movie from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const Detail = () => {
  let { id } = useParams();
  return <MovieDetails id={id} />;
};

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Movie} />
          <Route path="/movie/:id" exact component={Detail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
