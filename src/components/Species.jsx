import React from 'react'

function Species({link}) {

    const [species, setSpecies] = React.useState({
      text: '',
      text1: '',
      text2: '',
      happines: '',
    })

    React.useEffect(() => {
        fetch(link)
            .then((response) => response.json())
            .then((data) => {
              // console.log(data)
                setSpecies({
                  text: data.flavor_text_entries[0].flavor_text,
                  text1: data.flavor_text_entries[2].flavor_text,
                  text2: data.flavor_text_entries[4].flavor_text,
                  happines: data.base_happiness
                })
            })
    }, [])

    // console.log(species)

  return (
    <div>
      <p>{species.text} {species.text1} {species.text2}</p>
    </div>
  )
}

export default Species