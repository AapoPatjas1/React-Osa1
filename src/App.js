import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Filter = ({ searchQuery, handleSearchChange }) => (
  <div>
    Search: <input value={searchQuery} onChange={handleSearchChange} />
  </div>
);

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
);

const Persons = ({ filteredPersons }) => (
  <div>
    {filteredPersons.map((person, index) => (
      <div key={index}>
        {person.name} {person.number}
      </div>
    ))}
  </div>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  }, []);
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addPerson = (event) => {
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

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>

      <h2>Phonebook</h2>

      <Filter searchQuery={searchQuery} handleSearchChange={handleSearchChange} />

      <h3>Add a new</h3>
      
      <PersonForm
        newName={newName}

        newNumber={newNumber}

        handleNameChange={handleNameChange}

        handleNumberChange={handleNumberChange}

        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
