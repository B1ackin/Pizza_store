import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {HomePage} from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import {Cart} from "./pages/Cart";
import {fetchPizzas} from "./redux/actions/pizzas";
import {useDispatch} from "react-redux";


function App() {

  return (
      <div className="wrapper">
          <Header />
        <div className="content">
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/cart' component={Cart} />
            </Switch>
        </div>
      </div>
  );
}

export default App;
