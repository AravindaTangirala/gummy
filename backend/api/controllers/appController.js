//const express = require("express");
const axios = require("axios");
exports.get_weather = (req, res, next) => {
  let API_KEY = "4d84430917405bc03c02c9597bc84f72";
  let city = req.body.city;
  let country = req.body.country;
  if (req.body.city !== undefined && city !== "") {
    let weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=${API_KEY}`;
    axios
      .post(weather_url)
      .then((response) => {
        // handle success
        console.log("Weather App - POST /weather - Axios success");
        //converting our response to json data

        res.status(200).json(response.data);
      })
      .catch((error) => {
        // handle error
        console.log("Weather App - POST /weather - Axios error");
        res.status(500).json({ status: "FAIL", message: error });
      });
  }
};
