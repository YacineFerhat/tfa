export const dateFormator = (date) => {
  const dateToFormat = new Date(date); // dateStr you get from mongodb
  const day = dateToFormat.getDate();
  const month = dateToFormat.getMonth() + 1;
  const year = dateToFormat.getFullYear();
  return `${day} / ${month} / ${year}`;
};
