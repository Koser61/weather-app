import { useState } from 'react';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import SearchInput from './components/SearchInput/SearchInput';
import SearchButton from './components/SearchButton/SearchButton';

import './App.scss';

const App = () => {
  const [searchString, changeSearchString] = useState('');

  return (
    <>
      <Header>
        <SearchBar>
          <SearchInput
            value={searchString}
            onChangeFunc={changeSearchString}
          />
          <SearchButton />
        </SearchBar>
      </Header>
    </>
  );
}

export default App;
