const Persons = ({ persons, onDelete }) => {

  return (
    <>
      {
        persons.map(p => 
          <div key={p.id}>
            <p>{p.name} {p.number}</p>
            <button onClick={() => onDelete(p)}>delete</button>
          </div>
        )        
      }
    </>
  )
}

export default Persons