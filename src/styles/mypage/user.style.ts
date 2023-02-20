import styled from "styled-components";

export const UserContainer = styled.div``;

export const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  & > h3 {
    font-size: 2rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    & img {
      width: 5rem;
      margin-right: 1rem;
    }
  }
`;

export const UserLocation = styled.div`
  font-size: 1.4rem;
  opacity: 0.5;
  font-weight: 600;
  margin-top: 1rem;
`;

export const UserSpecContainer = styled.div`
  margin-bottom: 5rem;
`;

export const UserSetButton = styled.button`
  background-color: #00dd6d;
  color: white;
  padding: 1rem;
`;

export const UserSpec = styled.div`
  border-radius: 1.2rem;
  padding: 1.2rem;
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

export const UserInfoContent = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const UserInfoLabel = styled.h4`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;
