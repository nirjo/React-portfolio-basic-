import React from 'react';
import './App.css';
 import Header from './components/header/Header'
 import Home from './components/home/Home'
//  import Site from './components/site/site';
function App() {
  return (
    <div className="App">
     {/* <Site />  */}
         <Header />   
         <Home />
    </div>
  );
}

export default App;
