export function renderCarCard(car) {
    const carEl = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const makeEl = document.createElement('p');
    const modelEl = document.createElement('p');

    carEl.classList.add('dog-card');

    makeEl.textContent = car.make;
    modelEl.textContent = car.model;
    img.src = `./assets/${car.image}.png`;
    a.href = `./detail/?id=${car.id}`;

    a.append(makeEl, modelEl, img);

    carEl.append(a);

    return carEl;
}