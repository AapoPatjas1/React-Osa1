import { toBeDisabled } from '@testing-library/jest-dom/matchers';
import React, { useState } from 'react';
const Button = (props) =>{
  return (
    <button onClick={props.moi}>{props.text}</button>
    
  )
}
const StatisticLine = (props) =>{
return (
  <p>{props.text} {props.value}</p>

)

}
const Statistics = (props) => {
  return(
    <div>
      <StatisticLine text="all" value ={props.total} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positivePercentage} />
     </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positivePercentage = (good / total) * 100 || 0;
  // if (good == 0&&neutral == 0&&bad == 0) {
  //   return ( 
  //     <div>
  //       <h1>Unicafe Asiakaspalaute</h1>
  //       <Button text="Hyvä" moi={handleGoodClick}/>
  //       <Button text="Neutraali" moi={handleNeutralClick}/>
  //       <Button text="Huono" moi={handleBadClick}/>
  //       <h1>Statistics</h1>
  //       <p>no feedback given</p>
  //     </div>
  //   )
  // } else {

    return (
      <table>
        <thead>
          <tr>
            <th>
              <h1>give feedback</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            <Button text="Hyvä" moi={handleGoodClick}/>
            <Button text="Neutraali" moi={handleNeutralClick}/>
            <Button text="Huono" moi={handleBadClick}/>
            </td>
          </tr>
      
          
        <tr>
          <th>
            <h1>Statistiikka</h1>
          </th>
        </tr>        
        <tr>
          <td>
        <StatisticLine text="Hyvä" value={good} />
        <StatisticLine text="Neutraali" value={neutral} />
        <StatisticLine text="Huono" value={bad} />
        <Statistics 
          average={average}
          total={total}
          positivePercentage={positivePercentage}/>
              </td>
          </tr>
      </tbody>
      
      </table>
    );

  // }
};

export default App;