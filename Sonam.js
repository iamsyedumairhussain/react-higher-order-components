import WithArm from './WithArm'

function Sonam({shots, incrementShots, identifier, dept}) {
    return (
        <div>
            <h1>Sonam : {shots}</h1>
            <h1>Department : {dept}</h1>
            <h1>identifier : {identifier}</h1>

            <button onClick={incrementShots}>Shot </button>
        </div>
    )
}
export default WithArm(Sonam, 'sonam')
