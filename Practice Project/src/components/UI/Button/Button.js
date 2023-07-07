import ButtonStyles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={ButtonStyles.button} type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
