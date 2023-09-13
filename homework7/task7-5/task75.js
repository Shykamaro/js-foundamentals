const button = document.getElementById('1');
const div = document.getElementById('2');

button.addEventListener('click', function() {
    const p = document.createElement('p');
    p.textContent = "I was pressed";
    div.append(p);
})

button.onmouseenter = () => {
    const p = document.createElement('p');
    p.textContent = "Mouse on me";
    div.append(p);
}

button.onmouseleave = () => {
    const p = document.createElement('p');
    p.textContent = "Mouse is not on me";
    div.append(p);
}