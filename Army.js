import React, { useState } from 'react'

const Army = (Men,num) => {
    const NewMan = ({name}) => {
        const [shot, setShot] = useState(0)
        return <Men name = {name}  shot={shot} setShot={()=>setShot(shot+num)} />
    }
    return NewMan
}

export default Army