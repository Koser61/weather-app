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

  //const [errorMessages, changeErrorMessages] = useState([]);
  const [showError, setShowError] = useState(false);

  const [currentWeatherLoading, setCurrentWeatherLoading] = useState(false);
  const [currentWeatherLoaded, setCurrentWeatherLoaded] = useState(false);
  const [currentWeatherErrorMsg, setCurrentWeatherErrorMsg] = useState('');
  
  const [currentWeatherData, changeCurrentWeatherData] = useState({});
  
  const [weatherForecastLoading, setWeatherForecastLoading] = useState(false);
  const [weatherForecastLoaded, setWeatherForecastLoaded] = useState(false);
  const [weatherForecastErrorMsg, setWeatherForecastErrorMsg] = useState('');
  
  const [weatherForecastData, changeWeatherForecastData] = useState({});

  const fetchCurrentWeatherData = async () => {
    setCurrentWeatherLoaded(false);
    setCurrentWeatherLoading(true);
    setCurrentWeatherErrorMsg('');
    
    const urlParams = `q=${searchString}&units=metric`;
    const url = `/current?${urlParams}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();

      const responseCode = parseInt(data.cod);

      if(responseCode >= 200 && responseCode <= 299) {
        changeCurrentWeatherData(data);
        setCurrentWeatherLoaded(true);
        setCurrentWeatherLoading(false);
      } else if (responseCode === 404) {
        setCurrentWeatherErrorMsg('Couldn\'t find given location');
        setShowError(true);
        setCurrentWeatherLoading(false);
      } else {
        setCurrentWeatherErrorMsg('Sorry, something went wrong');
        setShowError(true);
        setCurrentWeatherLoading(false);
      }
    } catch(error) {
      console.error(error);
      setCurrentWeatherErrorMsg('Sorry, something went wrong');
      setShowError(true);
      setCurrentWeatherLoading(false);
    }
  };

  const fetchWeatherForecastData = async () => {
    setWeatherForecastLoaded(false);
    setWeatherForecastLoading(true);
    setWeatherForecastErrorMsg('');
    
    const urlParams = `q=${searchString}&units=metric`;
    const url = `/forecast?${urlParams}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();

      const responseCode = parseInt(data.cod);

      if(responseCode >= 200 && responseCode <= 299) {
        changeWeatherForecastData(data);
        setWeatherForecastLoaded(true);
        setWeatherForecastLoading(false);
      } else if (responseCode === 404) {
        setWeatherForecastErrorMsg('Couldn\'t find given location');
        setShowError(true);
        setWeatherForecastLoading(false);
      } else {
        setWeatherForecastErrorMsg('Sorry, something went wrong');
        setShowError(true);
        setWeatherForecastLoading(false);
      }
    } catch(error) {
      console.error(error);
      setWeatherForecastErrorMsg('Sorry, something went wrong');
      setShowError(true);
      setWeatherForecastLoading(false);
    }
  };

  const handleSearchClick = () => {
    setShowError(false);

    if(searchString !== '') {
      fetchCurrentWeatherData();
      fetchWeatherForecastData();
    } else {
      setCurrentWeatherErrorMsg('Please enter location to search');
      setWeatherForecastErrorMsg('Please enter location to search');
      setShowError(true);
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
              error={showError}
            />
          </SearchBar>
        </Container>
      </Header>
      <main>
        <Container alert>
          <AnimateMount
            show={showError}
            variant='horizontalFadeInOut'
          >
            <Alert
              messages={[currentWeatherErrorMsg, weatherForecastErrorMsg]}
              onCloseFunc={setShowError}
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
