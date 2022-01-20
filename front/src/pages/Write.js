import { useState } from "react";
import styled from "styled-components";
import Category from "../components/Category";

const Wrapper = styled.div`
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  input {
    width: 100%;
    display: block;
    margin: 0 auto;
    height: 30px;
    padding: 10px;
    border: 1px solid #ccc;
  }
`;

const TitleInput = styled.div`
  height: 50px;
`;
const ContentInput = styled.div`
  input {
    height: 150px;
  }
`;

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setCotent] = useState("");
  const titleOnChange = (event) => {
    setTitle(event.target.value);
  };
  const contentOnChange = (event) => {
    setCotent(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
  };
  return (
    <Wrapper>
      <Category title="글 작성" />
      <Form onSubmit={onSubmit}>
        <TitleInput>
          <input
            value={title}
            onChange={titleOnChange}
            type="text"
            placeholder="글 제목"
          />
        </TitleInput>
        <ContentInput>
          <input
            value={content}
            onChange={contentOnChange}
            type="text"
            placeholder="글 내용"
          />
        </ContentInput>
      </Form>
    </Wrapper>
  );
};

export default Write;
