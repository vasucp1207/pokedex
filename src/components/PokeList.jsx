import React from 'react'
import styled from 'styled-components'
import pokeColor from '../utils/pokeColor'

function PokeList({detail, key}) {

    const [pokemonImg, setPokemonImg] = React.useState('')
    const url = detail.url

    React.useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setPokemonImg(data.sprites.front_default)
            })
    }, [])
    console.log(pokeColor)

  return (
    <Container>
        <p>{detail.name}</p>
        <img src={pokemonImg}/>
    </Container>
  )
}

export default PokeList

const Container = styled.div`
    
    background: lightblue;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
`