import { Link } from "react-router-dom";
import styled from "styled-components";

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
    margin-bottom: 20px;
    border: 1px solid #dfe6e9;
    background-color: #fafafa;
    padding-left: 10px;
  }
  button {
    width: 30%;
    max-width: 100px;
    margin: 0 auto;
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
  return (
    <Wrapper>
      <Header>로그인</Header>
      <Form>
        <input type="text" placeholder="사용자 이름 또는 이메일" />
        <input type="text" placeholder="비밀번호" />
        <button>Login</button>
      </Form>
      <Register>
        계정이 없으신가요?{" "}
        <Link to="/register">
          <span>회원가입</span>
        </Link>
      </Register>
    </Wrapper>
  );
};

export default Login;
