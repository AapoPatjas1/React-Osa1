import React from 'react';

const Header = ({ otsikko }) => {
  return <h1>{otsikko}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.nimi + " " + props.harjoitukset}
    </p>
  );
};

const Content = (props) => {
  return(
    <div>
      {props.course.map(part => <Part nimi={part.name} harjoitukset={part.exercises} />)}
    </div>
  )
} 

const Total = (props) => {
  console.log(props)
  return (
	<p>Number of exercises {props.course.parts.reduce((total, part) => total + part.exercises, 0)}</p>
	)
}

const Course = (props) => {
  return (
    <div>
      <Header otsikko={props.course.name} />
      {/* <Content course={props.course}/> */}
      <Total course={props.course} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses} />
    </div>
  );
};

export default App; 