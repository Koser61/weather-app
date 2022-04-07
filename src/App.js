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

import { data } from './mockForecastData';

const App = () => {
  const [searchString, changeSearchString] = useState('');

  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const [dataLoadingActive, setDataLoadingActive] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentWeatherData, changeCurrentWeatherData] = useState({});

  const fetchCurrentWeatherData = async () => {
    setShowErrorAlert(false);

    if(searchString !== '') {
      setDataLoaded(false);
      
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }
      };
      const api = {
        url: 'https://community-open-weather-map.p.rapidapi.com',
        endpoint: '/weather',
        urlParams: `q=${searchString}&units=metric`,
      };
      const url = `${api.url}${api.endpoint}?${api.urlParams}`;
  
      try {
        setAlertMessage('');
        setDataLoadingActive(true);

        const response = await fetch(url, options);
        const data = await response.json();

        if(response.ok) {
          changeCurrentWeatherData(data);
          setDataLoaded(true);
          setDataLoadingActive(false);
        } else {
          if(data.cod === '404') {
            setAlertMessage("Couldn't find given location");
            setShowErrorAlert(true);
            setDataLoadingActive(false);
          } else {
            setAlertMessage('Sorry, something went wrong');
            setShowErrorAlert(true);
            setDataLoadingActive(false);
          }
        }
      } catch(error) {
        console.error(error);
        setAlertMessage('Sorry, something went wrong');
        setShowErrorAlert(true);
        setDataLoadingActive(false);
      }
    } else {
      setAlertMessage('Please enter location to search');
      setShowErrorAlert(true);
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
              onClickFunc={fetchCurrentWeatherData}
              loading={dataLoadingActive}
              error={showErrorAlert}
            />
          </SearchBar>
        </Container>
      </Header>
      <main>
        <Container alert>
          <AnimateMount show={showErrorAlert} variant='horizontalFadeInOut'>
            <Alert
              message={alertMessage}
              onCloseFunc={setShowErrorAlert}
            />
          </AnimateMount>
        </Container>
        <Container>
          <AnimateMount show={dataLoaded} variant='verticalFadeInOut'>
            <CurrentWeather data={currentWeatherData} />
          </AnimateMount>
          <WeatherForecast data={data} />
        </Container>
      </main>
    </>
  );
}

export default App;
