const myBadAssGarage = "yarn-garage";

const carsList = document.querySelector(".cars-list");
const plate = document.querySelector("#plate");
const brand = document.querySelector("#brand");
const owner = document.querySelector("#owner");
const model = document.querySelector("#model");

const displayCars = (cars) => {
  carsList.innerHTML = "";
  cars.forEach((car) => {
    const newCar = `
      <div class="car">
        <div class="car-image">
          <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
        </div>
        <div class="car-info">
          <h4>${car.brand} ${car.model}</h4>
          <p><strong>Owner:</strong>${car.owner}</p>
          <p><strong>Plate:</strong>${car.plate}</p>
        </div>
      </div>`;
    carsList.insertAdjacentHTML("beforeend", newCar);
  });
};

const fetchCars = () => {
  const url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      displayCars(data);
    });
};

const postACar = (car) => {
  const url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      fetchCars();
    });
};

const addCar = (event) => {
  event.preventDefault();
  // 3. Make car object and post it to the API
  const car = {
    plate: plate.value,
    brand: brand.value,
    model: model.value,
    owner: owner.value,
  };
  postACar(car);
};


export { addCar, fetchCars};
