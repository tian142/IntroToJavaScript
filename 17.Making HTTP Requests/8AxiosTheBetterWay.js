// A popular library for making HTTP Requests
// accusing a CDN or download locally
// returns fetch(get) with parced JSON data
// AXIOs makes anything other than 200-OK an error

axios
    .get('https://swapi.dev/api/planets/')
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log('IN CATCH CALLBACK');
        console.log(err);
    });
