import {
  Container,
  Top,
  PostTop,
  Input,
  PostBottom,
  HomeW,
  ChoiceImg,
  PostIcon,
  Icon,
} from "./style";
import { ProfileImg, Btn } from "components/Menu/style";
import {
  ProfileImage,
  Choice,
  Gallery,
  Gif,
  Graph,
  Emoji,
  Schedule,
  Location,
} from "assets/image";
function Post() {
  return (
    <Container>
      <Top>
        <HomeW>홈</HomeW>
        <ChoiceImg src={Choice} alt="choice logo" />
      </Top>
      <PostTop>
        <ProfileImg src={ProfileImage} alt="profile" />
        <Input
          name="newTwit"
          maxLength={140}
          placeholder="무슨 일이 일어나고 있나요?"
        />
      </PostTop>
      <PostBottom>
        <Icon>
          <PostIcon src={Gallery} alt="gallery" />
          <PostIcon src={Gif} alt="gif" />
          <PostIcon src={Graph} alt="graph" />
          <PostIcon src={Emoji} alt="emoji" />
          <PostIcon src={Schedule} alt="schedule" />
          <PostIcon src={Location} alt="location" />
          <button>트윗하기</button>
        </Icon>
      </PostBottom>
    </Container>
  );
}

export default Post;
