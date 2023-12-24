import Header from "./components/header/Header";
import DayCard from "./components/card/DayCard";
import { FaSun } from "react-icons/fa";

export default function Home() {
  return (
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    <main>
      <Header />
      <section className="grid grid-cols-[repeat(auto-fit,100px)] gap-2 justify-center p-4">
        <DayCard icon={<FaSun className="w-16 h-16"/>} day="Monday" degree={32}/>
        <DayCard icon={<FaSun className="w-16 h-16"/>} day="Monday" degree={32}/>
      </section>
    </main>
  );
} 
