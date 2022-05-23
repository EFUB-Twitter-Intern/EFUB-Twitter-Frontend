import './App.css';
import Follow from 'components/Follow';
import Trend from 'components/Trend';
import Search from 'components/Search';
import Twitts from 'components/Twitts';
import React from 'react';
function App() {
  return(
    <div>
      <Search></Search>
      <Trend></Trend>
      <Follow></Follow>
    </div>
  )
};

export default App;
