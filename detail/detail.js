import { renderCarDetails } from '../render-utils.js';
import { getCar } from '../fetch-utils.js';

const carDetailContainer = document.getElementById('car-detail');

const params = new URLSearchParams(window.location.search);

async function loadDetails() {
    const data = await getCar(params.get('id'));
    console.log('data', data);
    const carDetails = renderCarDetails(data);
    carDetailContainer.append(carDetails);
}

loadDetails();