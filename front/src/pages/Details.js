import styled from "styled-components";
import Category from "../components/Category";

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  width: 80%;
  margin: 10px auto;
  padding: 10px 0;
  text-align: center;
  border: 1px solid #ccc;
`;

const Content = styled.div`
  border: 1px solid #ccc;
  width: 80%;
  margin: 0 auto;
  height: 100px;
  padding: 10px;
`;

const Detail = () => {
  return (
    <Wrapper>
      <Category title="상세 페이지" />
      <Title>글 제목</Title>
      <Content>
        임시 텍스트입니다. 임시 텍스트입니다. 임시 텍스트입니다. 임시
        텍스트입니다.
      </Content>
    </Wrapper>
  );
};

export default Detail;
