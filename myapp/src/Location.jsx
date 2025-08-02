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
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Country:", selectedCountry);
    console.log("State:", selectedState);
    console.log("City:", selectedCity);
  };

  const countries = Object.keys(data);
  console.log(countries);
  console.log(data);
  const states =selectedCountry && data[selectedCountry] ? Object.keys(data[selectedCountry].states) : [];
  const cities =selectedCountry && selectedState ? data[selectedCountry].states[selectedState] : [];

  return (
    <div>
      <h2>Select Country, State, and City</h2>

      <label>Country:</label>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Select Country --</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <br /><br />

      <label>State:</label>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">-- Select State --</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <br /><br />

      <label>City:</label>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">-- Select City --</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <br /><br />

      <button onClick={handleSubmit}>Print to Console</button>
    </div>
  );
}

export default Location;
