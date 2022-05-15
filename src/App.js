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
    setCurrentWeatherLoaded(false);
    
    const urlParams = `q=${searchString}&units=metric`;
    const url = `/current?${urlParams}`;
  
    try {
      setCurrentWeatherErrorMsg('');
      setCurrentWeatherLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      const responseCode = parseInt(data.cod);

      if(responseCode >= 200 && responseCode <= 299) {
        changeCurrentWeatherData(data);
        setCurrentWeatherLoaded(true);
        setCurrentWeatherLoading(false);
      } else if (responseCode === 404) {
        setCurrentWeatherErrorMsg("Couldn't find given location");
        setCurrentWeatherError(true);
        setCurrentWeatherLoading(false);
      } else {
        setCurrentWeatherErrorMsg('Sorry, something went wrong');
        setCurrentWeatherError(true);
        setCurrentWeatherLoading(false);
      }
    } catch(error) {
      console.error(error);
      setCurrentWeatherErrorMsg('Sorry, something went wrong');
      setCurrentWeatherError(true);
      setCurrentWeatherLoading(false);
    }
  };

  const fetchWeatherForecastData = async () => {
    setWeatherForecastError(false);
    setWeatherForecastLoaded(false);
    
    const urlParams = `q=${searchString}&units=metric`;
    const url = `/forecast?${urlParams}`;
  
    try {
      setWeatherForecastErrorMsg('');
      setWeatherForecastLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      const responseCode = parseInt(data.cod);

      if(responseCode >= 200 && responseCode <= 299) {
        changeWeatherForecastData(data);
        setWeatherForecastLoaded(true);
        setWeatherForecastLoading(false);
      } else if (responseCode === 404) {
        setWeatherForecastErrorMsg("Couldn't find given location");
        setWeatherForecastError(true);
        setWeatherForecastLoading(false);
      } else {
        setWeatherForecastErrorMsg('Sorry, something went wrong');
        setWeatherForecastError(true);
        setWeatherForecastLoading(false);
      }
    } catch(error) {
      console.error(error);
      setWeatherForecastErrorMsg('Sorry, something went wrong');
      setWeatherForecastError(true);
      setWeatherForecastLoading(false);
    }
  };

  const handleSearchClick = () => {
    if(searchString !== '') {
      fetchCurrentWeatherData();
      fetchWeatherForecastData();
    } else {
      setCurrentWeatherErrorMsg('Please enter location to search');
      setCurrentWeatherError(true);
      setWeatherForecastErrorMsg('Please enter location to search');
      setWeatherForecastError(true);
    }
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
