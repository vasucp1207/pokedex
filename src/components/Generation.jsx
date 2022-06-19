import React from 'react'

function Generation({generation}) {

    const [genDetail, setDetail] = React.useState({})

    React.useEffect(() => {
        fetch(generation)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              setDetail(data)
            })
    }, [])

    console.log(genDetail)

  return (
    <div>

    </div>
  )
}

export default Generation