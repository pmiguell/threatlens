import style from './Header.module.css';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useState, useEffect } from 'react';

export default function Header(props) {
    const [isLight, setIsLight] = useState(() => {
        return localStorage.getItem('theme') === 'light';
    });

    useEffect(() => {
        document.body.classList.toggle('light', isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }, [isLight]);

    return (
        <header className={style.header}>
            <div className={style.welcome}>
                <h2>{props.pageName}</h2>
                <p>{props.pageDescription}</p>
            </div>
            <div className={style.headerIcons}>
                <IoIosNotificationsOutline className={style.headerIcon} />
                <CiUser className={style.headerIcon} />
                <label className={style.switch}>
                    <input
                        type="checkbox"
                        checked={isLight}
                        onChange={() => setIsLight(!isLight)}
                    />
                    <span className={style.slider}></span>
                </label>
            </div>
        </header>
    )
}