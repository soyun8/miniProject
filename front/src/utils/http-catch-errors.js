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

export default catchErrors;
