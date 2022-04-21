import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {HomePage} from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import {Cart} from "./pages/Cart";


function App() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/db.json")
            .then((res) => res.json())
            .then(json => {
                setPizzas(json.pizzas)
            })
    })



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
