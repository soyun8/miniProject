import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
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

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
    axios
      .post("/signup", {
        data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Header>회원 가입</Header>
      <Form onSubmit={handleSubmit(onValid)}>
        <InputBox>
          <input
            {...register("id", {
              required: "true",
              minLength: {
                value: 6,
                message: "아이디는 6자 이상으로 입력하여 주시길 바랍니다.",
              },
            })}
            type="text"
            placeholder="Id"
          />
          <div className="errorMessage">
            {errors.id?.type === "required" &&
              "아이디를 필수 조건으로 입력하시길 바랍니다."}
            {errors.id?.type === "minLength" && errors.id.message}
          </div>
        </InputBox>
        <InputBox>
          <input
            {...register("pwd", {
              required: "true",
              minLength: {
                value: 6,
                message: "비밀번호는 6자 이상으로 입력하여 주시길 바랍니다.",
              },
            })}
            type="text"
            placeholder="Password"
          />
          <div className="errorMessage">
            {errors.pwd?.type === "required" &&
              "비밀번호를 필수 조건으로 입력하시길 바랍니다."}
            {errors.pwd?.type === "minLength" && errors.pwd.message}
          </div>
        </InputBox>
        <InputBox>
          <input
            {...register("name", {
              required: "true",
              minLength: {
                value: 1,
                message: "이름은 1글자 이상으로 입력하여 주시길 바랍니다.",
              },
            })}
            type="text"
            placeholder="Name"
          />
          <div className="errorMessage">
            {errors.name?.type === "required" &&
              "이름을 필수 조건으로 입력하시길 바랍니다."}
            {errors.name?.type === "minLength" && errors.name.message}
          </div>
        </InputBox>
        <InputBox>
          <input
            {...register("address", {
              required: "true",
              minLength: {
                value: 6,
                message: "주소는 6자 이상으로 입력하여 주시길 바랍니다.",
              },
            })}
            type="text"
            placeholder="Address"
          />
          <div className="errorMessage">
            {errors.address?.type === "required" &&
              "주소를 필수 조건으로 입력하시길 바랍니다."}
            {errors.address?.type === "minLength" && errors.address.message}
          </div>
        </InputBox>
        <InputBox>
          <input
            {...register("email", {
              required: "true",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "이메일 형식에 맞게 입력해주세요",
              },
            })}
            type="text"
            placeholder="Email"
          />
          <div className="errorMessage">
            {errors.email?.type === "required" &&
              "이메일을 필수 조건으로 입력하시길 바랍니다."}
            {errors.email?.type === "pattern" && errors.email.message}
          </div>
        </InputBox>

        <button>Register</button>
      </Form>
    </Wrapper>
  );
};

export default Register;
