const button = document.getElementById('button');
const select = document.querySelector('select');

button.addEventListener('click', function() {
    if (select.value === 'Peter') {
        select[0].remove();
    } else if (select.value === 'John') {
        select[1].remove();
    } else if (select.value === 'Alice') {
        select[2].remove();
    } else if (select.value === 'Alex') {
        select[3].remove();
    } else {
        select[4].remove();
    }
})
