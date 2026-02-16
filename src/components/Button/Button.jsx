import clsx from "clsx"
import style from "./Button.module.css"
import styled from "styled-components";

const Buton = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;


const TomatoButton = styled(Buton)`
  color: tomato;
  border-color: tomato;
background-color: blue;
`;

export const Button = ({ text, success, error, info }) => {
  return (
    // <button
    //   className={clsx(style.btn, {
    //     [style.success]: success,
    //     [style.error]: error,
    //     [style.info]: info
    //   })}
    //   type="button"
    // >
    //   {text}
    // </button>
    <>
      <Buton>{text}</Buton>
      <TomatoButton>{ text}</TomatoButton>
    </>
  );
};



