import './App.css';
import {useState} from 'react';
import Props from './components/Props';

function App() {
    const[name,setName]=useState("Adarsh");
  return (
    <div className="App">
        <Props username={name}/>
    </div>
  );
}

export default App;