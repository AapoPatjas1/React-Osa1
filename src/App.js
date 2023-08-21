import React, { useState } from 'react';

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

      <h2>Statistiikka</h2>
      <p>Yhteensä: {total}</p>
      <p>Keskiarvo: {average.toFixed(2)}</p>
      <p>Positiivisia: {positivePercentage.toFixed(2)} %</p>
    </div>
  );
};

export default App;