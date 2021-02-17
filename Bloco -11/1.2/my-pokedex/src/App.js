import './App.css';
import Pokedex from './Pokedex'
import data from './data'

function App() {
  return (
    <div className='App'>
      <Pokedex pokemon ={data[0]}/>
    </div>
  );
}

export default data;
