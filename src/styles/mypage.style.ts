import styled from "styled-components";

export const MyPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MyPageUserInfo = styled.div`
  width: 35%;
  height: 80rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const UserInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
export const UserInfoBody = styled.div`
  & > div:first-child {
    display: flex;
  }
`;
export const MyPageManagement = styled.div`
  width: 63%;
  height: 80rem;
  border-radius: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 2rem;
`;
export const MyPageTitle = styled.h2`
  padding: 5rem 0 2rem;
  font-size: 2rem;
  font-weight: 700;
`;
export const UserName = styled.h2`
  margin-bottom: 0.3rem;
  margin-right: 0.5rem;
  font-size: 2.4rem;
  line-height: 1.2;
  font-weight: 700;
`;
export const UserPosition = styled.h3`
  font-size: 1.2rem;
`;

export const UserSpec = styled.div`
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 20px;
  width: 100%;
  row-gap: 1rem;
  border: 1px solid #ccc;
  margin-left: 1rem;
  &:first-child {
    margin-left: 0;
  }
  & > div:first-child {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  & > div:last-child {
    font-weight: 800;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    & > img {
      margin-right: 1rem;
      width: 2.4rem;
    }
  }
`;
export const UserLevel = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0234d;
  border-radius: 50%;
  color: white;
  margin-right: 1rem;
`;

export const UserIntro = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  background-color: #00dd6d;
  padding: 2rem;
  border-radius: 2rem;
  color: white;
`;

export const UserProfileImg = styled.div``;
export const UserContact = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    & > span {
      display: block;
      margin-left: 1rem;
    }
  }
`;
