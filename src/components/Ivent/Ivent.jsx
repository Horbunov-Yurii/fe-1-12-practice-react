import style from "./Ivent.module.css"

export const Ivent = ({ props }) => {
  return (
    <>
      {props.map(
        ({ id, images, title, genre, developer, year, platform, rating }) => {
          return (
            <li key={id} className={style.item}>
              <img src={images} alt={title}  className={style.img}/>
              <h3 className={style.title}>{title}</h3>
              <h4 className={style.caption}>{genre}</h4>
              <p className={style.text}>{developer}</p>
              <time className={style.time} dateTime={year}>{year}</time>
              <p className={style.desk}>{platform}</p>
              <p className={style.description}>{rating}</p>
            </li>
          );
        },
      )}
    </>
  );
};
// ytrergt
