const hour = 24;
const second = 3600;
const millisecond = 1000;

export const getDays = (day1, day2) => {
  return Math.ceil((day2 - day1) / (millisecond * second * hour));
};
