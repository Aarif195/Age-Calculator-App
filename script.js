
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const tempButton = document.getElementById("temp-button");

const dayContainer = document.querySelector(".day");
const monthContainer = document.querySelector(".month");
const yearContainer = document.querySelector(".year");


// yearContainer, month and day Error Variables
const yearError = document.querySelector(".year-error");
console.log(yearError);
const monthError = document.querySelector(".month-error");
const dayError = document.querySelector(".day-error");

// addEventListener
tempButton.addEventListener("click", () => {
  const dayValue = Number(dayInput.value);
  const monthValue = Number(monthInput.value);
  const yearValue = Number(yearInput.value);
  // console.log(dayValue, monthValue, yearValue)

  let yearSpan = document.querySelector('.year-age');
  let monthSpan = document.querySelector('.month-age');
  let daySpan = document.querySelector('.day-age');


  const currentyYear = new Date().getFullYear();
  const currentMonth = (new Date().getMonth()) + 1;
  const currentDay = new Date().getDay();
  const currentDate = new Date()

  const date = new Date();
  console.log(date.getDate());

  const day = new Date();
  console.log(day.getDay());

  if (yearValue <= currentyYear) {
    console.log("correct")
    yearError.style.display = "none"
    yearContainer.classList.remove('error');
    if (currentMonth > monthValue) {
      yearSpan.innerHTML = currentyYear - yearValue
    } else {
      yearSpan.innerHTML = currentyYear - yearValue - 1
    }

  } else {
    console.log("Year Error ")
    yearError.style.display = "block"
    yearContainer.classList.add('error');
    yearSpan.innerHTML = '--';

  }
  // console.log(monthValue, currentMonth);

  if ((yearValue == currentyYear && monthValue > currentMonth) || monthValue > 12) {
    console.log("Month Error ")
    monthError.style.display = 'block';
    monthContainer.classList.add('error');
    monthSpan.innerHTML = '--';

  } else {
    monthError.style.display = 'none';
    monthContainer.classList.remove('error');
    if (currentMonth > monthValue) {
      monthSpan.innerHTML = currentMonth - monthValue;
    } else {
      monthSpan.innerHTML = 12 - (monthValue - currentMonth);
    }
  }
  console.log(dayValue, currentDay);
  // dayValue > currentDay  
  if ((yearValue == currentyYear && monthValue == currentMonth && dayValue <= currentDay) || dayValue <= 31) {
    console.log('good')
    dayError.style.display = 'none'
    dayContainer.classList.remove('error');
  } else {
    console.log("Day Error ")
    dayError.style.display = 'block'
    dayContainer.classList.add('error');
  }
})

// if ( currentyYear = yearValue AND monthValue > currentMonth OR monthValue > 12 : throw error)

// if (currentMonth > monthValue) {
//   monthSpan.innerHTML = currentMonth - monthValue
// } else {
//   monthSpan.innerHTML = currentMonth - monthValue - 1
// }

// Example
// 1 5 2000;
// 24 yrs, 6 months 0dys
// 1 12 2000
// 23 yrs -2months 0 dys
// 1 7 2000 - 1 5 2024
// 12 - ( monthValue - currentMonth ) 

