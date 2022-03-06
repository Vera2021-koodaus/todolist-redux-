import React, { Component } from 'react';
import Header from './comp/Header';
import List from './comp/List';
import Footer from './comp/Footer';


export default class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Todo App Redux</h1>
      <Header/> 
      <List/>
      <Footer/>
     </div>
    )
  }
}


