import style from "./style.module.css"
import PostAttribute from "../PostAttribute/PostAttribute"

export default function PostPopUp(){
    return (
        <div className={style.postPopUp}>
            <div className={style.topIcons}>
                ✖
            </div>

            <div className={style.postContainer}>

                {/* <h1>{prop.tituloPost}</h1> */}
                <h1>Título Post</h1>

                <div className={style.postAttributes}>
                    {/* props para passar o valor do campo */}
                    <PostAttribute name="ID"/>
                    <PostAttribute name="Categoria"/>
                    <PostAttribute name="Criado"/>
                    <PostAttribute name="IOC"/>
                    <PostAttribute name="Keyword"/>
                    <PostAttribute name="Relevante"/>
                </div>
                
                <hr className={style.postDivider} />
            
                <div className={style.postBody}>
                    {/* props para passar o conteúdo*/}
                    firefox acessar deep web reparei firefox navegador duckduck tor browser parecido suporte 
                    firefox diferenca caso utilizar firefox dois praticamente mesma tor browser baseado firefox 
                    salvo modificacoes extensoes acompanha qualquer forma tor browser preparado seguro exige 
                    configuracoes alem nivel seguranca basicamente browser leves modificacoes diferentes versoes 
                    mesma detalhe firefox extensao webrtc webgl desativados padrao acarretar vazamento usuario 
                    quiser firefox recomendo pesquisar how stop decrease browser fingerprint perceber maioria 
                    vezes solucao passa desativar javascript tor modificacao firefoxconfiguracoes alem nivel 
                    seguranca basicamente browser leves modificacoes diferentes versoes 
                    mesma detalhe firefox extensao webrtc webgl desativados padrao acarretar vazamento usuario 
                    quiser firefox recomendo pesquisar how stop decrease browser fingerprint perceber maioria 
                    vezes solucao passa desativar javascript tor modificacao firefox
                 </div>

            </div>


        </div> 
    )

}