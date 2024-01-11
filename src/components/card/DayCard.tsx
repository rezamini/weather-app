import { getIcon } from "@/util/IconCode";
import { IconType } from "react-icons";
import { FaSun } from "react-icons/fa";
import { formatTimestampToDay } from "@/util/Date";
import { DetailedHTMLProps, HTMLAttributes } from "react";
type dayCardProps = {
  // icon: React.ReactNode;
  iconCode: number | undefined;
  timestamp: number | undefined;
  degree: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function DayCard({
  // icon = <FaSun className="w-16 h-16" />,
  iconCode = 999,
  timestamp = 999,
  degree = 32,
  ...props
}: dayCardProps) {
  const Icon = getIcon(iconCode);
  const dayDate = formatTimestampToDay(timestamp);

  return (
    <div className={`flex flex-col items-center justify-center border border-foregroundColor rounded-md p-0.5 ${props.className}`}>
      <div><Icon className="w-16 h-16" /></div>
      <div className="text-base text-foregroundSecondaryColor mt-0.5">
        {dayDate}
      </div>
      <div>{degree}&deg;</div>
    </div>
  );
}
