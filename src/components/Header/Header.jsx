import style from './Header.module.css';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";

export default function Header(props) {
    return (
        <header className={style.header}>
            <div className={style.welcome}>
                <h2>{props.pageName}</h2>
                <p>{props.pageDescription}</p>
            </div>
            <div className={style.headerIcons}>
                <IoIosNotificationsOutline className={style.headerIcon} />
                <CiUser className={style.headerIcon} />
            </div>
        </header>
    )
}