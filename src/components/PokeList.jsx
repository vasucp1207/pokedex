import React from 'react'
import styled from 'styled-components'
import pokeColor from '../utils/pokeColor'

function PokeList({detail, key}) {

    const [pokemon, setPokemon] = React.useState({
        photo: '',
        height: '',
        weight: '',
        ability: '',
    })
    const url = detail.url

    React.useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setPokemon({
                    photo: data.sprites.other.dream_world.front_default,
                    // photo: data.sprites.other.home.front_default,
                    height: data.height,
                    weight: data.weight,
                    ability: data.abilities[0].ability.name,
                })
            })
    }, [])

  return (
    <Container style={{background: 'coral'}}>
        <p>{detail.name}</p>
        <img src={pokemon.photo}/>
        <div>
            {/* <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p> */}
            <p>Ability: {pokemon.ability}</p>
        </div>
    </Container>
  )
}

export default PokeList

const Container = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    img{
        margin-left: 70px;
    }
`