//Add methods to objects, use new object shorthand syntax, computed properties, prototypes, this

//the old way:
// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((accunulated, currVAL) => accunulated + currVAL);
//     const avg = sum / arr.length;
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg,
//     };
// };

const age = [45, 2, 56, 25, 15, 17, 23, 24, 35];

//the new way: no need to be redundent when returning
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((accunulated, currVAL) => accunulated + currVAL);
    const avg = sum / arr.length;
    return {
        max,
        min,
        sum,
        avg,
    };
};
