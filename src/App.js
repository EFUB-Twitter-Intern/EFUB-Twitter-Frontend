import Follow from 'components/Follow';
import Trend from 'components/Trend';
import Search from 'components/Search';
import React from 'react';
import styled from 'styled-components';

const Right_sidebar = styled.div`
    align-items: center;
    flex-direction: column;
    width: 25%;
`;
const Wrapper =styled.div`
  flex-direction: row;
`;

function App() {
  return(
    <Wrapper>
      <Right_sidebar>
        <Search></Search>
        <Trend></Trend>
        <Follow></Follow>
      </Right_sidebar>
    </Wrapper>
  )
};

export default App;
