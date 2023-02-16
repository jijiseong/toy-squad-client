import {
  MyPageTitle,
  MyPageContainer,
  MyPageUserInfo,
  UserInfoHeader,
  UserContact,
  UserInfoBody,
  UserIntro,
  MyPageManagement,
  UserName,
  UserPosition,
  UserLevel,
  UserSpec,
  UserProfileImg,
} from "../styles/mypage.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import IMGDefaultUserProfile from "../assets/images/user/default_profile.png";
import IMGRatingIcon from "../assets/images/user/rating.svg";
import IMGHeartIcon from "../assets/images/user/heart.svg";

const MyPage = () => {
  return (
    <div>
      <div className="common_wrapper">
        <MyPageTitle>My 토이스쿼드</MyPageTitle>
        <MyPageContainer>
          <MyPageUserInfo className="bg_color_white">
            <UserInfoHeader>
              <div>
                <UserName>석지웅 </UserName>
                <UserPosition> 프론트엔드 개발자</UserPosition>
              </div>
              <UserProfileImg>
                <img
                  src={IMGDefaultUserProfile}
                  alt="default user profile image"
                />
              </UserProfileImg>
            </UserInfoHeader>
            <UserContact>
              <div>
                <FontAwesomeIcon icon={faPhone} />
                <span>010-9019-2172</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>godboy4256@gmail.com</span>
              </div>
            </UserContact>
            <UserInfoBody></UserInfoBody>
          </MyPageUserInfo>
          <MyPageManagement className="bg_color_white">
            <UserIntro>
              안녕하세요. 6개월째 현업에서 일하고 있는 신입 프론트엔드
              개발자입니다. 사이드 프로젝트하는 것을 좋아해서 가입하게
              되었습니다.
            </UserIntro>
            <div className="flex_box">
              <UserSpec>
                <div>평점</div>
                <div>
                  <img src={IMGRatingIcon} alt="user rating icon" />
                  5.0
                </div>
              </UserSpec>
              <UserSpec>
                <div>포지션 레벨</div>
                <div>
                  <UserLevel>1</UserLevel>
                  입문
                </div>
              </UserSpec>
              <UserSpec>
                <div>좋아요</div>
                <div>
                  <img src={IMGHeartIcon} alt="user rating icon" />
                  100
                </div>
              </UserSpec>
            </div>
          </MyPageManagement>
        </MyPageContainer>
      </div>
    </div>
  );
};

export default MyPage;
