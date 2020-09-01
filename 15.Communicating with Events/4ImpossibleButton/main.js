//window.innerHeight, window.innerWidth = how many pixed in browser window

const btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
    const windowHeight = Math.floor(Math.random() * window.innerHeight);
    const windowWidth = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = `${windowWidth}px`;
    btn.style.top = `${windowHeight}px`;
});

btn.addEventListener('click', function () {
    btn.innerText = 'You got me!';
    document.body.style.backgroundColor = 'green';
});
