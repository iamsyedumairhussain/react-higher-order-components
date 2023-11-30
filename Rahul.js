import React from 'react'
import Army from './Army'

const Rahul = ({shot,setShot,name}) => {
  return (
    <div>Rahul {shot} {name}
    <button onClick={setShot}>Goo</button>
    </div>
  )
}

export default Army(Rahul,600)