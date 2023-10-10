import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    // Add more initial persons if needed
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query

  const Nimi = (event) => {
    setNewName(event.target.value);
  };

  const Numero = (event) => {
    setNewNumber(event.target.value);
  };

  const lisäähenkilö = (event) => {
    event.preventDefault();
    const personExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLocaleLowerCase()
    );
    const personAxists = persons.some(
      (persons) => persons.number.toLowerCase() === newNumber.toLocaleLowerCase()
    );

    if (personAxists) {
      alert(`${newNumber} is already in the phonebook.`);
    } else if (personExists) {
      alert(`${newName} is already in the phonebook.`);
    } else {
      const newPerson = { id: persons.length + 1, name: newName, number: newNumber };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Puhelinkirja</h2>
      <div>
        Hae: <input value={searchQuery} onChange={handleSearchChange} />
      </div>
      <h2>Lisää kirja</h2>
      <form onSubmit={lisäähenkilö}>
        <div>
          nimi: <input value={newName} onChange={Nimi} />
        </div>
        <div>
          numero: <input value={newNumber} onChange={Numero} />
        </div>
        <div>
          <button type="submit">Lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      {filteredPersons.map((person, index) => (
        <div key={index}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
