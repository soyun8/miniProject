import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/" className="header-title">
        개발 커뮤니티 💻
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 8rem;
  background-color: #5eaca0;
  z-index: 99;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 35%);
  margin-bottom: 3rem;

  .header-title {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    margin-left: 6rem;
  }
`;

export default Header;
