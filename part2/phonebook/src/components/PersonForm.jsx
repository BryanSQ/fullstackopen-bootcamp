const PersonForm = ({ name, number, onPersonSubmit, onNameChange, onNumberChange }) => {
  return(
    <>
      <form onSubmit={onPersonSubmit}>
        <div>
          name: <input value={name} onChange={onNameChange}/>
        </div>
        <div>
          number: <input value={number} onChange={onNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm