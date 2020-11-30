import React, {useEffect} from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';


function App() {
  useEffect(() => {
    console.log('App mounted...');
  }, [])
  return (
    <div className="App">
      <header className="Header"><h1 className="HeaderText">No Context Pics</h1></header>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
