import React from "react";
import styled from "styled-components";

const Layout = ({ title, buttons, children }) => {
  return (
    <Wrapper>
      <header className="layout-header">
        <span className="header-title">{title}</span>
      </header>
      <main className="layout-main">{children}</main>
      <footer className="layout-footer">
        {buttons.map((button) => {
          return (
            <button className="layout-button" key={buttons.title}>
              {button.title}
            </button>
          );
        })}
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .layout-header {
    display: flex;
    align-items: center;
    height: 8rem;
    background-color: red;
  }

  .header-title {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    margin-left: 6rem;
  }

  .layout-footer {
    margin: 4rem 0;
    display: flex;
    justify-content: center;
  }

  .layout-button {
    font-size: 2rem;
    background-color: red;
    color: white;
    padding: 1rem;
    border-radius: 0.7rem;
    border: 0;
    margin-right: 1rem;
  }
`;

export default Layout;
