import styled from "styled-components";
import React from "react";
import IMGSearch from "../../assets/images/common/search.svg";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 220px;
  width: 593px;

  font-size: 16px;
  position: relative;
  .ant-input {
    width: 593px;
    height: 67px;
    border-radius: 20px;
    display: flex;
    font-size: 18px;
    align-items: center;
    ::placeholder {
      font-size: 18px;
      margin-left: 35px;
    }
  }
`;
const SearchIcon = styled.div`
  position: absolute;
  right: 20px;
  font-size: 25px;
  border-radius: 50%;
  background-color: #e0234d;
  top: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 47px;
  height: 47px;
`;
export const SearchInput = () => {
  return (
    <Container>
      <Input placeholder="검색어를 입력해주세요" />
      <SearchIcon>
        <img src={IMGSearch} alt="header search icon" />
      </SearchIcon>
    </Container>
  );
};
