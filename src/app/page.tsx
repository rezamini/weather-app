"use client";

import Header from "../components/header/Header";
import DayCard from "../components/card/DayCard";
import { FaSun } from "react-icons/fa";
import TableRow from "../components/table/TableRow";
import { useEffect, useState } from "react";
import {
  getWeather,
  CurrentWeatherType,
  DailytWeatherType,
  HourlyWeatherType,
} from "@/api/APICalls";
import { log } from "console";

export default function Home() {
  const [currentData, setCurrentData] = useState<CurrentWeatherType>();
  const [dailyData, setDailyData] = useState<DailytWeatherType[]>([]);
  const [hourlyData, setHourlyData] = useState<HourlyWeatherType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const weatherData = await getWeather(
        10,
        10,
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );
      console.log(weatherData.daily);

      if (weatherData.current) {
        setCurrentData(weatherData.current);
      }

      if (weatherData.daily) {
        setDailyData(weatherData.daily);
      }

      if (weatherData.hourly) {
        setHourlyData(weatherData.hourly);
      }
    };

    getData();
  }, []);

  // if(currentData == null || currentData == undefined){
  //   return '';
  // }

  return (
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    <main className={`${currentData == null ? "blur-md" : ""} `}>
      <Header
        currentTemp={currentData?.currentTemp}
        highTemp={currentData?.highTemp}
        lowTemp={currentData?.lowTemp}
        highFeelsLike={currentData?.highFeelsLike}
        lowFeelsLike={currentData?.lowFeelsLike}
        windSpeed={currentData?.windSpeed}
        precip={currentData?.precip}
        iconCode={currentData?.iconCode}
      />
      <section className="grid grid-cols-[repeat(auto-fit,100px)] gap-2 justify-center p-4">
        {dailyData.map((item, index) => (
          <DayCard
            key={index}
            iconCode={item.iconCode}
            timestamp={item.timestamp}
            degree={item.maxTemp}
            // className="border-red-600"
          />
        ))}
        {/* <DayCard
          // icon={<FaSun className="w-16 h-16" />}
          iconCode={999}
          day="Monday"
          degree={32}
        /> */}
      </section>

      <table className="w-full text-center border-spacing-0">
        <tbody>
          <TableRow
            maxTemp={31}
            feelsLike={30}
            precip={0.1}
            timestamp={222}
            windSpeed={22}
            iconCode={999}
          />
        </tbody>
      </table>
    </main>
  );
}
