// **** **** **** **** **** **** **** EVERYTHING BELOW HANDLES THE API FETCH FUNCTIONS AND DISPLAYS THE PRODUCTS
// -------- -------- -------- -------- Universal fetch function
var fetchApi = async (url) => {
  // Execute a try and catch block to catch if there is no network
  try {
    var res = '';
    // Specific URLs require specific options
    url == amazonUrl
      ? // If the url is for Amazon, include options
        (res = await fetch(url, amazonOptions))
      : // else fetch without options
        (res = await fetch(url));

    var data = await res.json();

    // If the response is 400...
    if (res.status >= 400) {
      // That means no proper data was returned
      alert('No data returned');
    } else {
      // Otherwise the data returned successfully
      console.log(data);
      if (url == amazonUrl) {
        displayProduct(data);
      }
    }
    // If there is no network connection, execute the catch block function
  } catch (error) {
    alert('Failed to connect to API due to network issues');
  }
};

// -------- -------- -------- -------- WeatherAPI setup
var APIKEY = '6aa15f30207248b9b2b135920223003';
var searchedCity = 'Toronto';
var weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${searchedCity}&aqi=no`;
// The above url returns the CURRENT weather, for the five-day forecast, there is a different URL
// https://www.weatherapi.com/docs/#apis-forecast < Link to forecast doc

// -------- -------- -------- -------- RapidAPI (Amazon) setup
const amazonOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'amazon23.p.rapidapi.com',
    'X-RapidAPI-Key': 'ffae5646afmshec63d61fbd07b2fp17ee73jsn3371d91d22c0',
  },
};

// For now i hardcoded 'ipad' but this data will be returned from user input
var searchTerm = 'ipad';
var amazonUrl = `https://amazon23.p.rapidapi.com/product-search?query=${searchTerm}&country=US`;

// -------- -------- -------- -------- Executing the fetch
// Fetch function is reusable - Required: Include the API url as the parameter
// fetchApi(weatherUrl); // This fetches for the weather data
// fetchApi(amazonUrl); // This fetches from the Amazon data (1998 calls remaining (Mar 31/2022 @ 7:32PM EST))

// -------- -------- -------- -------- Displaying the amazon product(s)
// Only showing 1 products for testing purposes, will include a loop to iterate over all products for final application
// This function updates the HTML elements with the appropriate data from the fetch function
function displayProduct(data) {
  var productTitleEl = document.getElementById('product-title');
  var productTitle = data.result[0].title;
  productTitleEl.textContent = productTitle;

  var productImgEl = document.getElementById('product-img');
  var productImg = data.result[0].thumbnail;
  productImgEl.src = productImg;
  productImgEl.alt = searchTerm;

  var productPriceEl = document.getElementById('product-price');
  var productImg = data.result[0].price.current_price;
  productPriceEl.textContent = `$${productImg}`;

  var productLinkEl = document.getElementById('product-link');
  var productLink = data.result[0].url;
  productLinkEl.href = productLink;
  productLinkEl.innerText = 'Link to product page';
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
      item.value.length > 0 ? (tempParams[0] = true) : (tempParams[0] = false);
    }
    if (item.id == 'form-age') {
      item.value.length > 0 ? (tempParams[1] = true) : (tempParams[1] = false);
    }
    if (item.id == 'form-city') {
      item.value.length > 0 ? (tempParams[2] = true) : (tempParams[2] = false);
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

  // Update document title
  document.title = 'Wearther - Main';

  // Update an element to show the submitted data (TEMPORARY ELEMENT JUST TO SEE THE DATA)
  var tempEl = document.getElementById('submitted-data');
  tempEl.textContent = `Name: ${selectedName}, Age: ${selectedAge}, Gender: ${selectedGender}, 
    Preferred clothing size: ${selectedClothingSize}, City: ${selectedCity}`;

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
      btnLabel == 'Home' ? gotoHome() : gotoFavourites();
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
