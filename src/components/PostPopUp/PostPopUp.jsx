import style from "./PostPopUp.module.css";
import PostAttribute from "../PostAttribute/PostAttribute";

export default function PostPopUp({ isOpen, onClose, id, category, created_at, ioc, keyword, relevant, fulltext }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={style.postPopUp}>
            <div className={style.postContent}>
                <div className={style.topIcons} onClick={onClose}>
                    ✖
                </div>

                <div className={style.postContainer}>
                    <h1>Título Post</h1>

                    <div className={style.postAttributes}>
                        <PostAttribute name="ID" value={id} />
                        <PostAttribute name="Categoria" value={category} />
                        <PostAttribute name="Criado" value={created_at} />
                        <PostAttribute name="IOC" value={ioc} />
                        <PostAttribute name="Keyword" value={keyword} />
                        <PostAttribute name="Relevante" value={relevant} />
                    </div>

                    <hr className={style.postDivider} />

                    <div className={style.postBody}>
                        <p>{fulltext}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
