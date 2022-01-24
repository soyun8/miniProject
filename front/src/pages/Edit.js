import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Category from "../components/Category";
import { createPost, updatePost } from "../utils/http-methods";

const Edit = ({ post, id }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setCotent] = useState(post.content);

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

    const afterCallback = () => {
      history.push("/");
    };

    updatePost(userInputData, id, afterCallback);
  };
  return (
    <Wrapper>
      <Category title="수정 페이지" />
      <Form onSubmit={onSubmit}>
        <TitleInput>
          <input value={title} onChange={titleOnChange} type="text" />
        </TitleInput>
        <ContentInput>
          <input value={content} onChange={contentOnChange} type="text" />
        </ContentInput>
        <button className="finish-button" type="submit">
          게시글 수정하기
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

export default Edit;
