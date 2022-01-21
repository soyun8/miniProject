import axios from "axios";

// API Routes: 백엔드에서 설정한 라우트들을 이곳에다 기록합니다.
const getPostsPath = "https://jsonplaceholder.typicode.com/posts";
const createPostPath = "https://jsonplaceholder.typicode.com/posts";
const updatePostPath = "/api/board/:id";
const deletePostPath = "/api/board/:id";

// Error Handling Function: 반복되는 에러 핸들링 작업을 재사용 하기위해 함수로 작성하였습니다.
const catchErrors = async (callback, path, data) => {
  try {
    const response = await callback(path, data);
    return response;
  } catch (error) {
    if (error.response) {
      // 서버로부터 응답 O, BUT StatusCode가 2xx(성공) 범위를 벗어남
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 서버에게 요청 O, BUT 서버로부터 응답이 오지 않음
      console.log(error.request);
    } else {
      console.log("서버에게 요청이 실패하였습니다."); // 서버에게 요청 X
    }
    console.log(error); // 기타
  }
};

// HTTP Request Custom Functions: HTTP Request 메소드를 커스텀 함수로 작성하였습니다.
const getPosts = async () => {
  return await catchErrors(axios.get, getPostsPath);
};

const createPost = (userInputData) => {
  return await catchErrors(axios.post, createPostPath, userInputData);
};

const updatePost = (userInputData) => {
  return await catchErrors(axios.put, updatePostPath, userInputData);
};

const deletePost = () => {
  return await catchErrors(axios.delete, deletePostPath);
};

export { getPosts, createPost, updatePost, deletePost };

// 생각해볼 것: 리덕스 로직, 백엔드 분들과 에러 핸들링에 대해서 의논할것, (Form Validation도), 각각의 에러에 대해 프론트에서 어떻게 처리할지
