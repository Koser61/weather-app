
# weather-app

This project is a ***weather forecast app***.

It uses Open Weather Map API to fetch weather data for searched location.

It was made to practice **async/await** syntax,  **react-spring animations** and learn how to implement simple proxy for API calls.
  

### Live demo [_here_](https://vast-refuge-29818.herokuapp.com/).

>*If page is loading - please wait, server is waking up (free Heroku hosting).*
  

## Table of Contents

* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Local environment](#local-environment)  
  

## Technologies Used

- HTML5
- SCSS
- JavaScript *(ES6+)*
- React
- React Spring
- Axios
- Express.js
  

## Features

-  **Search for any city and display:**
	- Current weather 
	- Weather forecast (5 days - data every 3 hours)
  

## Setup
Make sure you have [_Node.js_](https://nodejs.org/en/) runtime installed.

Install project dependencies using **yarn** package manager CLI command:
>  `yarn install`
  

## Local environment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  
### Start local development server:
1. Start API proxy:
>  `yarn start:backend`
2. Start local development server:
>  `yarn start:frontend`
  
  ### Serve production build locally:
1. Create production build:
>  `yarn build`
2. Serve build folder:
>  `yarn serve:production`
  