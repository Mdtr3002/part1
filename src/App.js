import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ResultNations from './components/resultNations'
const App = () => {
  const [nations, setNations] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() =>
  axios.get('https://restcountries.com/v3.1/all')
  .then(response => setNations(response.data))
  ,[])
  const handleSearch = (event) => setSearch(event.target.value)
  return (
    <div>
    find countries<input  value={search} onChange={handleSearch}/>
    <ResultNations search={search} nations={nations} setSearch={setSearch}/>
    </div>
  )
}  
export default App