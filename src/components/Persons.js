import React from "react"
const Persons = ({persons, filterName, nameContain}) => {
    let newList = persons
    if(filterName!=='') newList=persons.filter(person => nameContain.test(person.name))
    return(newList.map(list => <div key={list.id}>{list.name} {list.number}</div>))
   }
export default Persons