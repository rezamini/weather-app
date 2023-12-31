//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&precipitation_unit=inch&timeformat=unixtime&timezone=GMT
"use server";

import axios from "axios";

export async function getWeather(
  lat: number,
  lon: number,
  timezone: string
): Promise<any> {
  "use server";

  return await axios
    .get(
      "https://api.open-meteo.com/v1/forecast?current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&precipitation_unit=inch&timeformat=unixtime",
      {
        params: {
          latitude: lat,
          longitude: lon,
          timezone,
        },
      }
    )
    .then((response) => {
      //OR then(({data}))
      return {
        current: parseCurrentWeather(response.data),
        daily: parseDailyWeather(response.data),
      };
    });

  // return resp.data;
}

// export async function getTestData(): Promise<any> {
//   "use server";
//   const res = await fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&precipitation_unit=inch&timeformat=unixtime&timezone=GMT"
//   );
//   const data = await res.json();
//   return data;
// }

function parseCurrentWeather({ current, daily }: any) {
  const {
    temperature_2m: currentTemp,
    wind_speed_10m: windSpeed,
    weather_code: iconCode,
  } = current;
  const {
    temperature_2m_max: [maxTemp],
    temperature_2m_min: [minTemp],
    apparent_temperature_max: [maxFeelsLike],
    apparent_temperature_min: [minFeelsLike],
    precipitation_sum: [precip],
  } = daily;

  // temperature_2m: [maxTemp] same as const maxTemp = daily.temperature_2m[0]
  return {
    currentTemp: Math.round(currentTemp),
    highTemp: Math.round(maxTemp),
    lowTemp: Math.round(minTemp),
    highFeelsLike: Math.round(maxFeelsLike),
    lowFeelsLike: Math.round(minFeelsLike),
    windSpeed: Math.round(windSpeed),
    precip: Math.round(precip * 100) / 100,
    iconCode: iconCode,
  };
}

function parseDailyWeather({ daily }: any) {
  return daily.time.map((time: number, index: number) => {
    return {
      timestamp: time * 1000, //second to milliseconds
      iconCode: daily.weather_code[index],
      maxTemp: Math.round(daily.temperature_2m_max[index]),
    };
  });
}
