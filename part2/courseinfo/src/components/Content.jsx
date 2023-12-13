import Part from "./Part"

const Content = ({ parts }) => {
  const total = parts.reduce((acc, cur) => acc + cur.exercises, 0)
  console.log(total);
  return(
    <>
      {parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises}/>
      )}
      <p>
        <strong>
          total of {total} exercises
        </strong>
      </p>
    </>
  )
}

export default Content