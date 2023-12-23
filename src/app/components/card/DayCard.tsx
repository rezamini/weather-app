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
    <div className="flex flex-col items-center justify-center border border-foregroundColor rounded-md p-0.5">
      <div>{icon}</div>
      <div className="text-base text-foregroundSecondaryColor mt-0.5">
        {day}
      </div>
      <div>{degree}&deg;</div>
    </div>
  );
}
