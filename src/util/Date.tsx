const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: "long" });

export function formatTimestampToDay(timestamp: number): string {
  let day = "";
  if (timestamp) {
    day = DAY_FORMATTER.format(timestamp);
  }
  return day;
}
