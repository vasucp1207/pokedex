import './App.css';
import Main from './components/Main';
import { Routes, Route, Link } from 'react-router-dom'
import PokeDetail from './components/PokeDetail';
import pokeball from './assets/pokeball.png'
import styled from 'styled-components';

function App() {
  return (
    <div className="app">
      <Header>
        <img src={pokeball}/>
        <h1>Pokedex</h1>
        {/* <input type='text' placeholder='Search Pokemon'/> */}
      </Header>

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/details" element={<PokeDetail />} />
      </Routes>
    </div>
  );
}

export default App;

const Header = styled.div`
  background-color: #3f51b5;
  height: 80px;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 50px;
  h1{
    color: white;
  }
  img{
    margin-left: 20px;
    height: 50px;
    width: 50px;
  }
  input{
    background-color: lightsteelblue;
    width: 240px;
    height: 40px;
    margin-left: auto;
    margin-right: 25px;
    border: none;
    border-radius: 5px;
    text-indent: 5px;
  }
`
