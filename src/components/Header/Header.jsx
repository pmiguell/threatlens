import style from './Header.module.css';
import { CiUser } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const navigate = useNavigate();
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
                <CiUser className={style.headerIcon} onClick={() => navigate('/account')} />
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