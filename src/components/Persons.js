import React from "react"
import phonebook from "../services/phonebook"
const confirmDelete = (name,id, deleteFunc, target) => {
    let result = window.confirm(`Delete ${name}`)
    if (result) {
        phonebook.deleteInfo(id).then(deleting => deleteFunc(target.filter(info => info.id !== id)))
    }
    
  }

const Persons = ({persons, filterName, nameContain, setPersons}) => {
    let newList = persons
    if(filterName!=='') newList=persons.filter(person => nameContain.test(person.name))
    return(newList.map(list => <div key={list.id}>{list.name} {list.number}<button onClick={() => confirmDelete(list.name,list.id, setPersons, persons)}>delete</button></div>))
   }
export default Persons