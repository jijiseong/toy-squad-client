import {
  MyPageTitle,
  MyPageContainer,
  MyPageUserInfo,
  UserInfoHeader,
  UserInfoMenu,
  UserInfoMainInfo,
  MyPageContent,
  UserInfoMenuList,
  UserName,
  UserPosition,
  UserProfileImg,
} from "../styles/mypage/mypage.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import IMGDefaultUserProfile from "../assets/images/user/default_profile.png";
import { Route, Routes } from "react-router-dom";
import User from "./user";

const MyPage = () => {
  return (
    <div>
      <div className="common_wrapper">
        <MyPageTitle>My 토이스쿼드</MyPageTitle>
        <MyPageContainer>
          <MyPageUserInfo>
            <UserInfoHeader>
              <UserInfoMainInfo>
                <div>
                  <UserName>석지웅 </UserName>
                  <UserPosition>프론트엔드 개발자</UserPosition>
                </div>
                <UserProfileImg>
                  <img
                    src={IMGDefaultUserProfile}
                    alt="default user profile image"
                  />
                </UserProfileImg>
              </UserInfoMainInfo>
            </UserInfoHeader>
            <UserInfoMenu>
              <div>
                <UserInfoMenuList>내 정보</UserInfoMenuList>
                <UserInfoMenuList>프로젝트 관리</UserInfoMenuList>
                <UserInfoMenuList>유저 관리</UserInfoMenuList>
                <UserInfoMenuList>알림 설정</UserInfoMenuList>
              </div>
              <div>
                <UserInfoMenuList>공지사항</UserInfoMenuList>
                <UserInfoMenuList>개인정보 처리방침</UserInfoMenuList>
                <UserInfoMenuList>토이스쿼드 이용약관</UserInfoMenuList>
              </div>
              <div>
                <UserInfoMenuList>계정탈퇴</UserInfoMenuList>
                <UserInfoMenuList>로그아웃</UserInfoMenuList>
              </div>
            </UserInfoMenu>
          </MyPageUserInfo>
          <MyPageContent>
            <Routes>
              <Route path="/" element={<User />} />
            </Routes>
          </MyPageContent>
        </MyPageContainer>
      </div>
    </div>
  );
};

export default MyPage;
