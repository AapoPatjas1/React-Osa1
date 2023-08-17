const Header = (props) => {
  return <h1> {props.otsikko} </h1>
}



const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
      {props.part1} {props.sigmaballs}
    </p>
    <p>
      {props.part2} {props.juhanishorman}
    </p>
    <p>
      {props.part3} {props.poopypant}
    </p>
    </div>
  )
}

const Total = (props) => {
 return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
}

const App = () => {
  const otsikonTeksti = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header otsikko={otsikonTeksti} />
      <Content 
      part1={part1}
      part2={part2}
      part3={part3}
      sigmaballs={exercises1}
      juhanishorman={exercises2}
      poopypant={exercises3}
      />
      <Total 
      exercises1={exercises1}
      exercises2={exercises2}
      exercises3={exercises3}
      />
    </div>
  )
}

export default App