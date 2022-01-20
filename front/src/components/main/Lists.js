import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DUMMY_DATA = [
  { number: 1, title: "임시 제목입니다1", date: "2022.01.19" },
  { number: 2, title: "임시 제목입니다2", date: "2022.01.19" },
  { number: 3, title: "임시 제목입니다3", date: "2022.01.19" },
  { number: 4, title: "임시 제목입니다4", date: "2022.01.19" },
  { number: 5, title: "임시 제목입니다5", date: "2022.01.19" },
  { number: 6, title: "임시 제목입니다6", date: "2022.01.19" },
  { number: 7, title: "임시 제목입니다7", date: "2022.01.19" },
];

const Lists = () => {
  return (
    <Wrapper>
      {DUMMY_DATA.map((data) => {
        return (
          <Link to="/detail" className="link" key={data.number}>
            <li className="board-list">
              <span className="list-number">{data.number}</span>
              <div className="list-content">
                <h2 className="list-title">{data.title}</h2>
                <span>작성일: {data.date}</span>
              </div>
            </li>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .link {
    width: 100%;
    height: 100%;
    text-decoration: none;
    margin-top: 3rem;

    :first-child {
      margin-top: 0;
    }
  }

  .board-list {
    display: flex;
    align-items: center;
    width: 100%;
    height: 10rem;
    background-color: #bce9e4;
    box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 25%);
    padding: 2rem 1rem;
    border-radius: 0.7rem;
  }

  .list-number {
    font-size: 3rem;
    color: white;
    background-color: #158372;
    border-radius: 0.7rem;
    padding: 0.8rem 1.3rem;
  }

  .list-content {
    margin-left: 2rem;
  }

  .list-title {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`;

export default Lists;
