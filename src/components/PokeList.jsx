import React from 'react'
import styled from 'styled-components'
import Species from './Species'
import Encounter from './Encounter'

function PokeList({ detail, key }) {

    const [expand, setExpand] = React.useState(false)
    const [pokemon, setPokemon] = React.useState({
        photo: '',
        height: '',
        weight: '',
        ability: '',
        id: '',
        specieUrl: '',
        hpUrl: '',
        attackUrl: '',
        types: '',
    })
    const [pokeData, setPokeData] = React.useState()
    const url = detail.url

    React.useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setPokemon({
                    photo: data.sprites.other.dream_world.front_default,
                    // photo: data.sprites.other.home.front_default,
                    height: data.height,
                    weight: data.weight,
                    ability: data.abilities[0].ability.name,
                    id: data.id,
                    specieUrl: data.species.url,
                    hpUrl: data.stats[0].stat.url,
                    attackUrl: data.stats[1].stat.url,
                    types: data.types[0].type.url
                })
                setPokeData(data)
            })
    }, [])

    // console.log(pokemon)

    const handleClick = () => {
        setExpand(prev => !prev)
    }
    // console.log(expand)
    return (
        <>
            {!expand && <Container onClick={handleClick}>
                <p>#{pokemon.id} {detail.name}</p>
                <img src={pokemon.photo} />
                <div>
                    <p>Ability: {pokemon.ability}</p>
                </div>
            </Container>}

            {expand && <BigContainer onClick={handleClick}>
                <h3>#{pokemon.id} {detail.name}</h3>
                <img src={pokemon.photo} />
                <div>
                    <Encounter hp={pokemon.hpUrl} attack={pokemon.attackUrl} type={pokemon.types}/>
                    <Species link={pokemon.specieUrl}/>
                </div>
                <div className='phy'>
                    <li>Height: {pokemon.height}</li>
                    <li>Weight: {pokemon.weight}</li>
                    <li>Ability: {pokemon.ability}</li>
                </div>
            </BigContainer>}
        </>
    )
}

export default PokeList

const Container = styled.div`
    height: 350px;
    background: lightsteelblue;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    :hover{
        box-shadow: 0 15px 15px gray;
        transition: 0.3s;
    }
    img{
        margin-left: 70px;
    }
`

const BigContainer = styled.div`
    height: 550px;
    width: 900px;
    position: fixed;
    margin-left: calc(100vw / 2 - 900px / 2 - 28px);
    background: lightcoral;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 0 1000px 100px rgb(205, 197, 197);
    border: 1px solid black;
    img{
        height: 40%;
        margin-left: 70px;
    }
`