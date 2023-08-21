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
    </div>
  );
};

export default App;