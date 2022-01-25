import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { postSortings } from "../utils/sort-posts";
import { deletePost } from "../utils/http-methods";

const Category = ({ title, changeOrder, idx }) => {
  const history = useHistory();

  const onChangeHandler = (event) => {
    changeOrder(event.target.value);
  };

  const onDeleteHandler = () => {
    const afterCallback = () => {
      history.push("/");
    };
    deletePost(idx, afterCallback);
  };

  return (
    <Wrapper>
      <div className="category-container">
        <span className="category-title">{title} 📝</span>
        {title === "게시판" && (
          <div className="category-side">
            <Link className="category-link" to="/write">
              글쓰기
            </Link>
            <div className="category-sorting">
              <label htmlFor="list-select" className="sorting-label">
                Sorted By:
              </label>
              <select
                className="select-box"
                name="list-select"
                id="list-select"
                onChange={onChangeHandler}
              >
                {postSortings.map((sorting) => {
                  return (
                    <option key={sorting.value} value={sorting.value}>
                      {sorting.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        )}
        {title === "상세 페이지" && (
          <div className="category-side">
            <Link className="category-link" to={`/detail/${idx}/editing`}>
              수정 🛠
            </Link>
            <button className="delete-button" onClick={onDeleteHandler}>
              삭제 🗑
            </button>
          </div>
        )}
      </div>
      <hr className="underline" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 2.5rem;

  .category-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.9rem;
    font-weight: bold;
  }

  .category-side,
  .category-sorting {
    display: flex;
    align-items: center;
  }
  .category-title {
    font-size: 3rem;
  }

  .category-link {
    text-decoration: none;
    color: #d31e1e;
    margin-right: 2.5rem;
    padding: 0.5rem;
    transition: 0.3s;
    :hover {
      color: #5b44af;
    }
  }

  .sorting-label {
    margin-right: 0.7rem;
  }
  .select-box {
    height: 3rem;
    :focus-visible {
      outline: none;
    }
  }

  .underline {
    height: 0.2rem;
    background-color: #838383;
    margin: 2rem 0 0 0;
  }

  .delete-button {
    font-size: 1.9rem;
    font-weight: bold;
    background: none;
    border: 0;
    color: #d31e1e;
    cursor: pointer;
    padding: 0.5rem;
    transition: 0.3s;
    :hover {
      color: #5b44af;
    }
  }
`;

export default Category;
