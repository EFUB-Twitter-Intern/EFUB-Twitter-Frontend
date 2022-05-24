import React from "react";
import styled from "styled-components";
import Trend from "components/Trend";
import Search from "components/Search";
import Follow from "components/Follow";
import Menu from "components/Menu";
import Post from "components/Post";
import Twitts from "components/Twitts";
const StyledRoot = styled.div`
  padding: 4px 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MidSection = styled.div`
  width: 50%;
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
  background: transparent;
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