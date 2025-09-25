export function convertDate(dateString: string): {
  date: string;
  time: string;
} {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const formattedDate = date.toLocaleDateString("fr-FR", options);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}h${minutes}`;
  return { date: formattedDate, time: formattedTime };
}
