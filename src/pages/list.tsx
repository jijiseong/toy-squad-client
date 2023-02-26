import { SearchInput } from "../components/project/searchInput";
import { SelectInput } from "../components/project/selectInput";
import React from "react";
import { tags } from "../utils/projectTags";
import styled, { css } from "styled-components";

const Container = styled.div`
  margin: 40px auto 100px;
  width: 1106px;
`;
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;

  /* gap: 20px; */
`;
const Line = styled.div`
  margin: 20px 0 40px;
  width: 1106px;
  height: 1px;
  background-color: black;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  row-gap: 10px;
`;
const TagContainer = styled.div`
  font-size: 18px;
  display: flex;
  margin-bottom: 30px;
`;
const Tag = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid black;
  border-radius: 25px;
  margin-right: 20px;
  ${({ selectedIndex }) =>
    selectedIndex &&
    css`
      background-color: #e0234d;
      color: #fff;
      border: none;
    `}
`;
const FILTER_OPTIONS = [
  { value: "", label: "최신순" },
  { value: "", label: "평점순" },
];
const TempData = [
  {
    img: "none",
    device: "App",
    category: ["건강", "운동"],
    title: "프로젝트 제목",
    description:
      "프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다.",
    name: "석 지 웅",
  },
  {
    img: "none",
    device: "App",
    category: ["건강", "운동"],
    title: "프로젝트 제목",
    description:
      "프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다.",
    name: "석 지 웅",
  },
  {
    img: "none",
    device: "App",
    category: ["건강", "운동"],
    title: "프로젝트 제목",
    description:
      "프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다.",
    name: "석 지 웅",
  },
  {
    img: "none",
    device: "App",
    category: ["건강", "운동"],
    title: "프로젝트 제목",
    description:
      "프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다. 프로젝트에 대한 소개 입니다.",
    name: "석 지 웅",
  },
];
const Card = styled.div`
  /* width: 268px; */
  /* margin-right: 20px; */
  .img {
    width: 100%;
    height: 218px;
    background-color: gray;
  }
`;
const ListCard = ({ el }) => {
  return (
    <Card>
      <div className="img">
        <img />
      </div>
      <div>{el.title}</div>
      <div>{el.description}</div>
      <div>{el.name}</div>
    </Card>
  );
};
const ListPage = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Container>
      <SearchInput />
      <Line />
      <TagContainer>
        {tags.map((tag, index) => (
          <Tag selectedIndex={selectedIndex === index} key={index}>
            {tag.label}
          </Tag>
        ))}
      </TagContainer>
      <InputContainer>
        <SelectInput defaultValue="최신순" options={FILTER_OPTIONS} />
      </InputContainer>
      <ListContainer>
        {TempData.map((el, index) => (
          <ListCard key={el} el={el} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default ListPage;
