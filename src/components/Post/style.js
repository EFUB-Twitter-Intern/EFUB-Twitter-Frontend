import styled from "styled-components";
import { colors } from "styles/styleOption";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0px 0px 50px 300px; */
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 0px 10px;
  position: fixed;
`;

export const Home = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 0px 0px 0px 5px;
`;

export const ChoiceImg = styled.img`
  width: 28px;
  height: px;
  margin-left: 600px;
`;

export const PostTop = styled.div`
  display: flex;
  flex-direction: row;
  margin: 60px 0px 0px 10px;
`;

export const Input = styled.textarea`
  margin: 10px 0px 0px 20px;
  height: 80px;
  width: 550px;
  border: none;
  resize: none;
  word-wrap: break-word;
  word-break: break-word;
  font-size: 20px;
`;

export const PostBottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  justify-content: space-between;
  align-items: baseline;
  margin-left: 50px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0px 0px 0px 25px;
`;

export const PostIcon = styled.img`
  height: 25px;
  width: 25px;
  margin-top: 10px;
  margin-right: 10px;
`;
