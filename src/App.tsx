import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {HomePage} from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import {Cart} from "./pages/Cart";
import axios from "axios";
import {setPizzas} from "./redux/actions/pizzas";
import {useDispatch} from "react-redux";


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:3002/pizzas")
            .then(({data}) => {
                dispatch(setPizzas(data))
            })

    }, [])

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
