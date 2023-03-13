export const getDays = (day1, day2) => {
  return Math.ceil((day2 - day1) / (1000 * 3600 * 24));
};
