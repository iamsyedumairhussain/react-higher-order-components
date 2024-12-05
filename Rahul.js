import WithArm from './WithArm'
function Rahul({shots, incrementShots, identifier, dept}) {
    return (
        <div>
            <h1>Rahul : {shots}</h1>
            <h1>dept : {dept}</h1>
            <h1>identifier : {identifier}</h1>
            <button onClick={incrementShots}>Shot </button>
        </div>
    )
}
export default WithArm(Rahul, 'rahul')
