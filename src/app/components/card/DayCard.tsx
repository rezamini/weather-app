import { IconType } from "react-icons";
import { FaSun } from "react-icons/fa";

type dayCardProps = {
  icon: React.ReactNode;
  day: string;
  degree: number;
};

export default function DayCard({
  icon = <FaSun className="w-16 h-16" />,
  day = "Monday",
  degree = 32,
}: dayCardProps) {
  return (
    <div className="">
      <div>{icon}</div>
      <div className="">
        {day}
      </div>
      <div>{degree}&deg;</div>
    </div>
  );
}
