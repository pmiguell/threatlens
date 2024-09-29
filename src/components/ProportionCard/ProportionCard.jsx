import style from "./style.module.css";


export default function ProportionCard() {
    return (
        <div className={style.proportionCardsContainer}>
            <div className={style.proportionCard}>
                <h3 className={style.description}>Posts analisados hoje</h3>
                <h2 className={style.value}>26575</h2>
            </div>
            <div className={style.proportionCard}>
                <h3 className={style.description}>Posts relevantes hoje</h3>
                <div className={style.valueContainer}>
                    <h2 className={style.value}>3341</h2>
                    <h2 className={style.percentValue}>(12,57%)</h2>
                </div>
            </div>
        </div>
    )
}