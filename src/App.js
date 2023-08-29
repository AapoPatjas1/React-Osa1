import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const Nimi = (event) => { 
    setNewName(event.target.value);
  };

  
  const addPerson = (event) => {
    event.preventDefault();
    const personExists = persons.some(person => person.name === newName);

    if (personExists) {
      alert(`${newName} is already in the phonebook.`);
    } else {
      const newPerson = { name: newName };
      setPersons([...persons, newPerson]);
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Puhelinkirja</h2>
      <form onSubmit={addPerson}>
      <div>
      nimi: <input value={newName} onChange={Nimi} />
     </div>
   <div>
     <button type="submit">Lisää</button>
   </div>
    </form>
 <h2>Numerot</h2>
     <ul>
    {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )

}

export default App  