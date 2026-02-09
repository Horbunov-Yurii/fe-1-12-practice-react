// import "./Tittle.css"//підключення звичайного css
export const Tittle = ({ text }) => {
    // return <h2 style={{color:"red",fontSize: 44}} >{text}</h2>//приклад використання інлайнових стилів
    //  return <h2 className="caption">{text}</h2>;//звичайний css
      return <h2>{text}</h2>;
}