import { MouseEventHandler } from "react";
import "../../styles/button.css";

type ButtonType = {
  value: string;
  type?: "submit" | "button" | "reset";
  click_func?: MouseEventHandler<HTMLButtonElement>;
  style: "account_button" | "link";
};

const Button = ({ type = "submit", value, click_func, style }: ButtonType) => {
  const add_styles =
    style === "account_button" ? "ft_color_white bg_color_main" : "";
  return (
    <button
      type={type}
      onClick={click_func}
      className={`${style} ${add_styles}`}
    >
      {value}
    </button>
  );
};

export default Button;
