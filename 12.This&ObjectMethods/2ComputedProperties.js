//Imporvement for object literal syntax

const role = 'host';
const person = 'Ben Frank';
const role2 = 'CEO';
const person2 = 'Elon Musk';
//the following result in the object: role: ben Frank... we want: host: Ben Frank
const team = {
    role: person,
};
// old way to fix: this will result in: host: Ben Frank
const team1 = {};
team1[role] = person;

// new way: Computed properties
const team2 = {
    [role2]: person2,
    [5 * 2]: 'ten',
};

const addProp = (obj, k, v) => {
    return {
        ...obj,
        [k]: v,
    };
};

const btc = addProp(team2, 'CTO', 'Satoshi Nakamoto');
