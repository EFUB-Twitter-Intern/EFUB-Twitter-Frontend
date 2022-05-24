import styled from "styled-components";
import { colors, BORDER_RADIUS, fonts  } from "styles/styleOption";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${colors.grey[3]};
  /* margin: 0px 0px 50px 300px; */
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 0px 10px;
`;

export const HomeW = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 0px 0px 0px 5px;
`;

export const ChoiceImg = styled.img`
  width: 28px;
  height: px;
  margin-left: 450px;
`;

export const PostTop = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 0px 10px;
`;

export const Input = styled.textarea`
  margin: 10px 0px 0px 20px;
  height: 80px;
  width: 450px;
  border: none;
  resize: none;
  font-size: ${fonts.size.medium};
`;

export const PostBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  align-items: center;
  button {
    padding: 3px 12px;
    color: ${colors.white[1]};
    font-weight: ${fonts.weight.bold};
    background-color: ${colors.blue[1]};
    border: 1px solid ${colors.blue[1]};
    border-radius: ${BORDER_RADIUS};
    margin-left: 200px;
    margin-bottom: 3px;
  }
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
