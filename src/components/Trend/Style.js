import styled from 'styled-components';
import {colors} from 'styles/styleOption';

export const StyledRoot = styled.div`
  margin: 12px 0;
  flex: 0.3;
`;

export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${colors.grey[4]};
  border-radius: 20px;
  padding: 13px 20px;
  margin:10px;
`;
export const TrendsTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

export const Follower = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;
export const FollowerAvatar = styled.div`
  display: flex;

  img {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    margin-right: 12px;
    cursor: pointer;
  }
`;

export const FollowerUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  h3 {
    font-size: 20px;
    font-weight: bold;
  }
  span {
    color: ${colors.grey[2]};
    font-size: 10px;
  }
`;

export const FollowerBtn = styled.div`
  background-color: #000;
  cursor: pointer;
  color: ${colors.white[1]};
  padding: 0.8rem 1.2rem;
  border-radius: 20px;

  font-weight: bold;
`;
export const Trendshow = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  color: black;
`;
export const TrendsMore = styled.div`
  font-size: 17px;
  font-weight: 300;
  width: 100%;
  color: #1d9bf0;
  cursor: pointer;
`;