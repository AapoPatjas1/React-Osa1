import React from 'react';

const Header = ({ otsikko }) => {
  return <h1>{otsikko}</h1>;
};

const Part = ({ lol, kukka }) => {
  return (
    <p>
      {lol} - {kukka} exercises
    </p>
  );
};

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part lol={part1.name} kukka={part1.exercises} />
      <Part lol={part2.name} kukka={part2.exercises} />
      <Part lol={part3.name} kukka={part3.exercises} />
    </div>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {totalExercises}</p>;
};

const Course = (props) => {
  return (
    <div>
      <Header otsikko={props.course.name} />
      <Content
        part1={props.course.parts[0]}
        part2={props.course.parts[1]}
        part3={props.course.parts[2]}
      />
      <Total parts={props.course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
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
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App; 