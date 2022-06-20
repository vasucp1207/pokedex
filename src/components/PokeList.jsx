import React from 'react'
import styled from 'styled-components'
import Species from './Species'
import Encounter from './Encounter'
import CloseIcon from '@mui/icons-material/Close';

function PokeList({ detail, key }) {

    const [expand, setExpand] = React.useState(false)
    const [pokemon, setPokemon] = React.useState({
        photo: '',
        photo1: '',
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
                    photo1: data.sprites.other.home.front_default,
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
                <h4>#{pokemon.id} {detail.name}</h4>
                <img src={pokemon.photo} />
                <div>
                    <h4>Ability: <span>{pokemon.ability}</span></h4>
                </div>
            </Container>}

            {expand && <BigContainer show={expand}>
                <div className='top'>
                    <h3>#{pokemon.id} {detail.name}</h3>
                    <CloseIcon onClick={handleClick} />
                </div>
                <img src={pokemon.photo1} />
                {/* <img src={pokemon.photo1} /> */}
                <div>
                    <Species link={pokemon.specieUrl}/>
                </div>
                <div className='phy'>
                    <Encounter hp={pokemon.hpUrl} attack={pokemon.attackUrl} type={pokemon.types}/>
                    <li>Height: <span>{pokemon.height}</span></li>
                    <li>Weight: <span>{pokemon.weight}</span></li>
                    <li>Ability: <span>{pokemon.ability}</span></li>
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
    border: 1px solid gray;
    :hover{
        box-shadow: 0 15px 15px gray;
        transition: 0.3s;
    }
    img{
        margin-left: 70px;
    }
    span{
        font-weight: lighter;
    }
`

const BigContainer = styled.div`
    height: 450px;
    width: 730px;
    position: fixed;
    margin-left: calc(100vw / 2 - 700px / 2 - 28px);
    background: lightgray;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border-radius: 10px; */
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 0 1000px 100px rgb(205, 197, 197);
    border: 2px solid black;
    /* transform: ${props => props.show ? 'translateX(20%)' : 'translateX(100%)'}; */
    img{
        width: 30%;
        height: auto;
        margin-left: 250px;
    }
    li{
        list-style: none;
        font-weight: bold;
    }
    span{
        font-weight: lighter;
    }
    .top{
        display: flex;
        justify-content: space-between;
    }
`