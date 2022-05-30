import React from 'react';
import {
  faComment,
  faRetweet,
  faHeart,
  faEllipsis,
  faHashtag,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import {colors, fonts} from "styles/styleOption";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyledRoot,TwitWrap,TwitInfo,Text,TwitIcon,TwitContent,TwitHash,TwitDetail} from "./Style";
import { twitDelete } from 'apis/twitDelete.api';
import { ProfileImage } from 'assets/image';


function Twitts(data, type) {
  const ondeleteTwit=async()=>{
    const response=await twitDelete(data.id, data.userResDto.profile.nickname);
    console.log("ondeleteTwit",response);
    alert(`${response.data.message}`);
    window.location="/";

  }

  const displayedAt=() =>{
    const createAt=new Date(data.boardCreateOn)
    const milliSeconds = new Date() - createAt
    const seconds = milliSeconds / 1000
    if (seconds < 60) return `방금 전`
    const minutes = seconds / 60
    if (minutes < 60) return `${Math.floor(minutes)}분 전`
    const hours = minutes / 60
    if (hours < 24) return `${Math.floor(hours)}시간 전`
    const days = hours / 24
    if (days < 7) return `${Math.floor(days)}일 전`
    const weeks = days / 7
    if (weeks < 5) return `${Math.floor(weeks)}주 전`
    const months = days / 30
    if (months < 12) return `${Math.floor(months)}개월 전`
    const years = days / 365
    return `${Math.floor(years)}년 전`
  }

  const showYYYYMMDD=()=>{
    //console.log (data.boardCreateOn);
    const date=new Date(data.boardCreateOn);
    console.log("showDate");
    console.log(date.getFullYear(),date.getMonth()+1,date.getDate(), date.getDay())
    return `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일`
  }

  const showHHMM=()=>{
    console.log("시간 표현")
    const date=new Date(data.boardCreateOn);
    return `${date.getHours<12?"오전":"오후"} ${date.getHours()}:${date.getMinutes()}`
   
  }
  return (
    <StyledRoot>
      <img src={ProfileImage} alt="임시 프로필 사진"></img>
      <TwitWrap>
       
        <TwitInfo>
          <div>
            <Text weight={fonts.weight.bold} color={colors.black[2]}>
              이퍼비
            </Text>
            <Text weight={fonts.weight.regular} color={colors.grey[1]}>
              @EFUB123
            </Text>
            <Text weight={fonts.weight.regular} color={colors.grey[1]}>
              방금 전
            </Text>
          </div>
          <div>
            <FontAwesomeIcon icon={faEllipsis} color={colors.grey[1]} size="sm" />
          </div>
        </TwitInfo>

        <TwitContent >안녕하세요!</TwitContent>
       
        <TwitHash>
            <div>
              <FontAwesomeIcon icon={faHashtag} color={colors.blue[1]} 
               size="sm" />인사</div>
        </TwitHash>
        {type?<TwitDetail color={colors.grey[3]}>     <Text weight={fonts.weight.regular} color={colors.grey[2]}>
              
              08:57
              
            </Text><Text weight={fonts.weight.regular} color={colors.grey[2]}>
              
            2022/05/29
              
            </Text></TwitDetail>:null}
        <TwitIcon>
          <FontAwesomeIcon
            icon={faComment}
            weight={fonts.weight.bold}
            color={colors.grey[1]}
            size="sm"
          />
          <FontAwesomeIcon
            icon={faRetweet}
            weight={fonts.weight.regular}
            color={colors.grey[1]}
            size="sm"
          />
          <FontAwesomeIcon
            icon={faHeart}
            weight={fonts.weight.regular}
            color={colors.grey[1]}
            size="sm"
          />
          <FontAwesomeIcon onClick={ondeleteTwit} icon={faTrash} color={colors.grey[1]} size="sm" />
        </TwitIcon>
      </TwitWrap>
    </StyledRoot>
  );
};
export default Twitts;