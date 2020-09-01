//the switch statement:
let day = 2;
switch (day) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('firday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
    default:
        console.log('invalid day');
}

let emoji = 'happy face';

switch (emoji) {
    case 'happy face':
    case 'sad face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'fire':
    case 'heart':
        console.log('red');
        break;
}
