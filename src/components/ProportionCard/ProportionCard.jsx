import style from "./style.module.css";


export default function ProportionCard(props) {
    return (
        <div className={style.proportionCardsContainer}>
            <div className={style.proportionCard}>
                <h3 className={style.description}>Posts analisados hoje</h3>
                <h2 className={style.value}>{props.analyzedPosts}</h2>
            </div>
            <div className={style.proportionCard}>
                <h3 className={style.description}>Posts relevantes hoje</h3>
                <div className={style.valueContainer}>
                    <h2 className={style.value}>{props.relevantPosts}</h2>
                    <h2 className={style.percentValue}>{(props.relevantPosts / props.analyzedPosts).toFixed(4) * 100}%</h2>
                </div>
            </div>
        </div>
    )
}