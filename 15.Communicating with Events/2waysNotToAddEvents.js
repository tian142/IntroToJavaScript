// the thing    event type     the code to run
// button       click          change the color
// input        hits return    get search results
// image        mouseover      display caption

//the bad ways to add events: adding (attribute: onclick="run this code")in html

const btn = document.querySelector('#clicker');

btn.onclick = function () {
    console.log('you clicked me go away');
};
btn.ondblclick = () => {
    console.log('doubleClicked');
};

//^ can not add multiple actions to one function, must make multiple funcitons/ also if you make
// 2 actions with 2 functions to the same event(in this case:btn), only the latest will save
//there is a better way. to use one method
