import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/" className="header-title">
        개발 커뮤니티 💻
      </Link>
      <Link to="/login" className="header-login">
        로그인
      </Link>
      <Link to="/register" className="header-register">
        회원가입
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
    width: 80%;
  }
  .header-login {
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }
  .header-register {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-left: 3rem;
  }
`;

export default Header;
