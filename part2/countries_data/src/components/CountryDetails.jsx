const CountryDetails = ({ name, capital, area, languages, flag}) => {
  
  const langs = Object.values(languages)

  return(
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>area {area}</p>
      <p><strong>languages:</strong></p>
      <ul>
        {
          langs.map((lang, key) => <li key={key}>{lang}</li>)
        }
      </ul>
      <img src={flag} height={'150px'} width={'150px'} />
    </div>
  )
}

export default CountryDetails