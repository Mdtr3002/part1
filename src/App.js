import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/Persons'
import phoneBook from './services/phonebook'
import './index.css'
const NotificationBarName = ({name}) => {
    console.log('minh');
    return(
      <div className='notify'>Added {name}</div>
    )
  }
const NotificationBarNumber = ({name}) => {
  return(
    <div className='notify'>Change {name} number</div>
  )
}
const ErrorNotify = ({message}) => {
  return(
    <div className='error'>{message}</div>
  )
}
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName] = useState('')
  const [notification, setNotification] = useState({nameEntry: false, numberEntry: false, errorNotify: false})
  const [newEntry, setNewEntry] = useState('')
  const [message, setMessage] = useState('')
  useEffect(() => {
    phoneBook.getData().then(info =>
    setPersons(info)
    )
  }
    ,[])
  const nameCheck = persons.filter(person => person.name===newName)
  const handleNewPerson = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const addPerson = (event) => {
    event.preventDefault()
    const newPersonInfo = {
      name: newName,
      number: newNumber
    }
    if(nameCheck.length>0){
      let newNumber = window.confirm(`${newName} is already added to phonebook, replace old number with a new one`)
      if(newNumber) {
        phoneBook.updateNumber(nameCheck[0].id, newPersonInfo).then(updating => {
          setPersons(persons.map(number => (number.id !== nameCheck[0].id) ? number:updating))
          setNotification({...notification,numberEntry: !notification.numberEntry})
        })
        .catch(alreadyDelete => {
          setNotification({...notification, errorNotify: !notification.errorNotify})
          setMessage(`Information of '${newPersonInfo.name}' has already been removed from the server`)
          setTimeout(() => setMessage(null),5000)
          setPersons(persons.filter(n => n.id !== nameCheck[0].id))
          setTimeout(() => setNotification({...notification, errorNotify: false}),5000)
        })
        setNewEntry(newPersonInfo.name)
        setTimeout(() => setNotification({...notification, numberEntry: false}),5000)
      }
    } else {
    phoneBook.updateInfo(newPersonInfo).then(newInfo =>
    setPersons(persons.concat(newInfo)))
    setNewEntry(newPersonInfo.name)
    setNotification({...notification, nameEntry: !notification.nameEntry})
    setTimeout(() => setNotification({...notification, nameEntry: false}),5000)
  } 
  setNewName('')
  setNewNumber('')
  }
  const handleFilter = (event) => setFilterName(event.target.value)
  let nameContain = new RegExp(filterName,'i')
  return (
    <div>
      <h2>Phonebook</h2>
      {notification.errorNotify? <ErrorNotify message={message} />: <></>}
      {notification.nameEntry?  <NotificationBarName name={newEntry}/> : <></>}
      {notification.numberEntry? <NotificationBarNumber name={newEntry}/>: <></>}
      <Filter filterName={filterName} handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <form onSubmit={addPerson}>
        <PersonForm newName={newName} newNumber={newNumber} handleNewNumber={handleNewNumber} handleNewPerson={handleNewPerson} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <Persons persons={persons} nameContain={nameContain} filterName={filterName} setPersons={setPersons}/>
    </div>
  )
}

export default App