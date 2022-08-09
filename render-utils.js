export function renderCarCard(car) {
    const carEl = document.createElement('div');
    const a = document.createElement('a');
    const imgEl = document.createElement('img');
    const makeEl = document.createElement('p');
    const modelEl = document.createElement('p');

    carEl.classList.add('car-card');

    makeEl.textContent = car.make;
    modelEl.textContent = car.model;
    imgEl.src = `./assets/${car.image}.png`;
    a.href = `./detail/?id=${car.id}`;

    a.append(makeEl, modelEl, imgEl);

    carEl.append(a);

    return carEl;
}

export function renderCarDetails(car) {
    const carDetailEl = document.createElement('div');
    const imgEl = document.createElement('img');
    const makeEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const colorEl = document.createElement('p');

    carDetailEl.classList.add('car-detail');

    makeEl.textContent = car.make;
    modelEl.textContent = car.model;
    yearEl.textContent = car.year;
    colorEl.textContent = car.color;
    imgEl.src = `../assets/${car.image}.png`;

    carDetailEl.append(makeEl, modelEl, yearEl, colorEl, imgEl);

    return carDetailEl;
}

