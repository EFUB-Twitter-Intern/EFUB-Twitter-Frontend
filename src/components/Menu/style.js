import styled from "styled-components";
import { colors } from "styles/styleOption";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 1px; */
  /* margin: 15px 200px 0px 50px; */
`;

export const Up = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const TwitLogo = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  /* width: 45px;
  height: 35px;
  margin-bottom: 10px; */
`;

export const Img = styled.img`
  width: 35px;
  height: 25px;
  margin: 0px 10px 10px 0px;
`;

export const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  text-align: center;
  margin-top: ${(props) => props.marginTop};
  font-weight: ${(props) => props.fontWeight};
`;

export const Btn = styled.button`
  background-color: ${colors.blue[1]};
  color: white;
  font-size: 15px;
  /* height: 50px;
  width: 200px; */
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  border: none;
  border-radius: 50px;
`;

export const Down = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 280px;
`;

export const ProfileImg = styled.img`
  height: 45px;
  width: 45px;
  margin: ${(props) => props.margin};
`;

export const IdAccount = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Id = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: black;
  margin: 10px 0px 5px 10px;
`;

export const Account = styled.div`
  font-size: 12px;
  color: gray;
  margin: 0px 0px 5px 10px;
`;

export const EtcImg = styled.img`
  height: 20px;
  width: 20px;
  margin: 15px;
`;
