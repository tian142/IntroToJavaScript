const checkStatusAndParse = (response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
};

const printPlanets = (data) => {
    console.log('Loaded 10 more planets...');
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return fetch(url);
};

fetchNextPlanets()
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .catch((err) => {
        console.log('SOMETHING WENT WRONG WITH FETCH!');
        console.log(err);
    });

//^FETCH VS AXIOS------------------------------------------------------------

const fetchNextPlannets = (url = 'https://swapi.dev/api/planets/') => {
    console.log(url);
    return axios.get(url);
};
const printPlannets = ({ data }) => {
    console.log(data);
    for (let plannet of data.results) {
        console.log(plannet.name);
    }
    return Promise.resolve(data.next);
};

fetchNextPlannets()
    .then(printPlannets)
    .then(fetchNextPlannets)
    .then(printPlannets)
    .then(fetchNextPlannets)
    .then(printPlannets)
    .catch((err) => {
        console.log('error!', err);
    });
