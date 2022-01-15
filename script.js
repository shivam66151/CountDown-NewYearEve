const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('min');
const secsE1 = document.getElementById('sec');

const newYear = '1 Jan 2022';

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysE1.innerHTML = days;
  hoursE1.innerHTML = format(hours);
  minsE1.innerHTML = format(mins);
  secsE1.innerHTML = format(secs);
}

function formatTime(time) {
  return time < 10 ? '0${time}' : time;
}

countdown();

setInterval(countdown, 1000);
