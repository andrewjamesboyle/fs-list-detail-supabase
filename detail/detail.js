import { renderCarDetails } from '../render-utils.js';
import { getCars } from '../fetch-utils.js';

const carDetailContainer = document.getElementById('car-detail');

const params = new URLSearchParams(window.location.search);

async function loadDetails() {
    const data = await getCars(params.get('id'));
    console.log(data);
    const carDetails = renderCarDetails(data);
    carDetailContainer.append(carDetails);
}

loadDetails();