import { useState } from 'react';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchInput from './components/SearchInput/SearchInput';
import SearchButton from './components/SearchButton/SearchButton';
import Container from './components/Container/Container';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Alert from './components/Alert/Alert';
import AnimateMount from './components/AnimateMount/AnimateMount';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';

import './App.scss';

const App = () => {
  const [searchString, changeSearchString] = useState('');

  const [currentWeatherLoading, setCurrentWeatherLoading] = useState(false);
  const [currentWeatherLoaded, setCurrentWeatherLoaded] = useState(false);
  const [currentWeatherError, setCurrentWeatherError] = useState(false);
  const [currentWeatherErrorMsg, setCurrentWeatherErrorMsg] = useState('');
  
  const [currentWeatherData, changeCurrentWeatherData] = useState({});
  
  const [weatherForecastLoading, setWeatherForecastLoading] = useState(false);
  const [weatherForecastLoaded, setWeatherForecastLoaded] = useState(false);
  const [weatherForecastError, setWeatherForecastError] = useState(false);
  const [weatherForecastErrorMsg, setWeatherForecastErrorMsg] = useState('');
  
  const [weatherForecastData, changeWeatherForecastData] = useState({});

  const fetchCurrentWeatherData = async () => {
    setCurrentWeatherError(false);

    if(searchString !== '') {
      setCurrentWeatherLoaded(false);
      
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }
      };
      const api = {
        url: 'https://community-open-weather-map.p.rapidapi.com',
        endpoint: 'weather',
        urlParams: `q=${searchString}&units=metric`,
      };
      const url = `${api.url}/${api.endpoint}?${api.urlParams}`;
  
      try {
        setCurrentWeatherErrorMsg('');
        setCurrentWeatherLoading(true);

        const response = await fetch(url, options);
        const data = await response.json();

        if(response.ok) {
          changeCurrentWeatherData(data);
          setCurrentWeatherLoaded(true);
          setCurrentWeatherLoading(false);
        } else {
          if(data.cod === '404') {
            setCurrentWeatherErrorMsg("Couldn't find given location");
            setCurrentWeatherError(true);
            setCurrentWeatherLoading(false);
          } else {
            setCurrentWeatherErrorMsg('Sorry, something went wrong');
            setCurrentWeatherError(true);
            setCurrentWeatherLoading(false);
          }
        }
      } catch(error) {
        console.error(error);
        setCurrentWeatherErrorMsg('Sorry, something went wrong');
        setCurrentWeatherError(true);
        setCurrentWeatherLoading(false);
      }
    } else {
      setCurrentWeatherErrorMsg('Please enter location to search');
      setCurrentWeatherError(true);
    }
  };

  const fetchWeatherForecastData = async () => {
    setWeatherForecastError(false);

    if(searchString !== '') {
      setWeatherForecastLoaded(false);
      
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }
      };
      const api = {
        url: 'https://community-open-weather-map.p.rapidapi.com',
        endpoint: 'forecast',
        urlParams: `q=${searchString}&units=metric`,
      };
      const url = `${api.url}/${api.endpoint}?${api.urlParams}`;
  
      try {
        setWeatherForecastErrorMsg('');
        setWeatherForecastLoading(true);

        const response = await fetch(url, options);
        const data = await response.json();

        if(response.ok) {
          changeWeatherForecastData(data);
          setWeatherForecastLoaded(true);
          setWeatherForecastLoading(false);
        } else {
          if(data.cod === '404') {
            setWeatherForecastErrorMsg("Couldn't find given location");
            setWeatherForecastError(true);
            setWeatherForecastLoading(false);
          } else {
            setWeatherForecastErrorMsg('Sorry, something went wrong');
            setWeatherForecastError(true);
            setWeatherForecastLoading(false);
          }
        }
      } catch(error) {
        console.error(error);
        setWeatherForecastErrorMsg('Sorry, something went wrong');
        setWeatherForecastError(true);
        setWeatherForecastLoading(false);
      }
    } else {
      setWeatherForecastErrorMsg('Please enter location to search');
      setWeatherForecastError(true);
    }
  };

  const handleSearchClick = () => {
    fetchCurrentWeatherData();
    fetchWeatherForecastData();
  };

  return (
    <>
      <Header>
        <Container>
          <SearchBar>
            <SearchInput
              value={searchString}
              onChangeFunc={changeSearchString}
            />
            <SearchButton
              onClickFunc={handleSearchClick}
              loading={currentWeatherLoading && weatherForecastLoading}
              error={currentWeatherError || weatherForecastError}
            />
          </SearchBar>
        </Container>
      </Header>
      <main>
        <Container alert>
          <AnimateMount
            show={currentWeatherError}
            variant='horizontalFadeInOut'
          >
            <Alert
              message={currentWeatherErrorMsg}
              onCloseFunc={setCurrentWeatherError}
            />
          </AnimateMount>
          <AnimateMount
            show={weatherForecastError}
            variant='horizontalFadeInOut'
          >
            <Alert
              message={weatherForecastErrorMsg}
              onCloseFunc={setWeatherForecastError}
            />
          </AnimateMount>
        </Container>
        <Container>
          <AnimateMount
            show={currentWeatherLoaded}
            variant='verticalFadeInOut'
          >
            <CurrentWeather data={currentWeatherData} />
          </AnimateMount>
          <AnimateMount
            show={weatherForecastLoaded}
            variant='verticalFadeInOut'
          >
            <WeatherForecast data={weatherForecastData} />
          </AnimateMount>
        </Container>
      </main>
    </>
  );
}

export default App;
