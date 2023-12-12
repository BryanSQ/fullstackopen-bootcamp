import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Anecdote = ({ text, votes }) => {
  return (
    <>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVotes =() => {
    const highest = Math.max(...votes)
    const index = [...votes].indexOf(highest)
    return index
  }

  return (
    <div>
      <Anecdote 
        text={anecdotes[selected]}
        votes={votes[selected]}
      />
      <div>
      <Button text={"Vote"} onClick={handleVote} />  
      <Button text={"Next Anecdote"} onClick={handleClick} />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <Anecdote 
        text={anecdotes[mostVotes()]}
        votes={votes[mostVotes()]}
      />
      </div>
    </div>
  )
}

export default App