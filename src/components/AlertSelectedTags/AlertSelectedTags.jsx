import style from "./style.module.css"

export default function(props, onClose){
    return(
        <div className={style.tag}>
            <p>{props.name}</p>
            <div className={style.closeIcon} onClick={onClose}>
                    ✖ 
            </div>
        </div>
    )
}