const day = document.querySelector(".day");
const time = document.querySelector(".time");

const getUserDate = function () {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  const dayNames = days[d.getDay()];
  const milliTime = Date.now();
  day.textContent = dayNames;
  time.textContent = milliTime;
};
getUserDate();
setInterval(getUserDate, 1000);