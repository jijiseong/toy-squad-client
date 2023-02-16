import { useState } from "react";
import { useDispatch } from "react-redux";
import { AccountComment, AccountTitle } from "../../styles/account.style";
import { sendToServer } from "../../utils/sendToServer";
import Button from "../input/button";
import Input from "../input/input";

type onSubmitEmailType = {
  email: string;
};

type onSubmitSignUpType = {
  email: string;
  password: string;
  password_check: string;
  name: string;
  auth_num: string;
};

const SignUp = ({ register, handleSubmit }: any) => {
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const dispatch = useDispatch();
  const onSubmitEmail = async (data: onSubmitEmailType) => {
    const answer = await sendToServer("/auth/signup", "POST", {
      email: data.email,
    });
    if (answer.data.result) {
      setIsEmail(true);
    }
  };

  const onSubmitSignUp = async (data: onSubmitSignUpType) => {
    const answer = await sendToServer("/user", "POST", {
      auth_num: data.auth_num,
      email: data.email,
      name: data.name,
      password: data.password,
    });
    if (answer.data.result) {
      alert(answer.data.message);
      await sendToServer("/auth/login", "POST", {
        email: data.email,
        password: data.password,
      });
      dispatch({ type: "OFF" });
    }
    console.log(answer);
  };

  return (
    <>
      <AccountTitle>이메일로 계정 생성</AccountTitle>
      <AccountComment>
        {isEmail ? (
          <div>
            이메일이 전송되었습니다. <br />
            인증번호를 입력하고 회원가입을 완료해주세요.
          </div>
        ) : (
          <div>환영합니다! 인증 번호를 받을 이메일을 입력해주세요.</div>
        )}
      </AccountComment>

      <form onSubmit={handleSubmit(isEmail ? onSubmitSignUp : onSubmitEmail)}>
        {isEmail ? (
          <>
            <Input
              label="인증번호"
              register={register("auth_num")}
              placeholder={"인증번호 입력"}
              style="account_input"
            />
            <Input
              label="이메일"
              register={register("email")}
              placeholder={"이메일을 입력하세요."}
              style="account_input"
            />
            <Input
              label="이름"
              register={register("name")}
              placeholder={"이름을 입력하세요."}
              style="account_input"
            />
            <Input
              type="password"
              label="비밀번호"
              register={register("password")}
              placeholder={"사용할 비밀번호를 입력하세요."}
              style="account_input"
            />
            <Input
              type="password"
              label="비밀번호 확인"
              register={register("password_check")}
              placeholder={"비밀번호 확인"}
              style="account_input"
            />
          </>
        ) : (
          <Input
            register={register("email")}
            placeholder={"사용할 이메일을 입력하세요."}
            style="account_input"
          />
        )}
        <Button value={"계정 생성"} style="account_button" />
      </form>
    </>
  );
};

export default SignUp;
