fetch('https://swapi.dev/api/planets/')
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);
        return response.json();
    })
    .then((data) => {
        console.log('fetched plannets');
        const filmURL = data.results[0].films[0];
        return fetch(filmURL);
    })
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);
        return response.json();
    })
    .then((data) => {
        console.log('fetched first film based on fetched plannet');
        console.log(data.title);
    })
    .catch((err) => {
        console.log('SOMETHING WENT WRONG WITH FETCH!');
        console.log(err);
    });
