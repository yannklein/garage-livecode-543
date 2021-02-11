// HTML element selection
const carsList = document.querySelector(".cars-list");
const brand = document.querySelector("#brand");
const model = document.querySelector("#model");
const plate = document.querySelector("#plate");
const owner = document.querySelector("#owner");

// Function displaying cars on the car-list ul
const displayCars = (cars) => {
  cars.forEach((car) => {
    carsList.insertAdjacentHTML('beforeend',
      `<div class="car">
          <div class="car-image">
            <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
          </div>
          <div class="car-info">
            <h4>${car.brand} ${car.model}</h4>
            <p><strong>Owner:</strong>${car.owner}</p>
            <p><strong>Plate:</strong>${car.plate}</p>
          </div>
        </div>
      `);
  });
};

// Function fetching all cars from Wagon API
const fetchCars = (garage) => {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const cars = data;
      carsList.innerHTML = "";
      displayCars(cars);
    });
};

// Function adding car to a garage of Wagon API
const addCar = (garage) => {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      {
        brand: brand.value,
        model: model.value,
        owner: owner.value,
        plate: plate.value
      }
    )
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      fetchCars();
    });
};

export { fetchCars, addCar };
