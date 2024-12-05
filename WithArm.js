import { useState } from "react"

function Army(Men, identifier){
    
    function NewMen(props){
        
        const [shots, setShots] = useState(0)
        function incrementShots(){
            setShots(shots+1)
        }   
        return <Men identifier = {identifier} shots = {shots} incrementShots = {incrementShots} {...props} />
    }
    return NewMen
}

export default Army
