import React, { useEffect, useState } from 'react'
import getAbility from '../../Services/getServices'


function AbilityCard() {
    const [abilities, setAbilities] = useState([])

    useEffect(()=>{
        getAbilities()
    },[])

    
    const getAbilities= async() => {
        const pokemon = await getAbility()
        console.log(pokemon)
        setAbilities(pokemon.results)
    }

    const displayAbilities = () => {
       return abilities.map(ability => {
        return (
            <h4>
                {ability.name}
            </h4>
        )
      })
    }

  return (
    <div>{displayAbilities()}</div>
  )
}

export default AbilityCard