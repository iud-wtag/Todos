export const formatDate = (date) => {
  const today = date;
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};
