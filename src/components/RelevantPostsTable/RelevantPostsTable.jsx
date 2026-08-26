import style from "./RelevantPostsTable.module.css";
import { useState } from "react";
import PostPopUp from "../PostPopUp/PostPopUp";

export default function RelevantPostsTable({ mostRelevantPosts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null); // Adicionado para armazenar o post selecionado

  const handleOpenPopup = (post) => {
    setSelectedPost(post); // Armazena o post selecionado
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setSelectedPost(null); // Limpa o post selecionado ao fechar
  };

  return (
    <div className={style.tableContainer}>
      <h2 className={style.description}>Posts mais relevantes</h2>
      <div className={style.tableScroll}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Classificação</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mostRelevantPosts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title ?? post.content?.slice(0, 60)}</td>
                <td className={style.rate}>
                  {(post.classification?.score ?? post.rate)?.toFixed(2)}
                </td>
                <td>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenPopup(post);
                    }}
                  >
                    Analisar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PostPopUp
        isOpen={isOpen}
        onClose={handleClosePopup}
        id={selectedPost?.id}
        category={selectedPost?.category ?? "-"}
        created_at={selectedPost?.createdAt ?? selectedPost?.created_at}
        ioc={selectedPost?.classification ? (selectedPost.classification.ioc ? "Sim" : "Não") : selectedPost?.ioc}
        keyword={selectedPost?.keyword ?? "-"}
        relevant={selectedPost?.classification ? (selectedPost.classification.relevant ? "Sim" : "Não") : selectedPost?.relevant}
        fulltext={selectedPost?.content ?? selectedPost?.fulltext}
      />
    </div>
  );
}
