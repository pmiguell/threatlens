import style from "./style.module.css";
import PostAttribute from "../PostAttribute/PostAttribute";

export default function PostPopUp({ isOpen, onClose, id, category, created_at, ioc, keyword, relevant }) {
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
                        firefox acessar deep web reparei firefox navegador duckduck tor browser parecido suporte
                        firefox diferenca caso utilizar firefox dois praticamente mesma tor browser baseado firefox
                        salvo modificacoes extensoes acompanha qualquer forma tor browser preparado seguro exige
                        configuracoes alem nivel seguranca basicamente browser leves modificacoes diferentes versoes
                        mesma detalhe firefox extensao webrtc webgl desativados padrao acarretar vazamento usuario
                        quiser firefox recomendo pesquisar how stop decrease browser fingerprint perceber maioria
                        vezes solucao passa desativar javascript tor modificacao firefox
                    </div>
                </div>
            </div>
        </div>
    );
}
