import {
  SelectInput,
  WriteInput,
  DateInput,
  TextAreaInput,
  SwitchInput,
  ImgInput,
} from "../components/project/selectInput";
import React from "react";

import { Space, Card, Button } from "antd";
import styled from "styled-components";
import { sendToServer } from "../utils/sendToServer";

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;
  .ant-card {
    width: 1125px;
    padding: 20px 40px;
  }
`;
const members_option = [
  { value: "none", label: "미정" },
  { value: "1", label: "1명" },
  { value: "2", label: "2명" },
  { value: "3", label: "3명" },
];
const career_option = [
  { value: "none", label: "신입" },
  { value: "1", label: "1년" },
  { value: "2", label: "2년" },
  { value: "3", label: "3년" },
];
const ProjectsPage = () => {
  const formRef = React.useRef<HTMLDivElement>(null);
  const onSubmit = (event: any) => {
    console.log(formRef.current);
  };
  return (
    <Container>
      {/* <Card>필수 정보 입력 추가정보입력</Card> */}
      <Card ref={formRef}>
        <WriteInput
          title="모집분야"
          placeholder="ex) UI 디자이너, 서비스 기획자"
          options={members_option}
        />
        <SelectInput
          title="모집인원"
          defaultValue="미정"
          options={members_option}
        />
        <DateInput title="모집기간(~까지)" />
        <SelectInput title="경력" defaultValue="신입" options={career_option} />
        <WriteInput
          title="필요조건"
          placeholder="ex) 경력 2년차 이상, 웹 기획 경험자, 전략 기획 경험자"
          options={career_option}
        />
        <WriteInput
          title="우대조건"
          placeholder="ex) 공모전 수상 경험자, css코딩"
        />
        <TextAreaInput title="모집 상세설명" />
        <SwitchInput title="모집안내 공개" />
        <ImgInput title="모집공고 이미지 선택" />
        <Button onClick={onSubmit}>팀 생성하기</Button>
      </Card>
    </Container>
  );
};

export default ProjectsPage;
