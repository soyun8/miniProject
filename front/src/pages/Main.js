import React from "react";
import styled from "styled-components";

import Category from "../components/Category";
import Posts from "../components/main/Posts";

const Main = () => {
  return (
    <Wrapper>
      <Category title="게시판" />
      <Posts />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Main;
