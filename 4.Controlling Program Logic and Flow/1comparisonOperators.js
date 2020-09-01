//comparesons: < > <= >=  ==equality !=non equal  ===strictly equal to !==strictly not equal to
//== the following are true:
5 == 5;
5 == '5';
0 == '';
0 == false;
null == undefined;

//=== the following are true 99% of time, use === , !==:
5 === 5;
2 === '2'; //false
0 === false; //false

//if statements:
if (1 === 1) {
    console.log('its true');
}

let num = 37;
if (num % 2 !== 0) {
    console.log('odd number');
}
