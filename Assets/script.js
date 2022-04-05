// **** **** **** **** **** **** **** EVERYTHING BELOW HANDLES THE API FETCH FUNCTIONS AND DISPLAYS THE PRODUCTS
// -------- -------- -------- -------- Universal fetch function
var fetchApi = async (url) => {
  // Execute a try and catch block to catch if there is no network
  try {
    var res = '';
    // Specific URLs require specific options
    if (url.includes('amazon24.p')) {
      console.log('amazon fetching...');
      res = await fetch(url, amazonOptions);
    } else {
      // else fetch without options
      console.log('weather fetching...');
      res = await fetch(url);
    }

    var data = await res.json();

    // If the response is 400...
    if (res.status >= 400) {
      // That means no proper data was returned
      alert('No data returned');
    } else {
      // Otherwise the data returned successfully
      if (url.includes('weather')) {
        console.log('weather', data);

        // Update the weather icon
        var weatherIconEl = document.getElementById('current-weather-icon');
        weatherIconEl.src = data.current.condition.icon;
        weatherIconEl.alt = `${data.current.condition.text} - weather icon`;

        var currentTempEl = document.getElementById('current-temp');
        currentTempEl.textContent = `${data.current.feelslike_c}°C`;

        // This updates the main description based on the weather
        var descOpener = document.getElementById('current-desc-phrase');
        var openers = [
          'beautiful',
          'moderately nice',
          'ok',
          'very bad',
          "don't go outside",
        ];

        var descClothing = document.getElementById('current-desc-clothing');
        var clothing = ['light', 'medium', 'heavy', 'super-heavy'];
        if (data.current.feelslike_c > -15 && data.current.feelslike_c < -5) {
          descOpener.textContent = openers[4];
        } else if (
          data.current.feelslike_c > -5 &&
          data.current.feelslike_c < 0
        ) {
          descOpener.textContent = openers[3];
          descClothing.textContent = clothing[3];
        } else if (
          data.current.feelslike_c > 0 &&
          data.current.feelslike_c < 5
        ) {
          descOpener.textContent = openers[2];
          descClothing.textContent = clothing[2];
        } else if (
          data.current.feelslike_c > 5 &&
          data.current.feelslike_c < 10
        ) {
          descOpener.textContent = openers[1];
          descClothing.textContent = clothing[1];
        } else if (data.current.feelslike_c > 10) {
          descOpener.textContent = openers[0];
          descClothing.textContent = clothing[0];
        }

        var descCondition = document.getElementById('current-desc-condition');
        var conditions = ['mildy windy', 'windy', 'very windy'];
        if (data.current.wind_mph > 0 && data.current.wind_mph < 15) {
          descCondition.textContent = conditions[0];
        } else if (data.current.wind_mph > 15 && data.current.wind_mph < 25) {
          descCondition.textContent = conditions[1];
        } else if (data.current.wind_mph > 25) {
          descCondition.textContent = conditions[2];
        }
      } else {
        console.log('amazon', data);
        // Generate the Amazon listing elements
        displayProduct(data);
      }
    }
    // If there is no network connection, execute the catch block function
  } catch (error) {
    alert('Failed to connect to API due to network issues');
  }
};

// -------- -------- -------- -------- WeatherAPI setup
// var APIKEY = '6aa15f30207248b9b2b135920223003';
// var searchedCity = 'Toronto';
// var weatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${searchedCity}&aqi=no`;

// -------- -------- -------- -------- RapidAPI (Amazon) setup
const amazonOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
    'X-RapidAPI-Key': 'ffae5646afmshec63d61fbd07b2fp17ee73jsn3371d91d22c0',
  },
};

// -------- -------- -------- -------- Displaying the amazon product(s)
// Only showing 1 products for testing purposes, will include a loop to iterate over all products for final application
// This function updates the HTML elements with the appropriate data from the fetch function
function displayProduct(data) {
  var amazonHeader = document.getElementById('amazon-header');
  var loadingEl = document.getElementById('loading-listings');
  loadingEl.style.display = 'none'; // Hided the "Loading your daily listings...." label
  amazonHeader.style.display = 'unset'; // Show the "Here are your recommended amazon listings" label

  // This iterates over the data for the Amazon products and generates the HTML elements accordingly
  var amazonContainer = document.querySelector('.current-reco-container');
  for (let i = 0; i < data.docs.length; ) {
    var newProductEl = document.createElement('div');
    newProductEl.classList.add('single-product');
    newProductEl.innerHTML = `
    <p id="product-title">${data.docs[i].product_title}</p>
    <div id='product-img-container'> 
      <img class="star-btn" src="star.png" />
      <img id="product-img" src="${data.docs[i].product_main_image_url}" alt="${data.docs[i].product_title}" />
    </div>
    <p id="product-price">$${data.docs[i].app_sale_price}</p>
    <a id="product-link" href="${data.docs[i].product_detail_url}" target="_blank">Link to Amazon</a>`;
    amazonContainer.appendChild(newProductEl);
    i++;
    if (i == 4) {
      break;
    }
  }

  // This handles the star button event listeners (Favourite)
  var starBtn = document.querySelectorAll('.star-btn');
  starBtn.forEach((item) => {
    item.addEventListener('click', () => {
      alert('You clicked on the favourite button!');
    });
  });
}

// **** **** **** **** **** **** **** EVERYTHING BELOW WILL CHECK THE FORM AS THE DATA IS BEING INPUTTED

// Declare a variable to test upon changes made in the form
var tempParams = [false, false, false];
// The below functions checks all conditions to make sure the form section is fully filled in
function checkInputs() {
  // These 2 variables holds the value of the options in the select container
  var selectedGender = document.querySelector("select[name='gender']").value;
  var selectedClothingSize = document.querySelector(
    "select[name='clothing-size']"
  ).value;

  // Check the array along with the options variable values and update the submit button accordingly
  if (
    tempParams[0] &&
    tempParams[1] &&
    tempParams[2] &&
    selectedGender &&
    selectedClothingSize
  ) {
    formSubmitBtn.disabled = false;
  } else {
    formSubmitBtn.disabled = true;
  }
}

// The below block will add the event listeners for the inputs in the form
var allInputs = document.querySelectorAll('form input');
var formSubmitBtn = document.getElementById('form-submit');
// Iterate through all input fields
allInputs.forEach((item) => {
  // Listen for a keyup....
  item.addEventListener('keyup', () => {
    // Check the item id's
    if (item.id == 'form-name') {
      // If the input field is filled in, update the array with true, else, return false
      item.value.trim() ? (tempParams[0] = true) : (tempParams[0] = false);
    }
    if (item.id == 'form-age') {
      item.value.trim() ? (tempParams[1] = true) : (tempParams[1] = false);
    }
    if (item.id == 'form-city') {
      item.value.trim() ? (tempParams[2] = true) : (tempParams[2] = false);
    }

    // Check the inputs and the selected options, if everything is filled in, active the submit button
    checkInputs();
  });
});

// The below block will add the event listeners for the options in the select container
// The same conditional will execute below as the above one
var dropdownOptions = document.querySelectorAll('.form-dropdown');
dropdownOptions.forEach((item) => {
  item.addEventListener('change', function () {
    // Check the inputs and the selected options, if everything is filled in, active the submit button
    checkInputs();
  });
});

// **** **** **** **** **** **** **** EVERYTHING BELOW HANDLES THE FORM SUBMISSION AND PAGE NAVIGATION

// -------- -------- -------- -------- Intro form submit
var introFormEl = document.getElementById('intro-form');
introFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  // Reveal the main page and save the form data
  handleSubmit();

  // After the main container is revealed (display: unset), execute event listener for the nav buttons
  handleNavBtns();

  // Clears the form
  introFormEl.reset();
  // Clear array so the condition are fresh the next time we try to generate a password
  for (i = 0; i < tempParams.length; i++) {
    tempParams[i] = false;
  }
  // Disable the button so when you revisit the home page, the conditionals re-execute accordingly
  formSubmitBtn.disabled = true;
});

// -------- -------- -------- -------- Post submit functions
// Here we use the form data to fetch from the API and display the MAIN page
var parent = document.querySelector('.main-parent');
var introEl = document.querySelector('.intro');
var submitBtn = document.getElementById('form-submit');
function handleSubmit() {
  // Declare the variables to capture the form values upon submission
  var selectedName = document.getElementById('form-name').value;
  var selectedAge = document.getElementById('form-age').value;
  var selectedGender = document.querySelector("select[name='gender']").value;
  var selectedClothingSize = document.querySelector(
    "select[name='clothing-size']"
  ).value;
  var selectedCity = document.getElementById('form-city').value;
  var cityChoseEl = document.getElementById('city-chosen');
  var descNameEl = document.getElementById('current-desc-name');

  descNameEl.textContent = selectedName;
  cityChoseEl.textContent = selectedCity;

  // Update document title
  document.title = 'Wearther - Main';

  // Return the weather data for the searched up city
  var APIKEY = '6aa15f30207248b9b2b135920223003';
  var weatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${selectedCity}&aqi=no`;
  fetchApi(weatherUrl);

  if (selectedGender == 'female') {
    var searchTerm = 'womenshirt';
  } else if (selectedGender == 'male') {
    var searchTerm = 'maleshirt';
  } else {
    var searchTerm = 'unisexshirt';
  }
  // Use the below URL to return BASIC information about the product but primarily to return the ASIN number #
  var amazonUrl = `https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=${searchTerm}&country=CA&page=1`;
  // Referring to the ASIN number from the above API, we can return more details about the product, for now, the ASIN is hard coded
  // var amazonUrlFull = `https://amazon24.p.rapidapi.com/api/product/B09X24ZQBL?country=US`;
  fetchApi(amazonUrl);

  // Hide the intro page
  introEl.classList.add('inactive');
  // Reveal the main section
  parent.classList.remove('inactive');
}

// -------- -------- -------- -------- Page Handling functions
function handleNavBtns() {
  var navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach((item) => {
    item.addEventListener('click', (e) => {
      var btnLabel = e.target.textContent;
      btnLabel == 'Favorites' ? gotoFavourites() : gotoHome();
    });
  });
}

// Goes back to the main page
var data = document.querySelector('.data');
var navEl = document.getElementById('nav-items');
function gotoMain() {
  document.title = 'Wearther - Main'; // Update document title
  favourites.classList.add('inactive');
  data.classList.remove('inactive');
  navEl.classList.remove('inactive');
}

// Goes to the favourites
var favourites = document.querySelector('.favourites');
var goBackBtn = document.getElementById('go-back');
function gotoFavourites() {
  document.title = 'Wearther - Favorites'; // Update document title
  navEl.classList.add('inactive');
  favourites.classList.remove('inactive');
  data.classList.add('inactive');

  goBackBtn.addEventListener('click', () => {
    gotoMain();
  });
}

// Goes to the home page (intro with the form)
function gotoHome() {
  document.title = 'Wearther - Welcome'; // Update document title
  parent.classList.add('inactive');
  introEl.classList.remove('inactive');
}
