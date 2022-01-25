import React from "react";
import styled from "styled-components";

import { Oval } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Oval color="#14946e" height={70} width={70} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default LoadingSpinner;
