import styled from "styled-components";

export const SkillTagStyle = styled.header`
  font-size: 1.2rem;
  background-color: rgb(244, 244, 244);
  border-radius: 0.2rem;
  padding: 0.5rem 0.7rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  & > img {
    width: 1.5rem;
    margin-right: 1rem;
  }
`;

export const StandadTagStyle = styled.header`
  background-color: ${(props: { bgColor?: string; ftColor?: string }) =>
    props.bgColor ? props.bgColor : "#e0234d"};
  color: ${(props: { bgColor?: string; ftColor?: string }) =>
    props.ftColor ? props.ftColor : "#fff"};
  margin-right: 1rem;
  padding: 0.5rem 1.5rem;
  font-size: 1.4rem;
  border-radius: 2rem;
`;
