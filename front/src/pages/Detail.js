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
import { getSinglePost, deletePost } from "../utils/http-methods";

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
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const isEditing = location.pathname.split("/")[3];

  const history = useHistory();

  useEffect(() => {
    const callback = (fetchedPost) => {
      setPost(fetchedPost);
    };

    getSinglePost(id, callback);
  }, []);

  const onDeleteHandler = () => {
    const callback = () => {
      history.push("/");
    };
    deletePost(id, callback);
  };

  return (
    <Wrapper>
      <Route path={`/detail/${id}/editing`} exact>
        <Edit post={post} />
      </Route>
      {isEditing !== "editing" && (
        <div>
          <Category title="상세 페이지" />
          <Title>임시 타이틀</Title>
          <Content>
            임시 텍스트입니다. 임시 텍스트입니다. 임시 텍스트입니다. 임시
            텍스트입니다.
          </Content>
          <Link to={`/detail/${id}/editing`}>수정</Link>
          <button onClick={onDeleteHandler}>삭제</button>
        </div>
      )}
    </Wrapper>
  );
};

export default Detail;
