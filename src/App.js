import React, { useState } from 'react';
const Statistics = (props) => {
  console.log(props);
  return(
    <div>
      <h2>Statistiikka</h2>
      <p>Yhteensä: {props.total}</p>
      <p>Keskiarvo: {props.average.toFixed(2)}</p>
      <p>Positiivisia: {props.positivePercentage.toFixed(2)} %</p>
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
  if (good == 0&&neutral == 0&&bad == 0) {
    return ( <div><h1>Unicafe Asiakaspalaute</h1>
    <button onClick={handleGoodClick}>Hyvä</button>
    <button onClick={handleNeutralClick}>Neutraali</button>
    <button onClick={handleBadClick}>Huono</button>
    <h1>Statistics</h1>
    <p>no feedback given</p>
    </div>
    )
  } else {
    return (
      <div>
        <h1>Unicafe Asiakaspalaute</h1>
        <button onClick={handleGoodClick}>Hyvä</button>
        <button onClick={handleNeutralClick}>Neutraali</button>
        <button onClick={handleBadClick}>Huono</button>
        
        <h2>Palautteet</h2>
        <p>Hyvä: {good}</p>
        <p>Neutraali: {neutral}</p>
        <p>Huono: {bad}</p>
  
        <Statistics 
        average={average}
        total={total}
        positivePercentage={positivePercentage}
        />
  
      </div>
    );
  }

  
};

export default App;