import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  border: 1px solid #dfe6e9;
  border-radius: 15px;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: #5eaca0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  line-height: 30px;
  padding: 10px 0;
`;

const Form = styled.form`
  padding: 5% 10%;
  input {
    display: block;
    width: 100%;
    height: 35px;
    border: 1px solid #dfe6e9;
    background-color: #fafafa;
    padding-left: 10px;
  }
  button {
    width: 30%;
    max-width: 100px;
    margin: 5px auto 0 auto;
    display: block;
    height: 40px;
    border-radius: 15px;
    border: 1px solid #5eaca0;
    background-color: #5eaca0;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      border: 1px solid #5eaca0;
      color: #5eaca0;
      background-color: #fff;
    }
  }
  .errorMessage {
    font-size: 10px;
    color: red;
    line-height: 20px;
  }
`;

const InputBox = styled.div`
  height: 65px;
  padding: 15px 0;
`;
const Register = styled.div`
  text-align: center;
  font-size: 12px;
  height: 30px;
  span {
    color: #74b9ff;
  }
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    // 기본으로 data 가져오기
    console.log(data);
  };
  return (
    <Wrapper>
      <Header>로그인</Header>
      <Form onSubmit={handleSubmit(onValid)}>
        <InputBox>
          <input
            {...register("id", {
              required: "true",
              minLength: {
                value: 6,
                message: "이름은 6자 이상으로 입력하여 주시길 바랍니다.",
              },
            })}
            type="text"
            placeholder="사용자 이름 또는 이메일"
          />
          <div className="errorMessage">
            {errors.id?.type === "required" &&
              "이름을 필수 조건으로 입력하시길 바랍니다."}
            {errors.id?.type === "minLength" && errors.id.message}
          </div>
        </InputBox>
        <InputBox>
          <input
            {...register("password", {
              required: "true",
              minLength: {
                value: 6,
                message: "비밀번호는 6자 이상으로 입력하여 주시길 바랍니다.",
              },
            })}
            type="text"
            placeholder="비밀번호"
          />
          <div className="errorMessage">
            {errors.password?.type === "required" &&
              "비밀번호는 필수 조건으로 입력하시길 바랍니다."}
            {errors.password?.type === "minLength" && errors.password.message}
          </div>
        </InputBox>
        <button>Login</button>
      </Form>
      <Register>
        계정이 없으신가요?
        <Link to="/register">
          <span> 회원가입</span>
        </Link>
      </Register>
    </Wrapper>
  );
};

export default Login;
