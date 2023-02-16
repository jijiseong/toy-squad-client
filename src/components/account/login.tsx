import Button from "../input/button";
import Input from "../input/input";
import IMGLogo from "../../assets/images/common/logo.svg";
import { AccountComment, AccountLogo } from "../../styles/account.style";
import { sendToServer } from "../../utils/sendToServer";
import { useDispatch } from "react-redux";

type onSubmitLoginType = {
  email: string;
  password: string;
};

const Login = ({ register, handleSubmit }: any) => {
  const dispatch = useDispatch();
  const onSubmitLogin = async (data: onSubmitLoginType) => {
    const answer = await sendToServer("/auth/login", "POST", {
      email: data.email,
      password: data.password,
    });
    if (answer.data.result) {
      alert(answer.data.message);
      dispatch({ type: "OFF" });
    }
  };
  return (
    <>
      <AccountLogo id="account_logo" src={IMGLogo} alt="header logo" />
      <AccountComment>토이스쿼드에 오신 것을 환영합니다.</AccountComment>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <Input
          register={register("email")}
          placeholder="이메일"
          style="account_input"
        />
        <Input
          type="password"
          register={register("password")}
          placeholder="비밀번호"
          style="account_input"
        />
        <Button value="로그인" style="account_button" click_func={() => {}} />
      </form>
    </>
  );
};

export default Login;
