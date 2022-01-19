import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const DUMMY_DATA = [
  { number: 1, title: "임시 제목입니다 1", date: "2022.01.19" },
  { number: 2, title: "임시 제목입니다 2", date: "2022.01.19" },
  { number: 3, title: "임시 제목입니다 3", date: "2022.01.19" },
];

const buttons = [{ title: "글 쓰기" }, { title: "수정하기" }];

const Main = () => {
  return (
    <Layout title="게시판" buttons={buttons}>
      <Wrapper>
        <ul className="main-field">
          <li className="list">
            <span>Number</span>
            <span>Title</span>
            <span>Date</span>
          </li>
        </ul>
        <ul className="main-list">
          {DUMMY_DATA.map((data) => {
            return (
              <li key={data.number}>
                <div className="list">
                  <span>{data.number}</span>
                  <span>{data.title}</span>
                  <span>{data.date}</span>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  .main-field {
    width: 100%;
    background-color: orange;
    color: white;
    font-size: 2.2rem;
  }

  .main-list {
    width: 100%;
  }

  .list {
    display: flex;
    padding: 1.5rem 0;
    margin-left: 6rem;
    span {
      width: 20%;
      :nth-child(2) {
        width: 60%;
      }
      :last-child {
        width: 20%;
      }
    }
  }
`;

export default Main;
