import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Category from "../components/Category";
import { createPost } from "../utils/http-methods";

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

const Edit = () => {
  const [title, setTitle] = useState("");
  const [content, setCotent] = useState("");

  // let history = useHistory();

  const titleOnChange = (event) => {
    setTitle(event.target.value);
  };
  const contentOnChange = (event) => {
    setCotent(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    // const userInputData = {
    //   title: title,
    //   content: content,
    // };

    // const callback = () => {
    //   history.push("/");
    // };

    // createPost(userInputData, callback);
  };
  return (
    <Wrapper>
      <Category title="수정 페이지" />
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
        <button type="submit">글작성 완료</button>
      </Form>
    </Wrapper>
  );
};

export default Edit;
