"use client";

import Header from "../components/header/Header";
import DayCard from "../components/card/DayCard";
import { FaSun } from "react-icons/fa";
import TableRow from "../components/table/TableRow";
import { useEffect, useState } from "react";
import { getWeather, CurrentWeatherType } from "@/api/APICalls";
import { log } from "console";

export default function Home() {
  const [currentData, setCurrentData] = useState<CurrentWeatherType>();

  useEffect(() => {
    const getData = async () => {
      const allData = await getWeather(
        10,
        10,
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );
      console.log(allData.current);
      setCurrentData(allData.current);
    };
    getData();
  }, []);

  return (
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    <main>
      <div>{currentData?.currentTemp}</div>
      <Header
        currentTemp={31}
        highTemp={31}
        lowTemp={20}
        highFeelsLike={30}
        lowFeelsLike={20}
        windSpeed={1}
        precip={1}
        
      />
      <section className="grid grid-cols-[repeat(auto-fit,100px)] gap-2 justify-center p-4">
        <DayCard
          icon={<FaSun className="w-16 h-16" />}
          day="Monday"
          degree={32}
        />
        <DayCard
          icon={<FaSun className="w-16 h-16" />}
          day="Monday"
          degree={32}
        />
      </section>

      <table className="w-full text-center border-spacing-0">
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </main>
  );
}
