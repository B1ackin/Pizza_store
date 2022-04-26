import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {HomePage} from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import {Cart} from "./pages/Cart";
import axios from "axios";


function App() {


    useEffect(() => {
        axios.get("http://localhost:3000/db.json")
            .then(({data}) => {
                setPizzas(data.pizzas)
            })
    }, [])



  return (
      <div className="wrapper">
          <Header />
        <div className="content">
            <Switch>
                <Route exact path='/' render={() => <HomePage items={pizzas}/>} />
                <Route path='/cart' component={Cart} />
            </Switch>
        </div>
      </div>
  );
}

export default App;
