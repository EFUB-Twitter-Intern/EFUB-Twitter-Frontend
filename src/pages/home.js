import React from "react";
import styled from "styled-components";
import Trend from "components/Trend";
import Search from "components/Search";
import Follow from "components/Follow";
const right_sidebar = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 30%;
`;
function home(){
    return(
        <right_sidebar>
            <Search/>
            <Trend/>
            <Follow/>
        </right_sidebar>
    );
}
export default home;