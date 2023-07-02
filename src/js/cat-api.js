import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_UATTMAZenYOQwTkH9f4Nrq80DjxGQfP6hc7jVfpjqY0Y6nyxN6Eovf2KfbzRblNX";

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_UATTMAZenYOQwTkH9f4Nrq80DjxGQfP6hc7jVfpjqY0Y6nyxN6Eovf2KfbzRblNX';

function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`).then(promise => {
        return promise.json();
    });
};

function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
    .then(p => p.json());
}

// function fetchCatByBreed(breedId) {
//     return fetch(`${BASE_URL}/breeds/${breedId}`)
//     .then(p => p.json());
// }

export {fetchBreeds, fetchCatByBreed};
