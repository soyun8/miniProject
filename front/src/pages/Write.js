import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Category from "../components/Category";
import { createPost } from "../utils/http-methods";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setCotent] = useState("");

  let history = useHistory();

  const titleOnChange = (event) => {
    setTitle(event.target.value);
  };
  const contentOnChange = (event) => {
    setCotent(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    const userInputData = {
      title: title,
      content: content,
    };

    const afterCallback = (idx) => {
      history.push(`/detail/${idx}`);
    };

    createPost(userInputData, afterCallback);
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
        <button className="finish-button" type="submit">
          게시글 올리기
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .finish-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    font-weight: bold;
    background-color: #c72626;
    color: white;
    padding: 1.4rem;
    border: 0;
    border-radius: 0.7rem;
    margin-top: 3rem;
    cursor: pointer;
  }

  .finish-button:hover {
    background-color: #5eaca0;
  }
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

export default Write;
