import React from "react";
import styled from "styled-components";
import Trend from "components/Trend";
import Search from "components/Search";
import Follow from "components/Follow";
import Menu from "components/Menu";
import Post from "components/Post";
import Twitts from "components/Twitts";
import { colors, fonts } from 'styles/styleOption';
const StyledRoot = styled.div`
  padding: 4px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MidSection = styled.div`
  width: 50%;
`;
const HomeContainer = styled.div`
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.white[1]};
  span {
    font-size: ${fonts.size.large};
    font-weight: ${fonts.weight.bold};
  }
`;

const ListSection = styled.div`
  overflow: visible;
`;
const SideSection = styled.div`
  position: sticky;
  top: 0;
  left: ${(props) => props.left};
`;

const Searchwrap = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.white[1]};
  padding: 6px 0;
`;
function Home(){
    return(
        <>
            <StyledRoot>
                <SideSection left = {0}>
                    <Menu/>
                </SideSection>
                <MidSection>
                    <ListSection>
                        <Post/>
                        <Twitts/>
                    </ListSection>
                </MidSection>
                <SideSection>
                    <Searchwrap>
                        <Search/>
                    </Searchwrap>
                    <Trend/>
                    <Follow/>
                </SideSection>
            </StyledRoot>
        </>
    );
}
export default Home;