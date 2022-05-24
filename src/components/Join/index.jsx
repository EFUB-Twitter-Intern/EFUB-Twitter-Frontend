import { Container, Inputdex, JoinBtn } from "./Style";
import { TwitLogo, Text } from "components/Menu/style";
import { Twit } from "assets/image";

function Join() {
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
        Join to Twitter
      </Text>
      <Container margin="50px 0px 10px 0px">
        <Inputdex type="id" placeholder="사용자 ID 입력하세요"></Inputdex>
        <Inputdex type="password" placeholder="password 입력"></Inputdex>
        <Inputdex type="password" placeholder="password 확인"></Inputdex>
      </Container>
      <JoinBtn type="button">완료</JoinBtn>
    </Container>
  );
}

export default Join;
