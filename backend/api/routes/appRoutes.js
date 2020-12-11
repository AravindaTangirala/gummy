const Express = require("express");
const router = Express.Router();
const weather_location = require("../controllers/appController");

router.post("/", weather_location.get_weather);

module.exports = router;
