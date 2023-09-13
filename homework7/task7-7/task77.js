const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const resultParagraph = document.getElementById("result");

const citiesData = {
  ger: ["Berlin", "Hamburg", "Munich", "Cologne"],
  usa: ["New York", "Los Angeles", "Chicago", "San Francisco"],
  ukr: ["Kyiv", "Kharkiv", "Lviv", "Odessa"],
};

function populateCities() {
  citiesSelect.innerHTML = "";

  const selectedCountry = countrySelect.value;

  const cities = citiesData[selectedCountry];

  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citiesSelect.appendChild(option);
  });

  const selectedCountryName =
    countrySelect.options[countrySelect.selectedIndex].text;
  citiesSelect.addEventListener("change", function () {
    const selectedCity = citiesSelect.value;
    resultParagraph.textContent = `Обрана країна: ${selectedCountryName}, Обране місто: ${selectedCity}`;
  });
}

countrySelect.addEventListener("change", populateCities);

populateCities();
