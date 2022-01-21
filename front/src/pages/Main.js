import React from "react";
import styled from "styled-components";
import axios from "axios";

import Category from "../components/Category";
import Lists from "../components/main/Lists";

const Main = () => {
  const getData = async () => {
    const response = await axios.get("/board/list", {
      baseURL: "http://localhost:8082",
      withCredentials: true,
    });
    console.log(response);
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
