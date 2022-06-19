import React from 'react'
import styled from 'styled-components'
import Generation from './Generation'

function Encounter({hp, attack, type}) {

    const [gen, setAllInfo] = React.useState({
        genZ: ''
    })
    const [health, setHealth] = React.useState({})
    const [power, setPower] = React.useState({})
    const [moves, setTypes] = React.useState([])

    React.useEffect(() => {
        fetch(hp)
            .then((response) => response.json())
            .then((data) => {
            //   console.log(data)
            })
    }, [])

    React.useEffect(() => {
        fetch(attack)
            .then((response) => response.json())
            .then((data) => {
            //   console.log(data)
            })
    }, [])

    React.useEffect(() => {
        fetch(type)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              setTypes([
                  data.moves[0].name,
                  data.moves[1].name,
                  data.moves[2].name,
                  data.moves[3].name,
                  data.moves[4].name,
              ])
              setAllInfo({
                genZ: data.generation.url
              })
            })
    }, [])

    // console.log(gen.genZ)

  return (
    <Container>
        <Generation generation={gen.genZ}/>
        <p><span>Moves:</span> {moves[0]}, {moves[1]}, {moves[2]}, {moves[3]}, {moves[4]}</p>
    </Container>
  )
}

export default Encounter

const Container = styled.div`
    display: flex;
    gap: 5px;
`