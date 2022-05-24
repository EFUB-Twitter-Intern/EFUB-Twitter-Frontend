import {
  Container,
  Up,
  Down,
  Img,
  Text,
  LogoContainer,
  TwitLogo,
  Btn,
  ProfileImg,
  IdAccount,
  Id,
  Account,
  EtcImg,
} from "./style";
import {
  ProfileImage,
  Home,
  Search,
  Alarm,
  Message,
  Bookmark,
  List,
  SubProfile,
  SubEtc,
  Etc,
  Twit,
} from "assets/image";

function Menu() {
  return (
    <>
      <Container>
        <Up>
          <TwitLogo
            src={Twit}
            alt="twitter logo"
            width="45px"
            height="35px"
            margin="0px 0px 10px 0px"
          />
          <LogoContainer>
            <Img src={Home} alt="home logo" />
            <Text fontSize="20px" marginTop="4px">
              홈
            </Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={Search} alt="search logo" />
            <Text fontSize="20px" marginTop="4px">
              탐색하기
            </Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={Alarm} alt="alarm logo" />
            <Text fontSize="20px" marginTop="4px">
              알림
            </Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={Message} alt="message logo" />
            <Text fontSize="20px" marginTop="4px">
              쪽지
            </Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={Bookmark} alt="bookmark logo" />
            <Text fontSize="20px" marginTop="4px">
              북마크
            </Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={List} alt="list logo" />
            <Text fontSize="20px" marginTop="4px">
              리스트
            </Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={SubProfile} alt="profile logo" />
            <Text fontSize="20px" marginTop="4px">
              프로필
            </Text>
          </LogoContainer>
          <LogoContainer>
            <Img src={SubEtc} alt="etc logo" />
            <Text fontSize="20px" marginTop="4px">
              더보기
            </Text>
          </LogoContainer>
          <Btn type="button" height="50px" width="200px" margin="10px">
            트윗하기
          </Btn>
        </Up>
        <Down>
          <ProfileImg src={ProfileImage} alt="profile" />
          <IdAccount>
            <Id>이화연</Id>
            <Account>@ewha_EFUB4</Account>
          </IdAccount>
          <EtcImg src={Etc} alt="etc" />
        </Down>
      </Container>
    </>
  );
}

export default Menu;
