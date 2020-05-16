import React from "react";
import PizzaForm from "./components/PizzaForm.js"
import { Route, Link } from "react-router-dom"

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order Here</Link>
      </nav>
      <Route exact path="/" component={App}/>
      <Route path="/pizza" component={PizzaForm} />
    </div>
  );
};
export default App;
