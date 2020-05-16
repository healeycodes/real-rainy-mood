const fetch = require("node-fetch");

exports.handler = async function(event, context, callback) {
  const ip = event.headers["client-ip"];
  const location = await fetch(`http://ip-api.com/json/${ip}`).then((res) => res.json());
  const prettyLocation = `${location.zip}\n${location.city}\n${location.regionName}\n${location.Canada}`;

  const current_forecast = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
  ).then((res) => res.json());
  const weatherId = current_forecast.weather[0].id;

  // Within the range of thunderstorm, drizzle, rain, or snow
  let raining = false;
  if (weatherId >= 200 && weatherId <= 622) {
    raining = true;
  }

  callback(null, {
    statusCode: 200,
    body: { raining, location, prettyLocation, current_forecast },
  });
};
