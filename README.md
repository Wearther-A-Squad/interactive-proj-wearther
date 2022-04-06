# Project-01: Interactive Project - Wearther

## Contibutors:

- [Carlos Sabbah](https://github.com/csabbah)
- [Ali Momen](https://github.com/alimomen10)
- [Michael Guida](https://github.com/pot-of-coffee)
- [Ferozuddin Zargar](https://github.com/FalconView)
- [Tyler Flynn](https://github.com/tyler94flynn)

#

## Table of Contents

- [Link to Page](#link-to-page)
- [Description](#description)
- [Project Overview](#project-overview)

#

## Link to Page

[https://github.com/Wearther-A-Squad/interactive-proj-wearther](https://github.com/Wearther-A-Squad/interactive-proj-wearther)

## Description / Function

Wearther shows users current weather and a 5-day weather forecast via images of appropriate clothing for said weather. Wearther prompts the user for their name, age, gender, clothing size, and city of interest, and provides:

- Current weather & forecast for current day in 3-hr increments, explained visually with appropriate clothing images.
- 5-day forecast with visual clothing suggestions based on daily average temperature.
- Amazon links to appropriate clothing given today's weather
- The ability to "favourite" amazon items (which saves to local storage) and allow users to visit a favurites pages with a list of all the items they saved.

APIs used include:

- [weatherapi](https://www.weatherapi.com/weather/), for the weather data
- [Amazon](https://rapidapi.com/restyler/api/amazon23/details), for the clothing suggestions

## Project Overview

### User Story

```
AS a USER
I WANT to know the weather in my location
SO THAT I know what to wear
```

### Acceptance Criteria

```
GIVEN prompts about myself and my location
WHEN I input my gender, age, preferred clothing size and location (either by typing the city or using my current location)
THEN I am presented with a main page that provides me recommendations on the clothing based on the season and weather
WHEN I look through the recommendations, i see the product details including product name, price and the links to buy them directly from Amazon
WHEN I click on the star icon of the clothing recommendation, I can visit a new page with all my favorited items
WHEN I go back and look at the five-day forecast, I see small icons of the clothing for each day
THEN if I hover over any day, it will show me a detailed preview of the recommended clothing
WHEN i revisit the application
THEN i am presented with the new data for the day without needing to input my information again

```
