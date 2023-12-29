//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&precipitation_unit=inch&timeformat=unixtime&timezone=GMT
"use server";

import axios from "axios";

export async function getWeather(
  lat: number,
  lon: number,
  timezone: string
): Promise<any> {
  "use server";

  const resp =  await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&precipitation_unit=inch&timeformat=unixtime&timezone=GMT",
    {
      params: {
        latitude: lat,
        longitude: lon,
        timezone,
      },
    }
  );

  return resp.data;
}

// export async function getTestData(): Promise<any> {
//   "use server";
//   const res = await fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&precipitation_unit=inch&timeformat=unixtime&timezone=GMT"
//   );
//   const data = await res.json();
//   return data;
// }
