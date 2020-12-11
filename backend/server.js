// importing express
const express = require("express");
const cors = require("cors");
const weather_location_route = require("./api/routes/appRoutes");
//Port declaration
const PORT = process.env.PORT || 5000;
//initializing app
const app = express();
//middleware
app.use(express.json());
app.use(cors());
app.use("/weather", weather_location_route);
//listening on port
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Welcome to the Weather App ! App is running on port  ${PORT}`);
  }
});

module.exports = app;
