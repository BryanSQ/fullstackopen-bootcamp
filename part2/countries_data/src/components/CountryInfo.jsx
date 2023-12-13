import { useState } from 'react';

import CountryDetails from './CountryDetails';

const CountryInfo = ({ name, capital, area, languages, flag}) => {
  
  const langs = Object.values(languages)
    
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return(
    <>
      <div>
        {name}
        <button onClick={handleToggle}>
          show
        </button>
      </div>

      {
        toggle && 
        <CountryDetails 
          name={name}
          capital={capital}
          area={area}
          languages={languages}
          flag={flag}
        />
      }
    </>
  )
}

export default CountryInfo