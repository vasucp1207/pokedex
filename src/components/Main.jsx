import React from 'react'
import styled from 'styled-components'
import PokeList from './PokeList'
import {Link} from 'react-router-dom'

function Main() {

    const [pokemonData, setPokemonData] = React.useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=70'

    React.useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setPokemonData(data.results)
            })
    }, [])
    // console.log(pokemonData)
{/* <Link to='/details'><PokeList key={i} detail={pokemon} /></Link> */}

    return (
        <Container>   
            {pokemonData.map((pokemon, i) => (
                <PokeList key={i} detail={pokemon}/>
            ))}
        </Container>
    )
}

export default Main

const Container = styled.div`
    .card{
        
    }
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    padding: 20px;
    a{
        text-decoration: none;
        color: black;
    }
`