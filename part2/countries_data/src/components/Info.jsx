import CountryDetails from './CountryDetails'
import CountryInfo from './CountryInfo'

const Info = ({ countries }) => {

  if (countries.length === 1){
    const country = countries[0]
    return(
      <CountryDetails 
        name={country.name.common}
        capital={country.capital}
        area={country.area}
        languages={country.languages}
        flag={country.flags.png}
      />
    )
  }
  
  if (countries.length <= 10){
    return(
      <>
      {
        countries.map((country, key) => 
          <CountryInfo
            key={key}
            name={country.name.common}
            capital={country.capital}
            area={country.area}
            languages={country.languages}
            flag={country.flags.png}
          />
        )
      }
      </>
    )
  } 

  if (countries.length > 10){
    return (
      <div>
        Too many matches. Make a more specific query!
      </div>
    )
  }

  

}

export default Info