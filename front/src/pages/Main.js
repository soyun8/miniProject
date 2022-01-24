import React, { useState } from "react";
import styled from "styled-components";

import Category from "../components/Category";
import Posts from "../components/main/Posts";
import { postSortings } from "../utils/sort-posts";

const Main = () => {
  const [order, setOrder] = useState(postSortings[0].value);

  const changeOrder = (selectedOrder) => {
    setOrder(selectedOrder);
  };
  console.log(order);

  return (
    <Wrapper>
      <Category title="게시판" order={order} changeOrder={changeOrder} />
      <Posts order={order} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Main;
