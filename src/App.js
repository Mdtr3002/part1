import React, { useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/Persons'
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName] = useState('')
  const nameCheck = persons.filter(person => person.name===newName)
  const handleNewPerson = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const addPerson = (event) => {
    event.preventDefault()
    const newPersonInfo = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }
    if(nameCheck.length>0){
      alert(`${newName} is already added to phonebook`)
    } else {
    setPersons(persons.concat(newPersonInfo))
    setNewName('')
    setNewNumber('')
    }
  }
  const handleFilter = (event) => setFilterName(event.target.value)
  let nameContain = new RegExp(filterName,'i')
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <form onSubmit={addPerson}>
        <PersonForm newName={newName} newNumber={newNumber} handleNewNumber={handleNewNumber} handleNewPerson={handleNewPerson} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <Persons persons={persons} nameContain={nameContain} filterName={filterName} />
    </div>
  )
}

export default App