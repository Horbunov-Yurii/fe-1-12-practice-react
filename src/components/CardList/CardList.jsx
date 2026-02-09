import style from "./CardList.module.css"

export const CardList = ({children})=> {
    return <ul className={style.list}>{children}</ul> 
}