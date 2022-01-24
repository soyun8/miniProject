import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getPosts } from "../../utils/http-methods";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const callback = (fetchedPosts) => {
      setPosts(fetchedPosts);
    };

    getPosts(callback);
  }, []);

  console.log(posts);

  return (
    <Wrapper>
      {posts.length > 0 &&
        posts.map((post, index) => {
          return (
            <Link to={`/detail/${post.idx}`} className="link" key={post.idx}>
              <li className="board-list">
                <span className="list-number">{index + 1}</span>
                <div className="list-content">
                  <h2 className="list-title">{post.title}</h2>
                  <span>작성일: {post.create_date}</span>
                  {post.update_date && <span>수정일: {post.update_date}</span>}
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
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }

  .list-title {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
`;

export default Posts;
