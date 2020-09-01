//with addEventListener, you can attach as many event listeners as you want to the same thing(btn)

const btn = document.querySelector('#btn1');

btn.addEventListener('click', function () {
    alert('clicked');
});

btn.addEventListener('click', function () {
    console.log('second thing!!');
});

btn.addEventListener('mouseover', function () {
    btn.innerText = 'stop touching me!';
});

btn.addEventListener('mouseout', function () {
    btn.innerText = 'click me';
});

window.addEventListener('scroll', function () {
    console.log('stop scrolling!');
});
