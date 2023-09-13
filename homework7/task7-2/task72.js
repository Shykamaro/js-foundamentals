const button = document.getElementsByTagName('button');
const text = document.getElementById('text');

button[0].addEventListener('click', function(){
    text.style.color = 'orange';
    text.style.fontSize = '20px';
    text.style.fontFamily = 'Comic Sans MS';
})