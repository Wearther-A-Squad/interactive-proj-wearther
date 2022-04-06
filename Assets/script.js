// **** **** **** **** **** **** **** EVERYTHING BELOW HANDLES THE API FETCH FUNCTIONS AND DISPLAYS THE PRODUCTS

var majorCities = [
  { US: ['New york', 'Chicago'] },
  {
    CA: [
      //AB
      'Airdrie',
      'Grande Prairie',
      'Red Deer',
      'Beaumont',
      'Hanna',
      'St. Albert',
      'Bonnyville',
      'Hinton',
      'Spruce Grove',
      'Brazeau',
      'Irricana',
      'Strathcona County',
      'Breton',
      'Lacombe',
      'Strathmore',
      'Calgary',
      'Leduc',
      'Sylvan Lake',
      'Camrose',
      'Lethbridge',
      'Swan Hills',
      'Canmore',
      'McLennan',
      'Taber',
      'Didzbury',
      'Medicine Hat',
      'Turner Valley',
      'Drayton Valley',
      'Olds',
      'Vermillion',
      'Edmonton',
      'Onoway',
      'Wood Buffalo',
      'Ft. Saskatchewan',
      'Provost',
      //BC
      'Burnaby',
      'Lumby',
      'City of Port Moody',
      'Cache Creek',
      'Maple Ridge',
      'Prince George',
      'Castlegar',
      'Merritt',
      'Prince Rupert',
      'Chemainus',
      'Mission',
      'Richmond',
      'Chilliwack',
      'Nanaimo',
      'Saanich',
      'Clearwater',
      'Nelson',
      'Sooke',
      'Colwood',
      'New Westminster',
      'Sparwood',
      'Coquitlam',
      'North Cowichan',
      'Surrey',
      'Cranbrook',
      'North Vancouver',
      'Terrace',
      'Dawson Creek',
      'North Vancouver',
      'Tumbler',
      'Delta',
      'Osoyoos',
      'Vancouver',
      'Fernie',
      'Parksville',
      'Vancouver',
      'Invermere',
      'Peace River',
      'Vernon',
      'Kamloops',
      'Penticton',
      'Victoria',
      'Kaslo',
      'Port Alberni',
      'Whistler',
      'Langley',
      'Port Hardy',
      //MB
      'Birtle',
      'Flin Flon',
      'Swan River',
      'Brandon',
      'Snow Lake',
      'The Pas',
      'Cranberry Portage',
      'Steinbach',
      'Thompson',
      'Dauphin',
      'Stonewall',
      'Winnipeg',
      //NB
      'Cap-Pele',
      'Miramichi',
      'Saint John',
      'Fredericton',
      'Moncton',
      'Saint Stephen',
      'Grand Bay-Westfield',
      'Oromocto',
      'Shippagan',
      'Grand Falls',
      'Port Elgin',
      'Sussex',
      'Memramcook',
      'Sackville',
      'Tracadie-Sheila',
      //NL
      'Argentia',
      'Corner Brook',
      'Paradise',
      "Bishop's Falls",
      'Labrador City',
      'Portaux Basques',
      'Botwood',
      'Mount Pearl',
      "St. John's",
      'Brigus',
      //NWT
      'Town of Hay River',
      'Town of Inuvik',
      'Yellowknife',
      //NS
      'Amherst',
      'Hants County',
      'Pictou',
      'Annapolis',
      'Inverness County',
      'Pictou County',
      'Argyle',
      'Kentville',
      'Queens',
      'Baddeck',
      'County of Kings',
      'Richmond',
      'Bridgewater',
      'Lunenburg',
      'Shelburne',
      'Cape Breton',
      'Lunenburg County',
      'Stellarton',
      'Chester',
      'Mahone Bay',
      'Truro',
      'Cumberland County',
      'New Glasgow',
      'Windsor',
      'East Hants',
      'New Minas',
      'Yarmouth',
      'Halifax',
      'Parrsboro',
      //ON
      'Ajax',
      'Halton',
      'Peterborough',
      'Atikokan',
      'Halton Hills',
      'Pickering',
      'Barrie',
      'Hamilton',
      'Port Bruce',
      'Belleville',
      'Hamilton-Wentworth',
      'Port Burwell',
      'Blandford-Blenheim',
      'Hearst',
      'Port Colborne',
      'Blind River',
      'Huntsville',
      'Port Hope',
      'Brampton',
      'Ingersoll',
      'Prince Edward',
      'Brant',
      'James',
      'Quinte West',
      'Brantford',
      'Kanata',
      'Renfrew',
      'Brock',
      'Kincardine',
      'Richmond Hill',
      'Brockville',
      'King',
      'Sarnia',
      'Burlington',
      'Kingston',
      'Sault Ste. Marie',
      'Caledon',
      'Kirkland Lake',
      'Scarborough',
      'Cambridge',
      'Kitchener',
      'Scugog',
      'Chatham-Kent',
      'Larder Lake',
      'Souix Lookout CoC Sioux Lookout',
      'Chesterville',
      'Leamington',
      'Smiths Falls',
      'Clarington',
      'Lennox-Addington',
      'South-West Oxford',
      'Cobourg',
      'Lincoln',
      'St. Catharines',
      'Cochrane',
      'Lindsay',
      'St. Thomas',
      'Collingwood',
      'London',
      'Stoney Creek',
      'Cornwall',
      'Loyalist Township',
      'Stratford',
      'Cumberland',
      'Markham',
      'Sudbury',
      'Deep River',
      'Metro Toronto',
      'Temagami',
      'Dundas',
      'Merrickville',
      'Thorold',
      'Durham',
      'Milton',
      'Thunder Bay',
      'Dymond',
      'Nepean',
      'Tillsonburg',
      'Ear Falls',
      'Newmarket',
      'Timmins',
      'East Gwillimbury',
      'Niagara',
      'Toronto',
      'East Zorra-Tavistock',
      'Niagara Falls',
      'Uxbridge',
      'Elgin',
      'Niagara-on-the-Lake',
      'Vaughan',
      'Elliot Lake',
      'North Bay',
      'Wainfleet',
      'Flamborough',
      'North Dorchester',
      'Wasaga Beach',
      'Fort Erie',
      'North Dumfries',
      'Waterloo',
      'Fort Frances',
      'North York',
      'Waterloo',
      'Gananoque',
      'Norwich',
      'Welland',
      'Georgina',
      'Oakville',
      'Wellesley',
      'Glanbrook',
      'Orangeville',
      'West Carleton',
      'Gloucester',
      'Orillia',
      'West Lincoln',
      'Goulbourn',
      'Osgoode',
      'Whitby',
      'Gravenhurst',
      'Oshawa',
      'Wilmot',
      'Grimsby',
      'Ottawa',
      'Windsor',
      'Guelph',
      'Ottawa-Carleton',
      'Woolwich',
      'Haldimand-Norfork',
      'Owen Sound',
      'York',
      //PEI
      'Alberton',
      'Montague',
      'Stratford',
      'Charlottetown',
      'Souris',
      'Summerside',
      'Cornwall',
      //QC
      'Alma',
      'Fleurimont',
      'Longueuil',
      'Amos',
      'Gaspe',
      'Marieville',
      'Anjou',
      'Gatineau',
      'Mount Royal',
      'Aylmer',
      'Hull',
      'Montreal',
      'Beauport',
      'Joliette',
      'Montreal Region',
      'Bromptonville',
      'Jonquiere',
      'Montreal-Est',
      'Brosssard',
      'Lachine',
      'Quebec',
      'Chateauguay',
      'Lasalle',
      'Saint-Leonard',
      'Chicoutimi',
      'Laurentides',
      'Sherbrooke',
      'Coaticook',
      'LaSalle',
      'Sorel',
      'Coaticook',
      'Laval',
      'Thetford Mines',
      'Dorval',
      'Lennoxville',
      'Victoriaville',
      'Drummondville',
      'Levis',
      //SK
      'Avonlea',
      'Melfort',
      'Swift Current',
      'Colonsay',
      'Nipawin',
      'Tisdale',
      'Craik',
      'Prince Albert',
      'Unity',
      'Creighton',
      'Regina',
      'Weyburn',
      'Eastend',
      'Saskatoon',
      'Wynyard',
      'Esterhazy',
      'Shell Lake',
      'Yorkton',
      'Gravelbourg',
      //YT
      'Carcross',
      'Whitehorse',
    ],
  },
];

var date = moment().format('(L)'); // "MM/DD/YYYY"

// -------- -------- -------- -------- Universal fetch function
var fetchApi = async (weatherUrl, selectedAge, selectedGender) => {
  // Execute a try and catch block to catch if there is no network
  try {
    var res = '';

    console.log('weather fetching...');
    res = await fetch(weatherUrl);
    var currentWeatherData = await res.json();

    // If the response is 400...
    if (res.status >= 400) {
      // That means no proper data was returned
      alert('No data returned');
    } else {
      // Otherwise the data returned successfully
      console.log('weather', currentWeatherData);

      // Extract lon and lat for the five day forecast data
      var lat = currentWeatherData.location.lat;
      var lon = currentWeatherData.location.lon;

      // NEXT PHASE - Updating the five-day forecast
      var APIKEY2 = '67ad538a4c7356a83bfb4f14c6e9b666';
      var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKEY2}&units=metric`;
      var res = await fetch(url);
      var fiveDayWeatherData = await res.json();
      console.log('weather five-day forecast', fiveDayWeatherData);

      updateFiveDayIcons(fiveDayWeatherData);

      // Update main date header
      var dateEl = document.getElementById('current-date');
      dateEl.textContent = 'Today:';

      // Update the weather icon
      var weatherIconEl = document.getElementById('current-weather-icon');
      weatherIconEl.src = currentWeatherData.current.condition.icon;
      weatherIconEl.alt = `${currentWeatherData.current.condition.text} - weather icon`;

      var currentTempEl = document.getElementById('current-temp');
      currentTempEl.textContent = `${currentWeatherData.current.temp_c}°C`;

      // This updates the main description based on the weather
      var descOpener = document.getElementById('current-desc-phrase');
      var openers = [
        'a beautiful',
        'a moderately nice',
        'an ok',
        'a very bad',
        "don't go outside",
      ];

      var descClothing = document.getElementById('current-desc-clothing');
      var clothing = ['light', 'medium', 'heavy', 'super-heavy'];
      var weatherIconEl = document.getElementById('current-clothing-icon');

      updateClothingIcons(
        weatherIconEl,
        currentWeatherData,
        clothing,
        descClothing,
        openers,
        descOpener
      );

      var descCondition = document.getElementById('current-desc-condition');
      var conditions = ['mildly windy', 'windy', 'very windy'];

      if (
        currentWeatherData.current.wind_mph > 0 &&
        currentWeatherData.current.wind_mph < 15
      ) {
        descCondition.textContent = conditions[0];
      } else if (
        currentWeatherData.current.wind_mph > 15 &&
        currentWeatherData.current.wind_mph < 25
      ) {
        descCondition.textContent = conditions[1];
      } else if (currentWeatherData.current.wind_mph > 25) {
        descCondition.textContent = conditions[2];
      }

      if (selectedGender == 'female') {
        if (selectedAge <= 3) {
          if (
            currentWeatherData.current.temp_c > -15 &&
            currentWeatherData.current.temp_c < -5
          ) {
            var searchTerm = 'baby-girl-jackets';
          } else if (
            currentWeatherData.current.temp_c > -5 &&
            currentWeatherData.current.temp_c < 5
          ) {
            var searchTerm = 'baby-girl-sweaters';
          } else if (currentWeatherData.current.temp_c > 5) {
            var searchTerm = 'baby-girl-shirts';
          }
        } else if (selectedAge > 3 && selectedAge <= 13) {
          if (
            currentWeatherData.current.temp_c > -15 &&
            currentWeatherData.current.temp_c < -5
          ) {
            var searchTerm = 'little-girl-jackets';
          } else if (
            currentWeatherData.current.temp_c > -5 &&
            currentWeatherData.current.temp_c < 5
          ) {
            var searchTerm = 'little-girl-sweaters';
          } else if (currentWeatherData.current.temp_c > 5) {
            var searchTerm = 'little-girl-shirts';
          }
        } else if (selectedAge > 13) {
          if (
            currentWeatherData.current.temp_c > -15 &&
            currentWeatherData.current.temp_c < -5
          ) {
            var searchTerm = 'women-jackets';
          } else if (
            currentWeatherData.current.temp_c > -5 &&
            currentWeatherData.current.temp_c < 5
          ) {
            var searchTerm = 'women-sweaters';
          } else if (currentWeatherData.current.temp_c > 5) {
            var searchTerm = 'women-shirts';
          }
        }
      } else if (selectedGender == 'male') {
        if (selectedAge <= 3) {
          if (
            currentWeatherData.current.temp_c > -15 &&
            currentWeatherData.current.temp_c < -5
          ) {
            var searchTerm = 'baby-boy-jackets';
          } else if (
            currentWeatherData.current.temp_c > -5 &&
            currentWeatherData.current.temp_c < 5
          ) {
            var searchTerm = 'baby-boy-sweaters';
          } else if (currentWeatherData.current.temp_c > 5) {
            var searchTerm = 'baby-boy-shirts';
          }
        } else if (selectedAge > 3 && selectedAge <= 13) {
          if (
            currentWeatherData.current.temp_c > -15 &&
            currentWeatherData.current.temp_c < -5
          ) {
            var searchTerm = 'little-boy-jackets';
          } else if (
            currentWeatherData.current.temp_c > -5 &&
            currentWeatherData.current.temp_c < 5
          ) {
            var searchTerm = 'little-boy-sweaters';
          } else if (currentWeatherData.current.temp_c > 5) {
            var searchTerm = 'little-boy-shirts';
          }
        } else if (selectedAge > 13) {
          if (
            currentWeatherData.current.temp_c > -15 &&
            currentWeatherData.current.temp_c < -5
          ) {
            var searchTerm = 'men-jackets';
          } else if (
            currentWeatherData.current.temp_c > -5 &&
            currentWeatherData.current.temp_c < 5
          ) {
            var searchTerm = 'men-sweaters';
          } else if (currentWeatherData.current.temp_c > 5) {
            var searchTerm = 'men-shirts';
          }
        }
      } else {
        if (
          currentWeatherData.current.temp_c > -15 &&
          currentWeatherData.current.temp_c < -5
        ) {
          var searchTerm = 'unisex-jackets';
        } else if (
          currentWeatherData.current.temp_c > -5 &&
          currentWeatherData.current.temp_c < 5
        ) {
          var searchTerm = 'unisex-sweaters';
        } else if (currentWeatherData.current.temp_c > 5) {
          var searchTerm = 'unisex-shirts';
        }
      }

      // Update hourly icons
      updateHourlyIcons(currentWeatherData);

      // NEXT PHASE - Extracting the amazon listings using the search term
      fetchAmazon(searchTerm);
    }

    // If there is no network connection, execute the catch block function
  } catch (error) {
    console.log('Failed to connect to API due to network issues');
  }
};

var fetchAmazon = async (searchTerm) => {
  console.log(`Amazon fetching using this search term: ${searchTerm}...`);
  // Use the below URL to return BASIC information about the product but primarily to return the ASIN number #
  var amazonUrl = `https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=${searchTerm}&country=CA&page=1`;
  // Referring to the ASIN number from the above API, we can return more details about the product, for now, the ASIN is hard coded
  // var amazonUrlFull = `https://amazon24.p.rapidapi.com/api/product/B09X24ZQBL?country=US`;
  try {
    res = await fetch(amazonUrl, amazonOptions);
    var amazonData = await res.json();
    console.log('amazon', amazonData);
    displayProduct(amazonData, searchTerm);
  } catch (error) {
    console.log(
      'Failed to connect to API due to network issues and or page was refreshed'
    );
  }
};

const updateClothingIcons = (
  weatherIconEl,
  currentWeatherData,
  clothing,
  descClothing,
  openers,
  descOpener
) => {
  if (
    currentWeatherData.current.temp_c > -15 &&
    currentWeatherData.current.temp_c < -5
  ) {
    descOpener.textContent = openers[4];
    var randomPick = Math.random();
    if (randomPick >= 0.5) {
      weatherIconEl.src = 'Assets/icons/Female/Cold - clear/woman.png';
    } else {
      weatherIconEl.src = 'Assets/icons/Male/Cold - clear/winter-hat.png';
    }
  } else if (
    currentWeatherData.current.temp_c > -5 &&
    currentWeatherData.current.temp_c < 0
  ) {
    descOpener.textContent = openers[3];
    descClothing.textContent = clothing[3];
    if (randomPick >= 0.5) {
      weatherIconEl.src = 'Assets/icons/Female/Cold - clear/winter-jacket.png';
    } else {
      weatherIconEl.src = 'Assets/icons/Male/Cold - snow/jacket.png';
    }
  } else if (
    currentWeatherData.current.temp_c > 0 &&
    currentWeatherData.current.temp_c < 5
  ) {
    descOpener.textContent = openers[2];
    descClothing.textContent = clothing[2];
    if (randomPick >= 0.5) {
      weatherIconEl.src = 'Assets/icons/Female/Hot - clear/summer.png';
    } else {
      weatherIconEl.src = 'Assets/icons/Male/Cold - snow/snow.png';
    }
  } else if (
    currentWeatherData.current.temp_c > 5 &&
    currentWeatherData.current.temp_c < 10
  ) {
    descOpener.textContent = openers[1];
    descClothing.textContent = clothing[1];
    if (randomPick >= 0.5) {
      weatherIconEl.src = 'Assets/icons/Female/Hot - clear/summer.png';
    } else {
      weatherIconEl.src = 'Assets/icons/Male/Nice - clear/denim-jacket.png';
    }
  } else if (currentWeatherData.current.temp_c > 10) {
    descOpener.textContent = openers[0];
    descClothing.textContent = clothing[0];
    if (randomPick >= 0.5) {
      weatherIconEl.src = 'Assets/icons/Female/Nice - clear/blouse.png';
    } else {
      weatherIconEl.src = 'Assets/icons/Male/Hot - clear/hawaiian-shirt.png';
    }
  }
};

const updateHourlyIcons = (currentWeatherData) => {
  for (let i = 9; i <= 22; ) {
    var randomPick = Math.random();

    var hourlyTemp = currentWeatherData.forecast.forecastday[0].hour[i].temp_c;
    var hourlyEl = document.getElementById(`hour-${i}`);
    if (hourlyTemp <= 0) {
      if (randomPick >= 0.5) {
        hourlyEl.src = 'Assets/icons/Male/Cold - snow/jacket.png';
      } else {
        hourlyEl.src = 'Assets/icons/Female/Cold - clear/winter-jacket.png';
      }
    } else if (hourlyTemp > 0 && hourlyTemp < 10) {
      if (randomPick >= 0.5) {
        hourlyEl.src = 'Assets/icons/Female/Nice - clear/blouse.png';
      } else {
        hourlyEl.src = 'Assets/icons/Male/Nice - clear/denim-jacket.png';
      }
    } else if (hourlyTemp >= 10) {
      if (randomPick >= 0.5) {
        hourlyEl.src = 'Assets/icons/Male/Hot - clear/hawaiian-shirt.png';
      } else {
        hourlyEl.src = 'Assets/icons/Male/Hot - clear/sunglasses.png';
      }
    }

    i = i + 3;
  }
};

const updateFiveDayIcons = (fiveDayWeatherData) => {
  for (let i = 0; i < 6; ) {
    // Exclude the first object since we've already used this data for the current weather
    if (i !== 0) {
      var new_date = moment(moment(), 'L').add(i, 'days').format('L'); // Increment the date by 1 day each time
      var fivedayEl = document.querySelectorAll('.five-day-date');
      var fivedayTemp = fiveDayWeatherData.daily[i].temp.day;
      // For each day include the date
      fivedayEl[i - 1].textContent = new_date;
      console.log('Day' + i + 'temp:' + fivedayTemp);

      var clothingIcon = document.getElementById(`clothing-img${i}`);
      if (fivedayTemp > -15 && fivedayTemp < -5) {
        var randomPick = Math.random();
        if (randomPick >= 0.5) {
          clothingIcon.src = 'Assets/icons/Female/Cold - clear/woman.png';
        } else {
          clothingIcon.src = 'Assets/icons/Male/Cold - clear/winter-hat.png';
        }
      } else if (fivedayTemp > -5 && fivedayTemp < 0) {
        if (randomPick >= 0.5) {
          clothingIcon.src =
            'Assets/icons/Female/Cold - clear/winter-jacket.png';
        } else {
          clothingIcon.src = 'Assets/icons/Male/Cold - snow/jacket.png';
        }
      } else if (fivedayTemp > 0 && fivedayTemp < 5) {
        if (randomPick >= 0.5) {
          clothingIcon.src = 'Assets/icons/Female/Hot - clear/summer.png';
        } else {
          clothingIcon.src = 'Assets/icons/Male/Cold - snow/snow.png';
        }
      } else if (fivedayTemp > 5 && fivedayTemp < 10) {
        if (randomPick >= 0.5) {
          clothingIcon.src = 'Assets/icons/Female/Hot - clear/summer.png';
        } else {
          clothingIcon.src = 'Assets/icons/Male/Nice - clear/denim-jacket.png';
        }
      } else if (fivedayTemp > 10) {
        if (randomPick >= 0.5) {
          clothingIcon.src = 'Assets/icons/Female/Nice - clear/blouse.png';
        } else {
          clothingIcon.src = 'Assets/icons/Male/Hot - clear/hawaiian-shirt.png';
        }
      }
    }

    // Since we are only running this loop for a 5 day forecast, break the loop at 5 iterations
    if (i == 6) {
      break;
    }
    i++;
  }
};
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
function displayProduct(data, searchTerm) {
  var loadingEl = document.getElementById('loading-listings');
  var amazonHeader = document.getElementById('amazon-header');
  if (data.docs.length < 1) {
    loadingEl.innerText =
      'No data returned, trying again... (This may take a few minutes)';
    fetchAmazon(searchTerm);
  } else {
    loadingEl.style.display = 'none'; // Hide the "Loading your daily listings...." label
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

  // Check the array along with the options variable values and update the submit button accordingly
  if (tempParams[0] && tempParams[1] && tempParams[2] && selectedGender) {
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
var validCity = false;
var introFormEl = document.getElementById('intro-form');
introFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  var selectedCity = document.getElementById('form-city').value.toLowerCase();
  // Capitalize the first letter so we can test it against the cities object
  var cityCapitalized =
    selectedCity[0].toUpperCase() + selectedCity.substring(1);

  // Check if the selected city is in the cities objeect
  majorCities[1].CA.forEach((item) => {
    if (item == cityCapitalized) {
      validCity = true;
    }
  });
  majorCities[0].US.forEach((item) => {
    if (item == cityCapitalized) {
      validCity = true;
    }
  });

  if (validCity) {
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
    validCity = false;
  } else {
    alert('Choose a valid city');
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
  var selectedCity = document.getElementById('form-city').value;
  var cityCapitalized =
    selectedCity[0].toUpperCase() + selectedCity.substring(1);

  var cityChoseEl = document.getElementById('city-chosen');
  var descNameEl = document.getElementById('current-desc-name');

  descNameEl.textContent = selectedName;
  cityChoseEl.textContent = cityCapitalized;

  // Update document title
  document.title = 'Wearther - Main';

  // Return the weather data for the searched up city
  var APIKEY = '6aa15f30207248b9b2b135920223003';
  var weatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${selectedCity.toLowerCase()}&aqi=no`;
  fetchApi(weatherUrl, selectedAge, selectedGender);

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
  location.reload();
  validCity = false;
}
