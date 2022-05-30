import React, { useState, useRef, useEffect } from 'react';

import { ProfileImage } from 'assets/image';
import {
  faImage,
  faFile,
  faBarsProgress,
  faSmile,
  faCalendar,
  faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors, BORDER_RADIUS, fonts } from 'styles/styleOption';
import {StyledRoot,PostWrap,Textarea,PostControl,PostIcon} from "./style";
import {twitPost} from "apis/twitPost.api";


function Post() {


    return (
      <StyledRoot>
        <img src={ProfileImage} alt="임시 프로필 사진"></img>
        <PostWrap>
          <Textarea
            placeholder="무슨 일이 일어나고 있나요?"
          ></Textarea>
            
          <PostControl>

            <PostIcon>
              <FontAwesomeIcon icon={faImage} color={colors.grey[1]} size="sm" />
              <FontAwesomeIcon icon={faFile} color={colors.grey[1]} size="sm" />
              <FontAwesomeIcon icon={faBarsProgress} color={colors.grey[1]} size="sm" />
              <FontAwesomeIcon icon={faSmile} color={colors.grey[1]} size="sm" />
              <FontAwesomeIcon icon={faCalendar} color={colors.grey[1]} size="sm" />
              <FontAwesomeIcon icon={faLocationPin} color={colors.grey[1]} size="sm" />
            </PostIcon>
            <button>트윗하기</button>
          </PostControl>
        </PostWrap>
      </StyledRoot>
    );
  };
  export default Post;