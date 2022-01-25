import { useState, useEffect } from "react";
import {
  Route,
  useParams,
  useHistory,
  Link,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";

import Edit from "./Edit";
import Category from "../components/Category";
import { getSinglePost } from "../utils/http-methods";
import LoadingSpinner from "../components/LoadingSpinner";

const Detail = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { idx } = useParams();
  const location = useLocation();
  const isEditing = location.pathname.split("/")[3];

  const history = useHistory();

  useEffect(() => {
    const afterCallback = (fetchedPost) => {
      setPost(fetchedPost);
      setIsLoading(false);
    };

    getSinglePost(idx, afterCallback);
  }, []);

  const onClickHandler = () => {
    history.push("/");
  };

  console.log(post);

  if (isLoading) {
    return <LoadingSpinner />;
  } else if (!post) {
    return <p>해당 게시글에 대한 정보가 존재하지 않습니다.</p>;
  } else if (isEditing !== "editing" && isEditing) {
    return <p>잘못된 접근입니다.</p>;
  }

  return (
    <Wrapper>
      {isEditing === "editing" && post !== null && (
        <Edit post={post} id={idx} />
      )}

      {isEditing !== "editing" && post !== null && (
        <div>
          <Category title="상세 페이지" idx={idx} />
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
          <button className="home-button" onClick={onClickHandler}>
            홈으로
          </button>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .home-button {
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
    transition: 0.3s;
    :hover {
      background-color: #5eaca0;
    }
  }
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

export default Detail;
