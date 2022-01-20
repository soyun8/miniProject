import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = ({ title }) => {
  return (
    <Wrapper>
      <div className="category-container">
        <span className="category-title">{title} 📝</span>
        {title === "게시판" && (
          <div className="category-side">
            <Link to="/write" className="category-link">
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
              >
                <option value="asc">최신순</option>
                <option value="des">오래된순</option>
                <option value="view">조회순</option>
              </select>
            </div>
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
  }

  .category-link:hover {
    color: #4e4ec0;
  }

  .sorting-label {
    margin-right: 0.7rem;
  }
  .select-box {
    height: 3rem;
  }

  .underline {
    height: 0.2rem;
    background-color: #838383;
    margin: 2rem 0 0 0;
  }
`;

export default Category;
