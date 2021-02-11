import { fetchCars, addCar } from './car';

// TODO: give a badass name to your garage
const myBadAssGarage = "badass-tomo";
// DON'T CHANGE THIS LINE
document.querySelector("#garage-name").innerText = myBadAssGarage.replace(/-/g, " ");
// //////////////////////

// Functions calls
fetchCars(myBadAssGarage);

// Events handling
const btn = document.querySelector("#submit-btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  addCar(myBadAssGarage);
});
