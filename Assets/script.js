// These will be used to test the user inputted location for validity
var majorCities = [
  {
    US: [
      'Aberdeen',
      'Abilene',
      'Akron',
      'Albany',
      'Albuquerque',
      'Alexandria',
      'Allentown',
      'Amarillo',
      'Anaheim',
      'Anchorage',
      'Ann Arbor',
      'Antioch',
      'Apple valley',
      'Appleton',
      'Arlington',
      'Arvada',
      'Asheville',
      'Athens',
      'Atlanta',
      'Atlantic city',
      'Augusta',
      'Aurora',
      'Austin',
      'Bakersfield',
      'Baltimore',
      'Barnstable',
      'Baton rouge',
      'Beaumont',
      'Bel air',
      'Bellevue',
      'Berkeley',
      'Bethlehem',
      'Billings',
      'Birmingham',
      'Bloomington',
      'Boise',
      'Boise city',
      'Bonita springs',
      'Boston',
      'Boulder',
      'Bradenton',
      'Bremerton',
      'Bridgeport',
      'Brighton',
      'Brownsville',
      'Bryan',
      'Buffalo',
      'Burbank',
      'Burlington',
      'Cambridge',
      'Canton',
      'Cape coral',
      'Carrollton',
      'Cary',
      'Cathedral city',
      'Cedar rapids',
      'Champaign',
      'Chandler',
      'Charleston',
      'Charlotte',
      'Chattanooga',
      'Chesapeake',
      'Chicago',
      'Chula vista',
      'Cincinnati',
      'Clarke county',
      'Clarksville',
      'Clearwater',
      'Cleveland',
      'College station',
      'Colorado springs',
      'Columbia',
      'Columbus',
      'Concord',
      'Coral springs',
      'Corona',
      'Corpus christi',
      'Costa mesa',
      'Dallas',
      'Daly city',
      'Danbury',
      'Davenport',
      'Davidson county',
      'Dayton',
      'Daytona beach',
      'Deltona',
      'Denton',
      'Denver',
      'Des moines',
      'Detroit',
      'Downey',
      'Duluth',
      'Durham',
      'El monte',
      'El paso',
      'Elizabeth',
      'Elk grove',
      'Elkhart',
      'Erie',
      'Escondido',
      'Eugene',
      'Evansville',
      'Fairfield',
      'Fargo',
      'Fayetteville',
      'Fitchburg',
      'Flint',
      'Fontana',
      'Fort collins',
      'Fort lauderdale',
      'Fort smith',
      'Fort walton Beach',
      'Fort wayne',
      'Fort worth',
      'Frederick',
      'Fremont',
      'Fresno',
      'Fullerton',
      'Gainesville',
      'Garden Grove',
      'Garland',
      'Gastonia',
      'Gilbert',
      'Glendale',
      'Grand prairie',
      'Grand rapids',
      'Grayslake',
      'Green Bay',
      'GreenBay',
      'Greensboro',
      'Greenville',
      'Gulfport biloxi',
      'Hagerstown',
      'Hampton',
      'Harlingen',
      'Harrisburg',
      'Hartford',
      'Havre de grace',
      'Hayward',
      'Hemet',
      'Henderson',
      'Hesperia',
      'Hialeah',
      'Hickory',
      'High point',
      'Hollywood',
      'Honolulu',
      'Houma',
      'Houston',
      'Howell',
      'Huntington',
      'Huntington beach',
      'Huntsville',
      'Independence',
      'Indianapolis',
      'Inglewood',
      'Irvine',
      'Irving',
      'Jackson',
      'Jacksonville',
      'Jefferson',
      'Jersey city',
      'Johnson city',
      'Joliet',
      'Kailua',
      'Kalamazoo',
      'Kaneohe',
      'Kansas city',
      'Kennewick',
      'Kenosha',
      'Killeen',
      'Kissimmee',
      'Knoxville',
      'Lacey',
      'Lafayette',
      'Lake charles',
      'Lakeland',
      'Lakewood',
      'Lancaster',
      'Lansing',
      'Laredo',
      'Las cruces',
      'Las vegas',
      'Layton',
      'Leominster',
      'Lewisville',
      'Lexington',
      'Lincoln',
      'Little rock',
      'Long beach',
      'Lorain',
      'Los angeles',
      'Louisville',
      'Lowell',
      'Lubbock',
      'Macon',
      'Madison',
      'Manchester',
      'Marina',
      'Marysville',
      'McAllen',
      'McHenry',
      'Medford',
      'Melbourne',
      'Memphis',
      'Merced',
      'Mesa',
      'Mesquite',
      'Miami',
      'Milwaukee',
      'Minneapolis',
      'Miramar',
      'Mission viejo',
      'Mobile',
      'Modesto',
      'Monroe',
      'Monterey',
      'Montgomery',
      'Moreno valley',
      'Murfreesboro',
      'Murrieta',
      'Muskegon',
      'Myrtle beach',
      'Naperville',
      'Naples',
      'Nashua',
      'Nashville',
      'New bedford',
      'New haven',
      'New london',
      'New orleans',
      'New york',
      'Newark',
      'Newburgh',
      'Newport news',
      'Norfolk',
      'Normal',
      'Norman',
      'North charleston',
      'Las vegas',
      'North port',
      'Norwalk',
      'Norwich',
      'Oakland',
      'Ocala',
      'Oceanside',
      'Odessa',
      'Ogden',
      'Oklahoma city',
      'Olathe',
      'Olympia',
      'Omaha',
      'Ontario',
      'Orange',
      'Orem',
      'Orlando',
      'Overland park',
      'Oxnard',
      'Palm bay',
      'Palm springs',
      'Palmdale',
      'Panama city',
      'Pasadena',
      'Paterson',
      'Pembroke pines',
      'Pensacola',
      'Peoria',
      'Philadelphia',
      'Phoenix',
      'Pittsburgh',
      'Plano',
      'Pomona',
      'Pompano beach',
      'Port arthur',
      'Port orange',
      'Port saint Lucie',
      'Port st. Lucie',
      'Portland',
      'Portsmouth',
      'Poughkeepsie',
      'Providence',
      'Provo',
      'Pueblo',
      'Punta gorda',
      'Racine',
      'Raleigh',
      'Rancho cucamonga',
      'Reading',
      'Redding',
      'Reno',
      'Richland',
      'Richmond',
      'Richmond county',
      'Riverside',
      'Roanoke',
      'Rochester',
      'Rockford',
      'Roseville',
      'Round lake beach',
      'Sacramento',
      'Saginaw',
      'Saint louis',
      'Saint paul',
      'Saint petersburg',
      'Salem',
      'Salinas',
      'Salt lake City',
      'San antonio',
      'San bernardino',
      'San buenaventura',
      'San diego',
      'San francisco',
      'San jose',
      'Santa ana',
      'Santa barbara',
      'Santa clara',
      'Santa clarita',
      'Santa cruz',
      'Santa maria',
      'Santa rosa',
      'Sarasota',
      'Savannah',
      'Scottsdale',
      'Scranton',
      'Seaside',
      'Seattle',
      'Sebastian',
      'Shreveport',
      'Simi valley',
      'Sioux city',
      'Sioux falls',
      'South nend',
      'South lyon',
      'Spartanburg',
      'Spokane',
      'Springdale',
      'Springfield',
      'St. louis',
      'St. paul',
      'St. petersburg',
      'Stamford',
      'Sterling heights',
      'Stockton',
      'Sunnyvale',
      'Syracuse',
      'Tacoma',
      'Tallahassee',
      'Tampa',
      'Temecula',
      'Tempe',
      'Thornton',
      'Thousand oaks',
      'Toledo',
      'Topeka',
      'Torrance',
      'Trenton',
      'Tucson',
      'Tulsa',
      'Tuscaloosa',
      'Tyler',
      'Utica',
      'Vallejo',
      'Vancouver',
      'Vero Beach',
      'Victorville',
      'Virginia beach',
      'Visalia',
      'Waco',
      'Warren',
      'Washington',
      'Waterbury',
      'Waterloo',
      'West covina',
      'West valley City',
      'Westminster',
      'Wichita',
      'Wilmington',
      'Winston',
      'Winter haven',
      'Worcester',
      'Yakima',
      'Yonkers',
      'York',
      'Youngstown',
    ],
  },
  {
    CA: [
      //AB
      'Airdrie',
      'Grande prairie',
      'Red ddeer',
      'Beaumont',
      'Hanna',
      'St. albert',
      'Bonnyville',
      'Hinton',
      'Spruce grove',
      'Brazeau',
      'Irricana',
      'Strathcona county',
      'Breton',
      'Lacombe',
      'Strathmore',
      'Calgary',
      'Leduc',
      'Sylvan lake',
      'Camrose',
      'Lethbridge',
      'Swan hills',
      'Canmore',
      'McLennan',
      'Taber',
      'Didzbury',
      'Medicine hat',
      'Turner valley',
      'Drayton valley',
      'Olds',
      'Vermillion',
      'Edmonton',
      'Onoway',
      'Wood buffalo',
      'Ft. saskatchewan',
      'Provost',
      //BC
      'Burnaby',
      'Lumby',
      'Port moody',
      'Cache creek',
      'Maple ridge',
      'Prince george',
      'Castlegar',
      'Merritt',
      'Prince rupert',
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
      'New westminster',
      'Sparwood',
      'Coquitlam',
      'North cowichan',
      'Surrey',
      'Cranbrook',
      'North vancouver',
      'Terrace',
      'Dawson creek',
      'North vancouver',
      'Tumbler',
      'Delta',
      'Osoyoos',
      'Vancouver',
      'Fernie',
      'Parksville',
      'Vancouver',
      'Invermere',
      'Peace river',
      'Vernon',
      'Kamloops',
      'Penticton',
      'Victoria',
      'Kaslo',
      'Port alberni',
      'Whistler',
      'Langley',
      'Port hardy',
      //MB
      'Birtle',
      'Flin flon',
      'Swan river',
      'Brandon',
      'Snow lake',
      'The pas',
      'Cranberry portage',
      'Steinbach',
      'Thompson',
      'Dauphin',
      'Stonewall',
      'Winnipeg',
      //NB
      'Cap pele',
      'Miramichi',
      'Saint john',
      'Fredericton',
      'Moncton',
      'Saint stephen',
      'Grand bay westfield',
      'Oromocto',
      'Shippagan',
      'Grand falls',
      'Port elgin',
      'Sussex',
      'Memramcook',
      'Sackville',
      'Tracadie sheila',
      //NL
      'Argentia',
      'Corner brook',
      'Paradise',
      "Bishop's falls",
      'Labrador city',
      'Portaux basques',
      'Botwood',
      'Mount pearl',
      "St. john's",
      'Brigus',
      //NWT
      'Hay river',
      'Inuvik',
      'Yellowknife',
      //NS
      'Amherst',
      'Hants County',
      'Pictou',
      'Annapolis',
      'Inverness county',
      'Pictou county',
      'Argyle',
      'Kentville',
      'Queens',
      'Baddeck',
      'County of kings',
      'Richmond',
      'Bridgewater',
      'Lunenburg',
      'Shelburne',
      'Cape breton',
      'Lunenburg county',
      'Stellarton',
      'Chester',
      'Mahone bay',
      'Truro',
      'Cumberland county',
      'New glasgow',
      'Windsor',
      'East hants',
      'New minas',
      'Yarmouth',
      'Halifax',
      'Parrsboro',
      //ON
      'Ajax',
      'Halton',
      'Peterborough',
      'Atikokan',
      'Halton hills',
      'Pickering',
      'Barrie',
      'Hamilton',
      'Port bruce',
      'Belleville',
      'Hamilton wentworth',
      'Port burwell',
      'Blandford blenheim',
      'Hearst',
      'Port colborne',
      'Blind river',
      'Huntsville',
      'Port Hope',
      'Brampton',
      'Ingersoll',
      'Prince edward',
      'Brant',
      'James',
      'Quinte west',
      'Brantford',
      'Kanata',
      'Renfrew',
      'Brock',
      'Kincardine',
      'Richmond hill',
      'Brockville',
      'King',
      'Sarnia',
      'Burlington',
      'Kingston',
      'Sault ste. marie',
      'Caledon',
      'Kirkland lake',
      'Scarborough',
      'Cambridge',
      'Kitchener',
      'Scugog',
      'Chatham-kent',
      'Larder lake',
      'Chesterville',
      'Leamington',
      'Smiths Falls',
      'Clarington',
      'Lennox addington',
      'South west oxford',
      'Cobourg',
      'Lincoln',
      'St. catharines',
      'Cochrane',
      'Lindsay',
      'St. thomas',
      'Collingwood',
      'London',
      'Stoney creek',
      'Cornwall',
      'Loyalist township',
      'Stratford',
      'Cumberland',
      'Markham',
      'Sudbury',
      'Deep River',
      'Temagami',
      'Dundas',
      'Merrickville',
      'Thorold',
      'Durham',
      'Milton',
      'Thunder bay',
      'Dymond',
      'Nepean',
      'Tillsonburg',
      'Ear falls',
      'Newmarket',
      'Timmins',
      'East gwillimbury',
      'Niagara',
      'Toronto',
      'East zorra tavistock',
      'Niagara falls',
      'Uxbridge',
      'Elgin',
      'Niagara',
      'Vaughan',
      'Elliot lake',
      'North bay',
      'Wainfleet',
      'Flamborough',
      'North dorchester',
      'Wasaga beach',
      'Fort erie',
      'North dumfries',
      'Waterloo',
      'Fort frances',
      'North york',
      'Waterloo',
      'Gananoque',
      'Norwich',
      'Welland',
      'Georgina',
      'Oakville',
      'Wellesley',
      'Glanbrook',
      'Orangeville',
      'West carleton',
      'Gloucester',
      'Orillia',
      'West lincoln',
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
      'Owen sound',
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
      'Mount royal',
      'Aylmer',
      'Hull',
      'Montreal',
      'Beauport',
      'Joliette',
      'Montreal region',
      'Bromptonville',
      'Jonquiere',
      'Montreal',
      'Brosssard',
      'Lachine',
      'Quebec',
      'Chateauguay',
      'Lasalle',
      'Saint leonard',
      'Chicoutimi',
      'Laurentides',
      'Sherbrooke',
      'Coaticook',
      'LaSalle',
      'Sorel',
      'Coaticook',
      'Laval',
      'Thetford mines',
      'Dorval',
      'Lennoxville',
      'Victoriaville',
      'Drummondville',
      'Levis',
      //SK
      'Avonlea',
      'Melfort',
      'Swift current',
      'Colonsay',
      'Nipawin',
      'Tisdale',
      'Craik',
      'Prince albert',
      'Unity',
      'Creighton',
      'Regina',
      'Weyburn',
      'Eastend',
      'Saskatoon',
      'Wynyard',
      'Esterhazy',
      'Shell lake',
      'Yorkton',
      'Gravelbourg',
      //YT
      'Carcross',
      'Whitehorse',
    ],
  },
];

// **** **** **** **** **** **** **** EVERYTHING BELOW HANDLES THE API FETCH FUNCTIONS AND DISPLAYS THE PRODUCTS / UPDATES WEATHER ELEMENTS

// -------- -------- -------- -------- Universal fetch function
var fetchApi = async (
  weatherUrl,
  selectedAge,
  selectedGender,
  cityCapitalized
) => {
  // Execute a try and catch block to catch if there is no network
  try {
    var res = '';
    var location = '';

    // Keep track of the users location so we can return the correct listings from amazon based on their region
    majorCities[1].CA.forEach((item) => {
      if (item == cityCapitalized) {
        location = 'CA';
      }
    });
    majorCities[0].US.forEach((item) => {
      if (item == cityCapitalized) {
        location = 'US';
      }
    });

    console.log('User is located in:' + location);
    console.log('weather fetching...');
    res = await fetch(weatherUrl);
    var currentWeatherData = await res.json();

    // If the response is 400...
    if (res.status >= 400) {
      // That means no proper data was returned
      console.log('Error 400: No data returned');
    } else {
      // Otherwise the data returned successfully
      console.log('weather', currentWeatherData);

      // Extract lon and lat for the five day forecast data
      var lat = currentWeatherData.location.lat;
      var lon = currentWeatherData.location.lon;

      // NEXT PHASE - Updating the five-day forecast
      var APIKEY2 = '67ad538a4c7356a83bfb4f14c6e9b666';
      var url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKEY2}&units=metric`;
      var res = await fetch(url);
      var fiveDayWeatherData = await res.json();
      console.log('weather five-day forecast', fiveDayWeatherData);

      updateFiveDayIcons(fiveDayWeatherData);

      // Update main date header
      var dateEl = document.getElementById('current-date');
      dateEl.textContent = 'Today:';

      updateMainHero(currentWeatherData);

      // The conditionals below will use the users input values and weather data to return the appropriate
      // amazon search terms (i.e., if user is a young girl and it's cold, search up 'young-girl-sweaters')
      if (selectedGender == 'female') {
        if (selectedAge <= 3) {
          if (
            currentWeatherData.current.temp_c >= -15 &&
            currentWeatherData.current.temp_c <= -5
          ) {
            var searchTerm = 'baby-girl-jackets';
          } else if (
            currentWeatherData.current.temp_c >= -5 &&
            currentWeatherData.current.temp_c <= 5
          ) {
            var searchTerm = 'baby-girl-sweaters';
          } else if (currentWeatherData.current.temp_c >= 5) {
            var searchTerm = 'baby-girl-shirts';
          }
        } else if (selectedAge >= 3 && selectedAge <= 13) {
          if (
            currentWeatherData.current.temp_c >= -15 &&
            currentWeatherData.current.temp_c <= -5
          ) {
            var searchTerm = 'little-girl-jackets';
          } else if (
            currentWeatherData.current.temp_c >= -5 &&
            currentWeatherData.current.temp_c <= 5
          ) {
            var searchTerm = 'little-girl-sweaters';
          } else if (currentWeatherData.current.temp_c >= 5) {
            var searchTerm = 'little-girl-shirts';
          }
        } else if (selectedAge >= 13) {
          if (
            currentWeatherData.current.temp_c >= -15 &&
            currentWeatherData.current.temp_c <= -5
          ) {
            var searchTerm = 'women-jackets';
          } else if (
            currentWeatherData.current.temp_c >= -5 &&
            currentWeatherData.current.temp_c <= 5
          ) {
            var searchTerm = 'women-sweaters';
          } else if (currentWeatherData.current.temp_c >= 5) {
            var searchTerm = 'women-shirts';
          }
        }
      } else if (selectedGender == 'male') {
        if (selectedAge <= 3) {
          if (
            currentWeatherData.current.temp_c >= -15 &&
            currentWeatherData.current.temp_c <= -5
          ) {
            var searchTerm = 'baby-boy-jackets';
          } else if (
            currentWeatherData.current.temp_c >= -5 &&
            currentWeatherData.current.temp_c <= 5
          ) {
            var searchTerm = 'baby-boy-sweaters';
          } else if (currentWeatherData.current.temp_c >= 5) {
            var searchTerm = 'baby-boy-shirts';
          }
        } else if (selectedAge >= 3 && selectedAge <= 13) {
          if (
            currentWeatherData.current.temp_c >= -15 &&
            currentWeatherData.current.temp_c <= -5
          ) {
            var searchTerm = 'little-boy-jackets';
          } else if (
            currentWeatherData.current.temp_c >= -5 &&
            currentWeatherData.current.temp_c <= 5
          ) {
            var searchTerm = 'little-boy-sweaters';
          } else if (currentWeatherData.current.temp_c >= 5) {
            var searchTerm = 'little-boy-shirts';
          }
        } else if (selectedAge >= 13) {
          if (
            currentWeatherData.current.temp_c >= -15 &&
            currentWeatherData.current.temp_c <= -5
          ) {
            var searchTerm = 'men-jackets';
          } else if (
            currentWeatherData.current.temp_c >= -5 &&
            currentWeatherData.current.temp_c <= 5
          ) {
            var searchTerm = 'men-sweaters';
          } else if (currentWeatherData.current.temp_c >= 5) {
            var searchTerm = 'men-shirts';
          }
        }
      } else {
        if (
          currentWeatherData.current.temp_c >= -15 &&
          currentWeatherData.current.temp_c <= -5
        ) {
          var searchTerm = 'unisex-jackets';
        } else if (
          currentWeatherData.current.temp_c >= -5 &&
          currentWeatherData.current.temp_c <= 5
        ) {
          var searchTerm = 'unisex-sweaters';
        } else if (currentWeatherData.current.temp_c >= 5) {
          var searchTerm = 'unisex-shirts';
        }
      }

      // Update hourly icons
      updateHourlyIcons(currentWeatherData);

      // NEXT PHASE - Extracting the amazon listings using the search term
      fetchAmazon(searchTerm, location);
    }

    // If there is no network connection, execute the catch block function
  } catch (error) {
    console.log('Failed to connect to API due to network issues');
  }
};

var fetchAmazon = async (searchTerm, location) => {
  const amazonOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
      'X-RapidAPI-Key': 'ffae5646afmshec63d61fbd07b2fp17ee73jsn3371d91d22c0',
    },
  };

  console.log(`Amazon fetching using this search term: ${searchTerm}...`);
  // Use the below URL to return BASIC information about the product but primarily to return the ASIN number #
  var amazonUrl = `http://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=${searchTerm}&country=${location}&page=1`;
  // Referring to the ASIN number from the above API, we can return more details about the product, for now, the ASIN is hard coded
  // var amazonUrlFull = `https://amazon24.p.rapidapi.com/api/product/B09X24ZQBL?country=US`;
  try {
    res = await fetch(amazonUrl, amazonOptions);
    if (res.status >= 500) {
      console.log('Server side issue, please try again in a few minutes');
    } else {
      var amazonData = await res.json();
      console.log('amazon', amazonData);
      displayProduct(amazonData, searchTerm);
    }
  } catch (error) {
    console.log(
      'Failed to connect to API due to network issues and or page was refreshed'
    );
  }
};

const updateMainHero = (currentWeatherData) => {
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

  if (
    currentWeatherData.current.temp_c >= -15 &&
    currentWeatherData.current.temp_c <= -5
  ) {
    descOpener.textContent = openers[4];
    var randomPick = Math.random();
    if (randomPick >= 0.5) {
      weatherIconEl.src = 'Assets/icons/Female/Cold - clear/woman.png';
    } else {
      weatherIconEl.src = 'Assets/icons/Male/Cold - clear/winter-hat.png';
    }
  } else if (
    currentWeatherData.current.temp_c >= -5 &&
    currentWeatherData.current.temp_c <= 0
  ) {
    descOpener.textContent = openers[3];
    descClothing.textContent = clothing[3];
    if (randomPick >= 0.5) {
      weatherIconEl.src = 'Assets/icons/Female/Cold - clear/winter-jacket.png';
    } else {
      weatherIconEl.src = 'Assets/icons/Male/Cold - snow/jacket.png';
    }
  } else if (
    currentWeatherData.current.temp_c >= 0 &&
    currentWeatherData.current.temp_c <= 5
  ) {
    descOpener.textContent = openers[2];
    descClothing.textContent = clothing[2];
    if (randomPick >= 0.5) {
      weatherIconEl.src = 'Assets/icons/Female/Hot - clear/summer.png';
    } else {
      weatherIconEl.src = 'Assets/icons/Male/Cold - snow/snow.png';
    }
  } else if (
    currentWeatherData.current.temp_c >= 5 &&
    currentWeatherData.current.temp_c <= 10
  ) {
    descOpener.textContent = openers[1];
    descClothing.textContent = clothing[1];
    if (randomPick >= 0.5) {
      weatherIconEl.src = 'Assets/icons/Female/Hot - clear/summer.png';
    } else {
      weatherIconEl.src = 'Assets/icons/Male/Nice - clear/denim-jacket.png';
    }
  } else if (currentWeatherData.current.temp_c >= 10) {
    descOpener.textContent = openers[0];
    descClothing.textContent = clothing[0];
    if (randomPick >= 0.5) {
      weatherIconEl.src = 'Assets/icons/Female/Nice - clear/blouse.png';
    } else {
      weatherIconEl.src = 'Assets/icons/Male/Hot - clear/hawaiian-shirt.png';
    }
  }

  var descCondition = document.getElementById('current-desc-condition');
  var conditions = ['mildly windy', 'windy', 'very windy'];

  if (
    currentWeatherData.current.wind_mph >= 0 &&
    currentWeatherData.current.wind_mph <= 15
  ) {
    descCondition.textContent = conditions[0];
  } else if (
    currentWeatherData.current.wind_mph >= 15 &&
    currentWeatherData.current.wind_mph <= 25
  ) {
    descCondition.textContent = conditions[1];
  } else if (currentWeatherData.current.wind_mph >= 25) {
    descCondition.textContent = conditions[2];
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
    } else if (hourlyTemp >= 0 && hourlyTemp <= 10) {
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

      var clothingIcon = document.getElementById(`clothing-img${i}`);
      if (fivedayTemp >= -15 && fivedayTemp <= -5) {
        var randomPick = Math.random();
        if (randomPick >= 0.5) {
          clothingIcon.src = 'Assets/icons/Female/Cold - clear/woman.png';
        } else {
          clothingIcon.src = 'Assets/icons/Male/Cold - clear/winter-hat.png';
        }
      } else if (fivedayTemp >= -5 && fivedayTemp <= 0) {
        if (randomPick >= 0.5) {
          clothingIcon.src =
            'Assets/icons/Female/Cold - clear/winter-jacket.png';
        } else {
          clothingIcon.src = 'Assets/icons/Male/Cold - snow/jacket.png';
        }
      } else if (fivedayTemp >= 0 && fivedayTemp <= 5) {
        if (randomPick >= 0.5) {
          clothingIcon.src = 'Assets/icons/Female/Hot - clear/summer.png';
        } else {
          clothingIcon.src = 'Assets/icons/Male/Cold - snow/snow.png';
        }
      } else if (fivedayTemp >= 5 && fivedayTemp <= 10) {
        if (randomPick >= 0.5) {
          clothingIcon.src = 'Assets/icons/Female/Hot - clear/summer.png';
        } else {
          clothingIcon.src = 'Assets/icons/Male/Nice - clear/denim-jacket.png';
        }
      } else if (fivedayTemp >= 10) {
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

// **** **** **** **** **** **** **** EVERYTHING BELOW HANDLES ANYTHING WITH LOCAL STORAGE - STORING/PARSING AND DECLARATION
var localUserFavorites = localStorage.getItem('userFavorites');

// If the local storage doesn't exist....
if (localUserFavorites == null) {
  // For this session declare an empty object
  // This will hold the favorited items object (stored locally)
  var userFavourites = [];
  // Otherwise if local storage does exist...
} else {
  // Parse the local data and update the above empty object with the data from local
  localUserFavorites = JSON.parse(localUserFavorites);
  userFavourites = localUserFavorites;
}
var localUserInfo = localStorage.getItem('userInfo');
// If the local storage doesn't exist....
if (localUserInfo == null) {
  // For this session declare an empty object
  // This will hold all the relevant data that needs to be stored locally
  var userInfo = [];
  // Otherwise if local storage does exist...
} else {
  var parent = document.querySelector('.main-parent');
  var introEl = document.querySelector('.intro');
  // Parse the local data and and execute the main function of the applilciation using said data
  localUserInfo = JSON.parse(localUserInfo);
  userInfo = localUserInfo;
  // Then input the data and launch the application
  document.querySelector("select[name='gender']").value = localUserInfo.gender;
  document.getElementById('form-name').value = localUserInfo.name;
  document.getElementById('form-age').value = localUserInfo.age;
  document.getElementById('form-city').value = localUserInfo.location;

  // Update document title
  document.title = 'Wearther - Main';

  // Return the weather data for the searched up city
  var APIKEY = '6aa15f30207248b9b2b135920223003';
  var weatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${localUserInfo.location.toLowerCase()}&aqi=no`;
  fetchApi(
    weatherUrl,
    localUserInfo.age,
    localUserInfo.gender,
    localUserInfo.location
  );

  // Hide the intro page
  introEl.classList.add('inactive');
  // Reveal the main section
  parent.classList.remove('inactive');

  // After the main container is revealed (display: unset), execute event listener for the nav buttons
  handleNavBtns();

  var cityChoseEl = document.getElementById('city-chosen');
  var descNameEl = document.getElementById('current-desc-name');
  descNameEl.textContent = localUserInfo.name;
  cityChoseEl.textContent = localUserInfo.location;
}

// Console log local object
console.log(localUserFavorites, localUserInfo);

// -------- -------- -------- -------- Displaying the amazon product(s)
// This function updates the HTML elements with the appropriate data from the fetch function
function displayProduct(data, searchTerm) {
  var loadingEl = document.getElementById('loading-listings');
  var amazonHeader = document.getElementById('amazon-header');
  if (data.docs.length < 1) {
    loadingEl.innerText =
      'No data returned yet, this may take a few minutes...';
    fetchAmazon(searchTerm);
  } else {
    loadingEl.style.display = 'none'; // Hide the "Loading your daily listings...." label
    amazonHeader.style.display = 'unset'; // Show the "Here are your recommended amazon listings" label

    // This iterates over the data for the Amazon products and generates the HTML elements accordingly
    var amazonContainer = document.querySelector('.current-reco-container');
    var numbers = [];
    for (let i = 0; i < data.docs.length; ) {
      var randomClothing = Math.floor(Math.random(0) * data.docs.length);
      numbers.push(randomClothing);
      console.log(randomClothing, numbers);

      if (randomClothing.includes) {
        randomClothing = Math.floor(Math.random(0) * data.docs.length);
      }

      // Generate a unique id per amazon listing
      var uniqueId = Math.floor(Math.random(0) * 100000);
      var newProductEl = document.createElement('div');
      // Assign each product a class of single-product and a unique id
      newProductEl.classList.add('single-product', uniqueId);
      var rawTitle = data.docs[randomClothing].product_title;
      var productTitle = rawTitle.replace(/'/g, '');
      var productImg = data.docs[randomClothing].product_main_image_url;
      var productPrice = data.docs[randomClothing].app_sale_price;
      var productLink = data.docs[randomClothing].product_detail_url;
      // In the star button, for easy access laate ron, we stoer all the product details as data attributes
      newProductEl.innerHTML = `
      <p id="product-title">${productTitle}</p>
      <div id='product-img-container'> 
        <img data-id='${uniqueId}' data-title='${productTitle}' data-price='${productPrice}' data-link='${productLink}' data-img='${productImg}' class="star-btn" src="star.png" />
        <img id="product-img" src="${productImg}" alt="${productTitle}" />
      </div>
      <p id="product-price">$${productPrice}</p>
      <a id="product-link" href="${productLink}" target="_blank">Link to Amazon</a>`;
      amazonContainer.appendChild(newProductEl);

      i++;
      if (i == 4) {
        break;
      }
    }
    favoriteItem();
  }
}

// -------- -------- -------- -------- Handle favorite item functions
function favoriteItem() {
  // This handles the star button event listeners (Favourite)
  var starBtn = document.querySelectorAll('.star-btn');
  starBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
      // We will use the below boolean to handle storing items to local storage
      var uniqueItem = true;
      var favProductTitle = e.target.dataset.title;
      var favProductImg = e.target.dataset.img;
      var favProductPrice = e.target.dataset.price;
      var favProductLink = e.target.dataset.link;
      var favProductId = e.target.dataset.id;

      e.target.style.opacity = '0.5';
      e.target.style.cursor = 'default';

      // Check if the items exist in local storage, if not, store it
      checkFavItems(
        uniqueItem,
        favProductTitle,
        favProductImg,
        favProductPrice,
        favProductLink,
        favProductId,
        e
      );
    });
  });
}

function checkFavItems(
  uniqueItem,
  favProductTitle,
  favProductImg,
  favProductPrice,
  favProductLink,
  favProductId,
  e
) {
  // If the product exists in the object..
  userFavourites.forEach((item) => {
    if (
      item.link == favProductLink &&
      item.img == favProductImg &&
      item.title == favProductTitle
    ) {
      // Set boolean to false so we don't add it again
      uniqueItem = false;
    }
  });

  if (uniqueItem) {
    userFavourites.push({
      title: favProductTitle,
      price: favProductPrice,
      link: favProductLink,
      img: favProductImg,
      id: favProductId,
    });

    // Then push it to the local storage
    localStorage.setItem('userFavorites', JSON.stringify(userFavourites));
  }
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

  // Check if the selected city is in the cities object
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
    console.log('User did not choose a valid city');
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
  //  Specificlaly, we capitalize the first letter of the city to test against the majorCities object strings
  var cityCapitalized =
    selectedCity[0].toUpperCase() + selectedCity.substring(1);

  var cityChoseEl = document.getElementById('city-chosen');
  var descNameEl = document.getElementById('current-desc-name');
  descNameEl.textContent = selectedName;
  cityChoseEl.textContent = cityCapitalized;

  // Save the inputted data to an object
  userInfo = {
    name: selectedName,
    age: selectedAge,
    location: cityCapitalized,
    gender: selectedGender,
  };
  // Then push it to the local storage
  localStorage.setItem('userInfo', JSON.stringify(userInfo));

  // Update document title
  document.title = 'Wearther - Main';

  // Return the weather data for the searched up city
  var APIKEY = '6aa15f30207248b9b2b135920223003';
  var weatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${selectedCity.toLowerCase()}&aqi=no`;
  fetchApi(weatherUrl, selectedAge, selectedGender, cityCapitalized);

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
var favContainer = document.getElementById('favourites-container');
var favourites = document.querySelector('.favourites');
var goBackBtn = document.getElementById('go-back');
function gotoFavourites() {
  document.title = 'Wearther - Favorites'; // Update document title
  navEl.classList.add('inactive');
  favourites.classList.remove('inactive');
  data.classList.add('inactive');

  generateFavEl();

  goBackBtn.addEventListener('click', () => {
    gotoMain();
  });
}

function generateFavEl() {
  favContainer.innerHTML = '';

  if (!userFavourites.length == 0) {
    for (let i = 0; i < userFavourites.length; i++) {
      // Generate a unique id per amazon listing
      var favProductEl = document.createElement('div');
      // Assign each product a class of single-product and a unique id
      favProductEl.classList.add('fav-single-product');

      var productTitle = userFavourites[i].title;
      var productImg = userFavourites[i].img;
      var productPrice = userFavourites[i].price;
      var productLink = userFavourites[i].link;
      // In the star button, for easy access laate ron, we stoer all the product details as data attributes
      favProductEl.innerHTML = `
          <img id="product-img" src="${productImg}" alt="${productTitle}" />
          <p id="product-price">$${productPrice}</p>
          <a id="product-link" href="${productLink}" target="_blank">Link to Amazon</a>
          <button class='remove-fav'>Remove from favorites</button>`;
      favContainer.appendChild(favProductEl);
    }
  }
  removeFavItems();
}

function removeFavItems() {
  var favItems = document.querySelectorAll('.remove-fav');
  if (favItems) {
    favItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        var parentEl = e.path[1];
        var currentImgSrc = e.path[1].childNodes[1].currentSrc;
        var currentLink = e.path[1].childNodes[5].href;

        userFavourites.forEach((item) => {
          if (item.link == currentLink && item.img == currentImgSrc) {
            // Extract the index of that specific object in the array
            const index = userFavourites.indexOf(item);

            // Then remove it...
            if (index > -1) {
              userFavourites.splice(index, 1); // 2nd parameter means remove one item only
            }

            // And push the new objeect to local storage
            localStorage.setItem(
              'userFavorites',
              JSON.stringify(userFavourites)
            );

            parentEl.remove();
          }
        });
      });
    });
  }
}

// Goes to the home page (intro with the form)
// Refresh states and clear local storage
function gotoHome() {
  location.reload();
  localStorage.clear();
  validCity = false;
}
