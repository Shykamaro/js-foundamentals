const circleElements = document.querySelectorAll(".circle");

circleElements.forEach((circleElement) => {
  const dataAnimValue = circleElement.getAttribute("data-anim");

  circleElement.classList.add(dataAnimValue);

  if (circleElement.classList.contains(dataAnimValue)) {
    console.log(`Анімація ${dataAnimValue} застосована.`);
  }
});
