import { useState } from 'react';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchInput from './components/SearchInput/SearchInput';
import SearchButton from './components/SearchButton/SearchButton';

import './App.scss';

const App = () => {
  const [searchString, changeSearchString] = useState('');
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
        const response = await fetch(url, options);
  
        if(response.ok) {
          const data = await response.json();

          changeCurrentWeatherData(data);
        }
      } catch(error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Header>
        <SearchBar>
          <SearchInput
            value={searchString}
            onChangeFunc={changeSearchString}
          />
          <SearchButton onClickFunc={fetchCurrentWeatherData} />
        </SearchBar>
      </Header>
    </>
  );
}

export default App;
