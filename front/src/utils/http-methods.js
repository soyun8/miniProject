import axios from "axios";

import catchErrors from "./http-catch-errors";

// API Routes: 백엔드에서 설정한 라우트들을 이곳에다 기록합니다.
const GET_POSTS_PATH = "/board/list";
const CREATE_POST_PATH = "/board/write";
const GET_SINGLE_POST_PATH = "/board/"; // :id
const UPDATE_POST_PATH = "/board/"; // :id
const DELETE_POST_PATH = "/board/"; // :id

// HTTP Request Custom Functions: HTTP Request 메소드를 커스텀 함수로 작성하였습니다.
const getPosts = async (posts, callback) => {
  const response = await catchErrors(axios.get, GET_POSTS_PATH);

  if (JSON.stringify(posts) === JSON.stringify(response.data)) {
    return;
  }

  callback(response.data);
};

const createPost = async (userInputData, callback) => {
  await catchErrors(axios.post, CREATE_POST_PATH, userInputData);
  callback();
};

const getSinglePost = async (id, callback) => {
  const response = await catchErrors(
    axios.get,
    GET_SINGLE_POST_PATH + `${id}`,
    {
      id,
    }
  );

  callback(response.data);
};

const updatePost = async (userInputData, id, callback) => {
  const response = await catchErrors(axios.put, UPDATE_POST_PATH + `${id}`, {
    id,
    ...userInputData,
  });

  callback();
};

const deletePost = async (id, callback) => {
  await catchErrors(axios.delete, DELETE_POST_PATH + `${id}`, {
    id,
  });

  callback();
};

export { getPosts, getSinglePost, createPost, updatePost, deletePost };

// 생각해볼 것: 리덕스 로직, 백엔드 분들과 에러 핸들링에 대해서 의논할것, (Form Validation도), 각각의 에러에 대해 프론트에서 어떻게 처리할지
