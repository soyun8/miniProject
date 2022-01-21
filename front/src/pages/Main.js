import React from "react";
import styled from "styled-components";

import Category from "../components/Category";
import Lists from "../components/main/Lists";

import { getPosts } from "../utils/http-methods";

const Main = () => {
  const responseData = getPosts();

  console.log(responseData);

  return (
    <Wrapper>
      <Category title="게시판" />
      <Lists />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Main;
