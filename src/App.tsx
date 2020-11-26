import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <header className="Header"><h1 className="HeaderText">No Context Pics</h1></header>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
