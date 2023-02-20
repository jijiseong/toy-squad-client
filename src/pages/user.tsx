import IMGRatingIcon from "../assets/images/user/rating.svg";
import IMGHeartIcon from "../assets/images/user/heart.svg";
import {
  UserContainer,
  UserHeader,
  UserLocation,
  UserInfoLabel,
  UserInfoContent,
  UserLevel,
  UserSetButton,
  UserSpec,
  UserSpecContainer,
} from "../styles/mypage/user.style";
import { UserProfileImg } from "../styles/mypage/mypage.style";
import IMGDefaultUserProfile from "../assets/images/user/default_profile.png";
import {
  SkillTagCSS,
  SkillTagHTML,
  SkillTagJS,
  SkillTagReact,
} from "../assets/tags/skills";
import StandadTag from "../assets/tags/standad";

const User = () => {
  return (
    <UserContainer>
      <UserHeader>
        <h3>
          <UserProfileImg>
            <img src={IMGDefaultUserProfile} alt="default user profile image" />
          </UserProfileImg>
          <div>
            <span>석지웅 님 / 프론트엔드 개발자</span>
            <UserLocation>서울 관악구</UserLocation>
          </div>
        </h3>
        <UserSetButton>내 정보 변경</UserSetButton>
      </UserHeader>
      <UserSpecContainer className="flex_box">
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
      </UserSpecContainer>
      <UserInfoContent>
        <UserInfoLabel>소개</UserInfoLabel>
        <div>
          안녕하세요. 6개월째 현업에서 일하고 있는 신입 프론트엔드 개발자입니다.
          사이드 프로젝트하는 것을 좋아해서 가입하게 되었습니다.
        </div>
      </UserInfoContent>
      <UserInfoContent>
        <UserInfoLabel>주요 스킬</UserInfoLabel>
        <div className="flex_box">
          <SkillTagReact />
          <SkillTagJS />
          <SkillTagHTML />
          <SkillTagCSS />
        </div>
      </UserInfoContent>
      <UserInfoContent>
        <UserInfoLabel>관심 분야</UserInfoLabel>
        <div className="flex_box">
          <StandadTag text="어린이" />
          <StandadTag text="금융" />
          <StandadTag text="이커머스" />
          <StandadTag text="소셜네트워크" />
        </div>
      </UserInfoContent>
      <UserInfoContent>
        <UserInfoLabel>프로젝트 성향</UserInfoLabel>
        <div className="flex_box">
          <StandadTag bgColor="#00dd6d" text="완벽주의" />
          <StandadTag bgColor="#00dd6d" text="신중함" />
          <StandadTag bgColor="#00dd6d" text="침착함" />
        </div>
      </UserInfoContent>
      <UserInfoContent>
        <UserInfoLabel>나의 계정 정보</UserInfoLabel>
        <div>
          <div>이메일 : godboy4256@gmail.com</div>
          <div>가입일 : 2022년 2월 20일</div>
          <div>전호번호 : 010-9019-2172</div>
        </div>
      </UserInfoContent>
      <UserSetButton>비밀번호 변경</UserSetButton>
    </UserContainer>
  );
};

export default User;
