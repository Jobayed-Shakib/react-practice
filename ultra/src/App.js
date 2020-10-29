import React, {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Country from './Componets/Country/Country';
import Cart from './Componets/cart/Cart';

function App() {
  const [contrise, setContrise] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>{
      setContrise(data);
      
   })
  }, [])
  const handleradded = (country)=>{
  const newCart = [...cart, country]
  setCart(newCart);
}
  return (
    <div className="App">
      <h1>added : {cart.length}</h1>
      <Cart cart={cart}></Cart>
      <ol>
        {
          contrise.map(country=><Country country={country} click={handleradded} key={country.alpha3Code}></Country>)
        }
      </ol>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
