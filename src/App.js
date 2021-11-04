import "./App.css";
import AddForm from "./components/AddForm";
import FilmList from "./components/FilmList";
import RouteForm from "./components/RouteForm";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <div>
        <RouteForm />
      </div>
      <Switch>
        <Route path="/" exact component={FilmList}></Route>
        <Route path="/AddForm" exact component={AddForm}></Route>
        <Route path="/FilmList" exact component={FilmList}></Route>
      </Switch>
    </div>
  );
}

export default App;
