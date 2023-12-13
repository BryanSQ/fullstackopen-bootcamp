import { useState, useEffect } from 'react'

import countriesService from './services/countries'

import Filter from './components/Filter'
import Info from './components/Info'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesService.getCountries()
      .then(returnedCountries => {
        setCountries(returnedCountries)
      })
  },[])

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  const countriesToShow = filter === ''
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(filter))


  return (
    <>
      <div>
        <Filter handleChange={handleFilterChange}/>
      </div>
      <div>
        <Info countries={countriesToShow} />
      </div>
    </>
  )
}

export default App
