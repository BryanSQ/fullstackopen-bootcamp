import { useState, useEffect } from 'react'
import personService from './services/phonebook'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState({message: null, type: 'noti'})

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  const addPerson = (event) => {
    event.preventDefault()
    const personToAdd = {
      name: newName,
      number: newNumber
    }

    const personExist = persons.find((p) => p.name === newName)

    if (!personExist){
      personService.create(personToAdd)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNotification({
            message: `Added ${returnedPerson.name}`,
            type: 'noti'
          })
          setTimeout(() => {
            setNotification({message: null, type: 'noti'})
          }, 5000)
        })
    }
    else{
      const edit = confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)
      if (edit) {
        personService.update(personExist.id, personToAdd)
          .then(returnedPerson => {
            setPersons(persons.map( person => person.id !== personExist.id ? person : returnedPerson))
            setNotification({
              message: `Edited ${returnedPerson.name}`,
              type: 'noti'
            })
            setTimeout(() => {
              setNotification({message: null, type: 'noti'})
            }, 5000)
          })
      }else{
        return
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleDelete = person => {
    const confirmation = confirm(`Delete ${person.name}?`)
    if (confirmation){
      personService.deletePerson(person.id)
        .then(() => {
          const newData = persons.filter( p => p !== person)
          setPersons(newData)
        })
        .catch(() => {
          setNotification({
            message: `Information of ${person.name} has already been removed from the server`,
            type: 'error'
          })
          setTimeout(() => {
            setNotification({message: null, type: 'noti'})
          }, 5000)
        })
    }
    else{
      return
    }
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} type={notification.type} />
      <Filter onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        onPersonSubmit={addPerson}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} onDelete={handleDelete}/>
    </div>
  )
}

export default App