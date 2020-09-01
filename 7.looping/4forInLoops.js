//for in loops are not good for arrays, but good for objects
//for in loops
//for(variables in object) {statement}
const bitcoinPrice = {
    2015: 300,
    2016: 1000,
    2017: 6000,
    2018: 6000,
    2019: 8000,
    2020: 10000,
    2021: 20000,
    2022: 200000,
};

for (let year in bitcoinPrice) {
    console.log(year);
    console.log(bitcoinPrice[year]);
}

let totalBTC = 0;
for (let year in bitcoinPrice) {
    totalBTC += bitcoinPrice[year];
}
console.log(totalBTC / Object.keys(bitcoinPrice).length);
