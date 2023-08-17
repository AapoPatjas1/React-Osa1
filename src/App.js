const Header = (props) => {
  return <h1> {props.otsikko} </h1>
}

const Part = (props) => {
  console.log(props)
  return <p> {props.lol} {props.kukka} </p>
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part lol={ props.part1.name } kukka={props.part1.exercises} />
      <Part lol={ props.part2.name } kukka={props.part2.exercises}/>
      <Part lol={ props.part3.name } kukka={props.part3.exercises}/>
    </div>
  )
}


const Total = (props) => {
  console.log(props)
 return <p>Number of exercises {props.exercises1.exercises + props.exercises2.exercises + props.exercises3.exercises}</p>
}

const olionNimi = {
    nimi: "sisältö"
}
console.log(olionNimi.nimi)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header otsikko={course.name} />
      <Content 
      part1={course.parts[0]}
      part2={course.parts[1]}
      part3={course.parts[2]}
      />
      <Total 
      exercises1={course.parts[0]}
      exercises2={course.parts[1]}
      exercises3={course.parts[2]}
      />
    </div>
  )
}

export default App