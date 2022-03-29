import { useState } from 'react';

import Header from './components/Header/Header';
import Search from './components/Search/Search';

import './App.scss';

const App = () => {
  const [searchString, changeSearchString] = useState('');

  return (
    <>
      <Header>
        <Search
          value={searchString}
          onChangeFunc={changeSearchString}
        />
      </Header>
    </>
  );
}

export default App;
