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
  return (
    <div>{props.osa.parts.map(part => <Part nimi={part.name} harjoitukset={part.exercises} />)}</div>
  );
};

const Total = (props) => {
  return (
    <h4>Harjoitusten määrä {props.osa.parts.reduce((total, part) => total + part.exercises, 0)}</h4>
  );
};

const Course = (props) => {
  return (
    <div>
      {
        props.course.map(osa =>
          <div key={osa.id}>
            <Header otsikko={osa.name} />
            <Content osa={osa} />
            <Total osa={osa} />
          </div>
        )
      }
    </div>
  );
};

export default Course;
