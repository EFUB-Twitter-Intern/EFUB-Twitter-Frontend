import React from 'react';
import {StyledRoot,TrendsContainer,TrendsTitle,Follower,FollowerAvatar,FollowerUser,FollowerBtn,TrendsMore} from "./Style";
import { avatarImage } from 'assets/image';
function Follow() {
  return (
    <>
      <StyledRoot>
        <TrendsContainer>
          <TrendsTitle>
            내가 좋아할 만한 콘텐츠
          </TrendsTitle>
            <Follower>
              <FollowerAvatar>
                <img src={avatarImage} alt="임시 프로필 사진" />
                <FollowerUser>
                  <h3>EFUB2</h3>
                  <span>#하나도 #모르겠다</span>
                </FollowerUser>
              </FollowerAvatar>
              <FollowerBtn>팔로우</FollowerBtn>
            </Follower>
          <TrendsMore>더 보기</TrendsMore>
        </TrendsContainer>
      </StyledRoot>
    </>
  );
}



export default Follow;