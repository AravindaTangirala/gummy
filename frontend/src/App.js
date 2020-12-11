import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [temp, setTemp] = useState(0);
  const getWeather = () => {
    const url = `  https://whispering-earth-68147.herokuapp.com/weather`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: city,
        country: country,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res && res.main) {
          console.log(res.main.temp);
          setTemp(res.main.temp);
        }
      });
  };
  return (
    <div className="app">
      <h1 className="app__h1"> Weather App</h1>
      <div className="inputBoxes">
        <input
          required
          type="text"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button className="app__button" onClick={getWeather}>
          Get Weather!
        </Button>
        <h1 className="app__result">{temp}°F </h1>
      </div>
    </div>
  );
}

export default App;
