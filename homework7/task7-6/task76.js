const block = document.querySelector('.block');
resizeWindow(block);

window.addEventListener('resize', function() {
  resizeWindow(block);
});

function resizeWindow(block) {
  block.innerHTML = `
  <h2>Width: ${window.innerWidth}</h2>
  <h2>Height: ${window.innerHeight}</h2>
  `;
}