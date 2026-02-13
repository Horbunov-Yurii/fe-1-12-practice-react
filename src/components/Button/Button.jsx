import clsx from "clsx"
import style from"./Button.module.css"
export const Button = ({ text, success, error, info }) => {
  return (
    <button
      className={clsx(style.btn, {
        [style.success]: success,
        [style.error]: error,
        [style.info]: info
      })}
      type="button"
    >
      {text}
    </button>
  );
};