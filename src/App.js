import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  const Nimi = (event) => { 
    setNewName(event.target.value);
  };

  const Numero = (event) => {
    setNewNumber(event.target.value);
  };

  
  const lisäähenkilö = (event) => {
    event.preventDefault();
    const personExists = persons.some(person => person.name.toLowerCase() === newName.toLocaleLowerCase());
    const personAxists = persons.some(persons => persons.number.toLowerCase === newNumber.toLocaleLowerCase());

    if (personAxists) {
      alert(`${newNumber} is already in the phonebook.`);
    } else {
      const newPersons = { id: persons.length + 1, name: newNumber, number: newNumber };
      setPersons([...persons, newPersons]);
      setNewName('');
      setNewNumber('')
    }

    if (personExists) {
      alert(`${newName} is already in the phonebook.`);
    } else {
      const newPerson = { id: persons.length + 1, name: newName, number: newNumber };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('')
    }
  };

  return (
    <div>
      <h2>Puhelinkirja</h2>
      <form onSubmit={lisäähenkilö}>
        <div>
          nimi: <input value={newName} onChange={Nimi} />
        </div>
        <div>
        numero: <input value={newNumber} onChange={Numero} /></div>
        <div>
          <button type="submit">Lisää</button>
        </div>
      </form>
    <h2>Numerot</h2>
    
    {
    persons.map((person, index) => (
      <div
      key={index}>{person.name} {person.number}
      </div>
    ))
    }
      
    </div>
  )

}
// window.alert(`${newName} is already added to phonebook`);
export default App  