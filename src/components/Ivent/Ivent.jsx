import style from "./Ivent.module.css";
import clsx from "clsx";
import { Text } from "./Ivent.style";
import { formatIventStart } from "../../utils/formatIventStart";
import {formatDistance} from"../../utils/formatDifferenceTime"
export const Ivent = ({ props }) => {
  return (
    <>
      {props.map(
        ({
          id,
          images,
          title,
          genre,
          developer,
          year,
          platform,
          rating,
          isOnline,
          time
        }) => {
          const formatStart = formatIventStart(time.start)
         const formatDefference = formatDistance(time.start, time.end)
          return (
            <li key={id} className={style.item}>
              <img src={images} alt={title} className={style.img} />
              <h3 className={style.title}>{title}</h3>
              <h4 className={style.caption}>{genre}</h4>
              <p className={style.text}>{developer}</p>
              <time className={style.time} dateTime={year}>
                {year}
              </time>
              <p className={style.desk}>{platform}</p>
              <p className={style.description}>{rating}</p>
              <p>{formatStart}</p>
              <p>{formatDefference}</p>
              {/* <p className={clsx(style.desk, {
                [style.online] : isOnline,
                [style.ofline] : !isOnline
              })}>{isOnline ? "Online" : "Ofline"}</p> */}
              {/* <p
                className={clsx(
                  style.desk,
                  isOnline ? style.online : style.ofline,
                )}
              >
                {isOnline ? "Online" : "Ofline"}
              </p> */}
              <Text status={isOnline ? "Online" : "Ofline"}>
                {isOnline ? "Online" : "Ofline"}
              </Text>
            </li>
          );
        },
      )}
    </>
  );
};
