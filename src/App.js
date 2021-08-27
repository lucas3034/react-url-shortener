import react, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { func } from 'prop-types';
function Sum(props) {
  return(
    <p>
      {props.n1}+{props.n2}={props.n1+props.n2}
    </p>
  );
}

function App() {
  const[n1, setN1]=useState(1);
  const[n2, setN2]=useState(2);
  async function getLinks(){
    try {
      const{data}=await axios.get('https://jp-go-url-shortener.herokuapp.com/links?limit=10&skip=0');
      console.log(data);
    }catch(err){
      console.log('error');    
    }
  }
  getLinks(); 
  
  function handleClick(btn){
    if(btn===1){
      setN1(n1+1)
    }
    else if(btn===2){
      setN2(n2+1)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Sum n1={n1} n2={n2} /> 
        <p>
          Edite <code>o arquivo</code> e salve para carregar.
        </p>
        <button onClick={()=>handleClick(1)}>
          increament n1
        </button>
        <button onClick={()=>handleClick(2)}>
          increament n2
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React XD
        </a>
      </header>
    </div>
  );
}

export default App;
