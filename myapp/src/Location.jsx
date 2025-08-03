import React, { useState } from "react";

const data = {
  india: {
    states: {
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
      TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
      Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
      Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
      WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
      Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
      Haryana: ["Gurugram", "Faridabad", "Panipat"],
      Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
      UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
      Bihar: ["Patna", "Gaya", "Bhagalpur"],
      Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
    },
  },
  usa: {
    states: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      NewYork: ["New York City", "Buffalo", "Rochester"],
    },
  },
  germany: {
    states: {
      Bavaria: ["Munich", "Nuremberg", "Augsburg"],
      Berlin: ["Berlin", "Potsdam", "Cottbus"],
    },
  },
};

function Location() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState("");
    setCity("");
  }
  const handleStateChange = (e) =>{
    setState(e.target.value);
    setCity("");
  }
  const handleCityChange = (e) =>{
    setCity(e.target.value);
  }

  const countries = Object.keys(data);

  let statess = [];
  if (country) {
    statess = Object.keys(data[country].states);
  }

  let cities=[];
  if(country && state){
    cities = data[country].states[state]
  }

  const handleSubmit = () => {
    if(!(country && state && city)){
      alert("select all");
      return
    }

    const data = {country,state,city};
    console.log(data);
  }

  return (
    <div>
      <h2>Select Country, State, and City</h2>
      <label>Select: </label>
      <select value={country} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((cy) => (
          <option value={cy}>{cy}</option>
        ))}
      </select>
      <br /><br />
      <label>Select State </label>
      <select value={state} onChange={handleStateChange}>
        <option value="">Select State</option>
        {statess.map((st) =>(
          <option value={st}>{st}</option>
        ))}
      </select>
      <br /><br />
      <label>Select City </label>
      <select value={city} onChange={handleCityChange}>
        <option value="">Select City</option>
        {cities.map((cit) =>(
          <option value={cit}>{cit}</option>
        ))}
      </select>
      <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Location;
