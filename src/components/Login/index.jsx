import { Container, IdPasswd, IdBtn, PwdBtn } from "./style";
import { TwitLogo, Text } from "components/Menu/style";
import { Twit } from "assets/image";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Container>
      <TwitLogo
        src={Twit}
        alt="twitter logo"
        width="80px"
        height="60px"
        margin="120px 0px 10px 0px"
      />
      <Text fontSize="28px" fontWeight="bold" marginTop="10px">
        Login to Twitter
      </Text>
      <Container margin="50px 0px 10px 0px">
        <IdPasswd type="id" placeholder="phone, email, or username"></IdPasswd>
        <IdPasswd type="password" placeholder="password"></IdPasswd>
      </Container>
      <Link to ="/Home">
        <IdBtn type="button">로그인</IdBtn>
      </Link>
      <Link to = "/join">
        <PwdBtn type="button">회원가입하러 가기</PwdBtn>
      </Link>
    </Container>
  );
};

export default Login;
