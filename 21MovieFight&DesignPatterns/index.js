const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '513c57c8',
            i: 'tt0848228',
        },
    });
    console.log(response.data);
};

fetchData();
