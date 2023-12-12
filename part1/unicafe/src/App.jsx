import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const average = () => {
    return (good - bad) / (good + neutral + bad)
  }

  const positive = () => (good/(good + neutral + bad))*100

  if (good === 0 && neutral === 0 && bad === 0){
    return(
      <p>No feedback given</p>
    )
  }

  return(
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
        <StatisticLine text={"good"} value={good}/>
        <StatisticLine text={"neutral"} value={neutral}/>
        <StatisticLine text={"bad"} value={bad}/>
        <StatisticLine text={"total"} value={good + neutral + bad}/>
        <StatisticLine text={"average"} value={average()}/>
        <StatisticLine text={"positive"} value={`${positive()}%`}/>
        </tbody>
      </table>      
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleClickGood}/>
      <Button text="neutral" onClick={handleClickNeutral}/>
      <Button text="bad" onClick={handleClickBad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App