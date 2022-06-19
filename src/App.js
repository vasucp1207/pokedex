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
  display: flex;
  gap: 10px;
  margin-left: 18px;
  align-items: center;
  img{
    height: 50px;
    width: 50px;
  }
`
