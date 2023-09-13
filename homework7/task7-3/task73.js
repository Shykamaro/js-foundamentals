const clickBlue = document.getElementById('1');
const clickPink = document.getElementById('2');
const clickHold = document.getElementById('3');
const link = document.getElementById('4');

const body = document.getElementById('0');

clickBlue.addEventListener('click', function() {
    body.style.backgroundColor = 'blue';
})

clickPink.addEventListener('dblclick', function() {
    body.style.backgroundColor = 'pink';
})

link.onmouseenter = () => {
    body.style.backgroundColor = 'yellow';
}

link.onmouseleave = () => {
    body.style.backgroundColor = 'white';
}

clickHold.onmouseup = () => {
    body.style.backgroundColor = 'white';
}

clickHold.onmousedown = () => {
    body.style.backgroundColor = 'brown';
}
