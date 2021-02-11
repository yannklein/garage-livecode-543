import { addCar, fetchCars } from './car';

// TODO: give a badass name to your garage
const myBadAssGarage = "yarn-garage";

// DON'T CHANGE THIS LINE
document.querySelector("#garage-name").innerText = myBadAssGarage.replace(/-/g, " ");
// //////////////////////

// element selection
const button = document.querySelector("#submit-btn");

// function calls
fetchCars();

// event listeners
button.addEventListener("click", addCar);
