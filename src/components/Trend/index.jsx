import React from 'react';
import {StyledRoot,TrendsContainer,TrendsTitle,TrendsTop,TrendsList,TrendsMore} from "./Style";
import {FiMoreHorizontal} from 'react-icons/fi';
function Trend() {
  return (
    <>
      <StyledRoot>
        <TrendsContainer>
          <TrendsTitle>
            <h2>나를 위한 트렌드</h2>
          </TrendsTitle>
            <TrendsTop>
              <TrendsList>
                <span>대한민국에서 트렌드 중</span>
                <h4>#시험기간</h4>
                <span>7850 트윗</span>
              </TrendsList>
              <FiMoreHorizontal style={{ fontSize : 16, marginTop: 30}}/>
            </TrendsTop>
            <TrendsTop>
              <TrendsList>
                <span>대한민국에서 트렌드 중</span>
                <h4>#기말고사</h4>
                <span>8000 트윗</span>
              </TrendsList>
              <FiMoreHorizontal style={{ fontSize : 16, marginTop: 30}}/>
            </TrendsTop>
            <TrendsTop>
              <TrendsList>
                <span>대한민국에서 트렌드 중</span>
                <h4>#버거킹신메뉴</h4>
                <span>1520 트윗</span>
              </TrendsList>
              <FiMoreHorizontal style={{ fontSize : 16, marginTop: 30}}/>
            </TrendsTop>
            <TrendsTop>
              <TrendsList>
                <span>대한민국에서 트렌드 중</span>
                <h4>#안국맛집</h4>
                <span>140 트윗</span>
              </TrendsList>
              <FiMoreHorizontal style={{ fontSize : 16, marginTop: 30}}/>
            </TrendsTop>
          <TrendsMore>더 보기</TrendsMore>
        </TrendsContainer>
      </StyledRoot>
    </>
  );
}export default Trend;
