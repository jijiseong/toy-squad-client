import "../../styles/input.css";

type InputType = {
  type?: string;
  placeholder?: string;
  register?: any;
  style?: "account_input";
  label?: string;
};

const Input = ({ type, placeholder, register, style, label }: InputType) => {
  return (
    <>
      {label && <label className="input_label">{label}</label>}
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        {...register}
        className={style}
      />
    </>
  );
};

export default Input;
