import style from "./PostAttribute.module.css"

export default function PostAttributes(props){
    return(
        <div className={style.attribute}>
            <label htmlFor="">  {props.name} </label>
            <input type="text" disabled value={props.value} />
        </div>
    )
}