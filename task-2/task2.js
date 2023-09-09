const firstTitle = document.querySelector("h1");
const boxOfLi = document.getElementById("myList");

const finalSpan = document.querySelector("span");
finalSpan.style.display = "none";

const boxOfTitles = document.getElementById("myDiv");
const someTitles = boxOfTitles.getElementsByTagName("p");

boxOfLi.style.display = "flex";
boxOfLi.style.listStyle = "none";

firstTitle.style.backgroundColor = "lime";
someTitles[0].style.fontWeight = "bold";
someTitles[1].style.color = "red";
someTitles[2].style.textDecoration = "underline";
someTitles[3].style.fontStyle = "italic";
