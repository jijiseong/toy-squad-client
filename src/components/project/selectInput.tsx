import { Select, Switch, Input, DatePicker, Upload } from "antd";
import React from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type SelectInputType = {
  title: string;
  defaultValue: string;
  options?: { label: string; value: string }[];
};
type DateInputType = {
  title: string;
};
type ImgInputType = {
  title: string;
  img: string;
};
type WriteInputType = {
  title: string;
  placeholder: string;
  options?: { label: string; value: string }[];
};
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;

  h4 {
    width: 120px;
  }
  .ant-select,
  .ant-picker {
    width: 160px;
  }
`;
const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  font-size: 16px;
  h4 {
    margin-bottom: 10px;
  }
  .ant-input {
    width: 100%;
    /* border: none; */
    margin-bottom: 10px;
  }
  .options {
    width: 100%;
    display: flex;
    button {
      border: 1px solid #d9d9d9;
      border-radius: 5px;
      padding: 5px 20px;
      margin-right: 5px;
      color: #999797;
    }
  }
`;
const QuillContainer = styled.div`
  margin-bottom: 70px;
  font-size: 16px;
  h4 {
    margin-bottom: 10px;
  }
  .quill {
    width: 100%;
    height: 300px;
  }
`;
export const SelectInput = ({
  title,
  defaultValue,
  options,
}: SelectInputType) => {
  return (
    <Container>
      <h4>{title}</h4>
      <Select
        defaultValue={defaultValue}
        options={options}
        onChange={(e) => {
          console.log(e);
        }}
      />
    </Container>
  );
};
export const DateInput = ({ title }: DateInputType) => {
  return (
    <Container>
      <h4>{title}</h4>
      <DatePicker
        placeholder="모집시까지"
        onChange={(e) => {
          console.log(e);
        }}
      />
    </Container>
  );
};
export const WriteInput = ({ title, placeholder, options }: WriteInputType) => {
  const [input, setInput] = React.useState("");
  const onClickOpt = (value: string) => () => {
    const next = input ? input + ", " + value : value;
    setInput(next);
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };
  console.log(input.split(", "), input.split(", ").includes("1명"));
  return (
    <WriteContainer>
      <h4>{title}</h4>
      <Input
        value={input}
        placeholder={placeholder}
        onChange={onChange}
        onPressEnter={(e) => {
          console.log(e, "click");
        }}
      />
      {options && (
        <div className="options">
          {options.map((el) => (
            <button
              type="button"
              onClick={onClickOpt(el.label)}
              disabled={input.split(", ").includes(el.label)}
            >
              {el.label}
            </button>
          ))}
        </div>
      )}
    </WriteContainer>
  );
};
export const TextAreaInput = ({ title }: DateInputType) => {
  return (
    <QuillContainer>
      <h4>{title}</h4>
      <ReactQuill theme="snow" />
    </QuillContainer>
  );
};
export const SwitchInput = ({ title }: DateInputType) => {
  return (
    <Container>
      <h4>{title}</h4>
      <Switch />
    </Container>
  );
};
const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);
export const ImgInput = ({ title, imageUrl }: DateInputType) => {
  return (
    <WriteContainer>
      <h4>{title}</h4>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </WriteContainer>
  );
};
