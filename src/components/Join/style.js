import styled from "styled-components";
import { colors } from "styles/styleOption";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.margin};
`;

export const Inputdex = styled.input`
  height: 50px;
  width: 400px;
  margin: 10px;
  border: none;
  border-bottom: 0.1px solid ${colors.blue[1]};
`;

export const JoinBtn = styled.button`
  background-color: ${colors.blue[1]};
  color: white;
  font-size: 15px;
  height: 60px;
  width: 400px;
  border: none;
  border-radius: 50px;
`;


