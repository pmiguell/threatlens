import style from "./PostAttribute.module.css"

export default function PostAttribute({ name, value }) {
    return (
        <div className={style.attribute}>
            <span className={style.label}>{name}</span>
            <span className={style.value}>{value ?? "-"}</span>
        </div>
    )
}
