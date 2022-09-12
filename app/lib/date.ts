import dayjs from "dayjs";

function getDateSuffix(date: string) {
  const lastCharOfDay = date.substring(date.length - 1);

  let surFix = "th";
  if (lastCharOfDay === "1") surFix = "st";
  if (lastCharOfDay === "2") surFix = "nd";
  if (lastCharOfDay === "3") surFix = "rd";

  return surFix;
}

function getDate(day: Date): string {
  const date = String(dayjs(day).daysInMonth());

  return `${date}${getDateSuffix(date)}`;
}

function getMonth(day: Date): string {
  return String(dayjs(day).format("MMM"));
}

function getYear(day: Date): string {
  return String(dayjs(day).year());
}

export function getPostCreatedAt(day: Date): string {
  console.log("given day", getDate(day));
  return `${getMonth(day)} ${getDate(day)}, - ${getYear(day)}`;
}
