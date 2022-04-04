import { useState } from 'react';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchInput from './components/SearchInput/SearchInput';
import SearchButton from './components/SearchButton/SearchButton';
import Container from './components/Container/Container';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

import './App.scss';

const App = () => {
  const [searchString, changeSearchString] = useState('');

  const [dataLoadingActive, setDataLoadingActive] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);

  const [currentWeatherData, changeCurrentWeatherData] = useState({});

  const fetchCurrentWeatherData = async () => {
    if(searchString !== '') {
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
        setShowErrorAlert(false);
        setDataLoadingActive(true);

        const response = await fetch(url, options);
        const data = await response.json();

        if(response.ok) {
          changeCurrentWeatherData(data);
          setDataLoaded(true);
          setDataLoadingActive(false);
        } else {
          if(data.cod === '404') {
            setAlertMessage("Cannot find given location");
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
      setAlertMessage('Search is empty !');
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
        <Container>
          {dataLoaded &&
            <CurrentWeather data={currentWeatherData} />
          }
        </Container>
      </main>
    </>
  );
}

export default App;
