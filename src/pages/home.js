import React from "react";
import styled from "styled-components";
import Trend from "components/Trend";
import Search from "components/Search";
import Follow from "components/Follow";
import Menu from "components/Menu";
import Post from "components/Post";
const Left_sidebar = styled.div`
    width:20%;
    align-items: left;
`;
const Right_sidebar = styled.div`
    align-items: right;
    flex-direction: column;
    width: 30%;
    margin-right: 100px;
`;
const Mid_Home = styled.div`
    width:40%;
    align-items: center;
    flex-direction: column;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
function Home(){
    return(
        <Wrapper>
            <Left_sidebar>
                <Menu/>
            </Left_sidebar>
            <Mid_Home>
                <Post/>
            </Mid_Home>
            <Right_sidebar>
                <Search/>
                <Trend/>
                <Follow/>
            </Right_sidebar>
        </Wrapper>
    );
}
export default Home;