import { SearchInput } from "../components/project/searchInput";
import { tags } from "../utils/projectTags";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px auto 100px;
  width: 1106px;
`;
const ListPage = () => {
  return (
    <Container>
      <SearchInput />
      {tags.map((tag) => (
        <div>{tag.label}</div>
      ))}
    </Container>
  );
};

export default ListPage;
