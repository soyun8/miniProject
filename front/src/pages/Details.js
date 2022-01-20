import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  width: 100%;
  margin: 10px auto;
  padding: 10px 0;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  ::after {
    display: block;
    width: 40px;
    height: 3px;
    background-color: #5eaca0;
    content: "";
    margin: 10px auto 0 auto;
  }
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100px;
  padding: 10px;
`;

const Detail = () => {
  return (
    <Wrapper>
      <Title>글 제목</Title>
      <Content>
        임시 텍스트입니다. 임시 텍스트입니다. 임시 텍스트입니다. 임시
        텍스트입니다.
      </Content>
    </Wrapper>
  );
};

export default Detail;
