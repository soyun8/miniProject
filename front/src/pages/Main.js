import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Category from "../components/Category";
import Lists from "../components/main/Lists";

import { getPosts } from "../utils/http-methods";

const Main = () => {
  const getData = async () => {
    const data = await getPosts();
    console.log(data);
  };

  getData();

  return (
    <Wrapper>
      <Category title="게시판" />
      <Lists />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Main;
