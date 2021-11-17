import React from "react";
const PersonForm = ({newName, newNumber, handleNewNumber, handleNewPerson}) => 
<div>
name: <input value={newName} onChange={handleNewPerson}/><br/>
number: <input value={newNumber} onChange={handleNewNumber}/>
</div>
export default PersonForm