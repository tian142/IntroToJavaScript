const games = [
    {
        title: 'League of Legends',
        year: 2009,
        rating: '7/10',
        hoursSpent: 800,
    },
    {
        title: 'PUBG',
        year: '2017',
        rating: '8/10',
        hoursSpent: 400,
    },
    {
        title: 'EFT',
        year: '2017',
        rating: '9/10',
        hoursSpent: 400,
    },
    {
        title: 'VRChat',
        year: '2017',
        rating: '8/10',
        hoursSpent: 700,
    },
];

for (let game of games) {
    const gameData = ({ title, year, rating, hoursSpent } = game);
    const AAAGames = gameData.title;
    console.log(AAAGames);
}
