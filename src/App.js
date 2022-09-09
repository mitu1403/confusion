import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'; 
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';  

function App() {
  return (
    <div>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES}/>
    </div>
  );
  
}

export default App;
