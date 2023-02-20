import styled from "styled-components";

export const MyPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MyPageUserInfo = styled.div`
  width: 30%;
  /* height: 80rem; */
  padding-right: 3rem;
  border-radius: 1rem;
`;
export const UserInfoHeader = styled.div`
  margin-bottom: 2rem;
`;
export const UserInfoMainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserInfoMenu = styled.div`
  border-top: 1px solid #ccc;
  & > h2 {
    font-size: 2rem;
    font-weight: 900;
    margin: 2rem 0;
  }
  & > div {
    border-bottom: 1px solid #ccc;
  }
`;
export const UserInfoMenuList = styled.button`
  font-size: 1.6rem;
  margin: 2rem 0;
`;
export const MyPageContent = styled.div`
  width: 70%;
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 4rem;
`;
export const MyPageTitle = styled.h2`
  padding: 5rem 0 2rem;
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5rem;
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
export const UserProfileImg = styled.div``;
