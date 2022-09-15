import dayjs from "dayjs";

export function getDateSuffix(date: string) {
  const lastCharOfDay = date.substring(date.length - 1);

  let surFix = "th";
  if (lastCharOfDay === "1") surFix = "st";
  if (lastCharOfDay === "2") surFix = "nd";
  if (lastCharOfDay === "3") surFix = "rd";

  return surFix;
}

export function getDate(day: Date): string {
  const date = String(dayjs(day).get("date"));

  return `${date}${getDateSuffix(date)}`;
}

export function getMonth(day: Date): string {
  return String(dayjs(day).format("MMM"));
}

export function getYear(day: Date): string {
  return String(dayjs(day).year());
}
