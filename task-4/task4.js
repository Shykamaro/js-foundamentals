const submitBtn = document.getElementById('submitBtn');
const outBlock = document.getElementById('outBlock');


submitBtn.addEventListener('click', function (event) {
  event.preventDefault(); 

 
  const inputElements = document.querySelectorAll('.arr');

  
  let formData = '';
  inputElements.forEach((input) => {
    const fieldName = input.getAttribute('data-form');
    const value = input.value;
    formData += `${fieldName}: ${value}<br>`;
  });

 
  outBlock.innerHTML = formData;
});
