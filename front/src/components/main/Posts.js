import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getPosts } from "../../utils/http-methods";
import sortPosts from "../../utils/sort-posts";
import LoadingSpinner from "../LoadingSpinner";

const Posts = ({ order }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const afterCallback = (fetchedPosts) => {
      sortPosts(fetchedPosts, order);
      setPosts(fetchedPosts);
      setIsLoading(false);
    };

    setIsLoading(true);

    getPosts(afterCallback);
  }, [order]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Wrapper>
      {posts.map((post, index) => {
        const idx = post.idx;
        const title = post.title;
        const createDate = post.create_date.split("T")[0];
        const updateDate = post.update_date.split("T")[0];
        const updateTime = post.update_date.split("T")[1].substring(0, 5);
        const views = post.hit_cnt;

        return (
          <StyledLink
            index={index + 1}
            to={`/detail/${idx}`}
            className="link"
            key={idx}
          >
            <li className="board-list">
              <span className="list-number">{index + 1}</span>
              <div className="list-content">
                <h2 className="list-title">{title}</h2>
                {post.update_date && (
                  <div>
                    <span>작성일: {createDate} </span>
                    {createDate === updateDate ? (
                      <span>({updateTime}에 수정됨)</span>
                    ) : (
                      <span>(수정일: {updateDate})</span>
                    )}
                  </div>
                )}
                <span className="views">조회수: {views}</span>
              </div>
            </li>
          </StyledLink>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

  .list-number {
    font-size: 3rem;
    color: white;
    background-color: #158372;
    border-radius: 0.7rem;
    padding: 0.8rem 1.3rem;
  }

  .list-content {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }

  .list-title {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  .views {
    margin: 0.8rem 0;
  }
`;

const StyledLink = styled(Link)`
  @keyframes postsshow {
    from {
      opacity: 0;
      transform: translateX(80px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .board-list {
    display: flex;
    align-items: center;
    width: 100%;
    height: 12rem;
    background-color: #bce9e4;
    box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 25%);
    padding: 2rem 1rem;
    border-radius: 0.7rem;
    animation: postsshow 0.5s;
    animation-delay: ${(props) =>
      props.index ? `${props.index * 0.2}s` : "0.1s"};
    animation-fill-mode: both;
  }
`;

export default Posts;
