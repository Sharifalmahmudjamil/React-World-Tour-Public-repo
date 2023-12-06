import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,capital,area,population,cca3}=country

    const [visited,setVisited]=useState(false)

    const handleVisited = () =>{
        setVisited(!visited);
    }

    
    

    return (
        <div className={`country  ${visited ?'visited': 'non-visited'}`}>
            <h3 style={{color:visited ? 'purple':'white'}} >Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={handleVisited} >{visited ? "visited":"going"}</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            {
                (visited ? 'I have visited this country.': 'I want to visit.')
            }
            
        </div>
    );
};

export default Country;