export const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const hours = [];
for (let i = 0; i < 24; i++) {
  hours.push(i);
}

export const daysAndHours = days.map((item) => {
  return {
    day: item,
    hours: hours,
  };
});
