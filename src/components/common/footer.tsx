import styled from "styled-components";
import IMGLogo from "../../assets/images/common/logo.svg";

const Container = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;

  footer {
    width: 1110px;
    img {
      margin-bottom: 20px;
    }
  }
`;
const JiwoongInfo = styled.div`
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  p {
    margin-bottom: 4px;
  }
`;
const Policy = styled.div`
  span {
    margin-left: 10px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <footer>
        <img src={IMGLogo} alt="header logo" />
        <JiwoongInfo>
          <div>
            <p>개발자 전화번호: 010-9019-2172</p>
            <p>이메일 : godboy4256@gmail.com</p>
            <p>Copyright (c) 석지웅 2022. All rights reserved.</p>
          </div>
          <Policy>
            <span>개인정보 처리방침</span>
            <span>이용 약관</span>
          </Policy>
        </JiwoongInfo>
      </footer>
    </Container>
  );
};

export default Footer;
