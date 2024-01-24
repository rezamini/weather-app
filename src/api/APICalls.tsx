//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&precipitation_unit=inch&timeformat=unixtime&timezone=GMT
"use server";

import axios from "axios";

export type CurrentWeatherType = {
  currentTemp: number;
  highTemp: number;
  lowTemp: number;
  highFeelsLike: number;
  lowFeelsLike: number;
  windSpeed: number;
  precip: number;
  iconCode: number;
};

export type DailytWeatherType = {
  timestamp: number;
  iconCode: number;
  maxTemp: number;
};

export type HourlyWeatherType = {
  timestamp: number;
  iconCode: number;
  maxTemp: number;
  feelsLike: number;
  windSpeed: number;
  precip: number;
};

export type CitySearchType = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

export async function getWeather(
  lat: number,
  lon: number,
  timezone: string
  // Promise<{current:object, daily:object, hourly:object}> {
): Promise<{
  current: CurrentWeatherType;
  daily: DailytWeatherType[];
  hourly: HourlyWeatherType[];
}> {
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
        hourly: parseHourlyWeather(response.data),
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

function parseCurrentWeather({ current, daily }: any): CurrentWeatherType {
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

function parseDailyWeather({ daily }: any): DailytWeatherType[] {
  return daily.time.map((time: number, index: number) => {
    return {
      timestamp: time * 1000, //second to milliseconds
      iconCode: daily.weather_code[index],
      maxTemp: Math.round(daily.temperature_2m_max[index]),
    };
  });
}

function parseHourlyWeather({ hourly, current }: any): HourlyWeatherType[] {
  console.log(current.time * 1000);
  return hourly.time
    .map((time: number, index: number) => {
      return {
        timestamp: time * 1000,
        iconCode: hourly.weather_code[index],
        maxTemp: Math.round(hourly.temperature_2m[index]),
        feelsLike: Math.round(hourly.apparent_temperature[index]),
        windSpeed: Math.round(hourly.wind_speed_10m[index]),
        precip: Math.round(hourly.precipitation[index] * 100) / 100,
      };
    })
    .filter(({ timestamp }: any) => timestamp >= current.time * 1000);
}

export async function getCities(cityName: string): Promise<CitySearchType[]> {
  "use server";

  return await axios
    .get(
      "https://geocoding-api.open-meteo.com/v1/search?count=3&language=en&format=json",
      {
        params: {
          name: cityName,
        },
      }
    )
    .then((response) => {
      //OR then(({data}))
      return parseCityData(response.data);
    });
}

function parseCityData(data: any): CitySearchType[] {
  // data: {results: {id:number, name:string}[]}
  return data.results?.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
    };
  }) ?? [];
}
