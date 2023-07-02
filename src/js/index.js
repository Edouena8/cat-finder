import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const refs = {
    select: document.querySelector('.breed-select'),
    infoCont: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error')
};

refs.select.addEventListener('change', onChange);

refs.select.classList.add('hidden');
refs.error.classList.add('hidden');

fetchBreeds()
.then(data => {
    refs.loader.classList.add('hidden');
    refs.select.classList.remove('hidden');
    const selectMarkup = createSelectMarkup(data);
    refs.select.insertAdjacentHTML('beforeend', selectMarkup);
})
.catch(err => {
    refs.error.classList.remove('hidden');
});

refs.infoCont.classList.add('hidden');
refs.loader.classList.remove('hidden');

function createSelectMarkup(arr) {
    refs.loader.classList.add('hidden');
    refs.infoCont.classList.remove('hidden');
    
    return arr.map(({id, name}) => {
        return `
            <option value="${id}">${name}</option>
        `
    }).join('');
};



function onChange(evt) {
    const id = evt.target.value;

    fetchCatByBreed(id).then(cat => {
        const catInfoMarkup = makeCatInfoMarkup(cat[0]);
        refs.infoCont.innerHTML = catInfoMarkup;
    }).catch(err => {
        refs.error.classList.remove('hidden');
    });
};


function makeCatInfoMarkup({url, breeds}) {
    const {name, description, temperament} = breeds[0];
    return `
        <div>
            <img src="${url}" alt="${name}" width="350px">
            <div>
                <h1>${name}</h1>
                <p>${description}</p>
                <p><b>Temperament:</b>${temperament}</p>
            </div>
        </div>
    `;
}