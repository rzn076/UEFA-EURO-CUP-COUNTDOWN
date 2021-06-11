
const targetDate = new Date('06-12-2021 00:30')
let prevSecond = 0;

// let countdown = (targetDate - now) / 1000;
// console.log(countdown);

function displayTime() {
  let now = Date.now();
  const diff = Math.abs(targetDate - now) / 1000;
  const targetReached = (targetDate - now) / 1000;
  const hours = Math.floor(diff / 3600) % 24;
  const minutes = Math.floor(diff / 60) % 60;
  const seconds = Math.floor(diff % 60);
  if (prevSecond !== seconds && targetReached > 0) {
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    prevSecond = seconds;
  }
  setTimeout(displayTime, 1000);
}

displayTime();

// while (countdown > 0) {
  
//   let now = Date.now();
  
//   let countdown = (targetDate - now) / 1000;
//   const diff = Math.abs(targetDate - now) / 1000;
//   const hours = Math.floor(diff / 3600) % 24;
//   const minutes = Math.floor(diff / 60) % 60;
//   const seconds = Math.floor(diff % 60);

//   console.log(hours);
//   console.log(minutes);
//   console.log(seconds);


//   // document.getElementById('hours').textContent = hours;

// }


