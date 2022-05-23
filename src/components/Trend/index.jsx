import React from 'react';
import {StyledRoot,TrendsContainer,TrendsTitle,TrendsMore,Trendshow} from "./Style";

function Trend() {
  return (
    <>
      <StyledRoot>
        <TrendsContainer>
          <TrendsTitle>
            이 시각 트렌드
          </TrendsTitle>
          <Trendshow>#시험기간</Trendshow>
          <Trendshow>#크런키</Trendshow>
           <TrendsMore>더 보기</TrendsMore>
        </TrendsContainer>
      </StyledRoot>
    </>
  );
}
export default Trend;
