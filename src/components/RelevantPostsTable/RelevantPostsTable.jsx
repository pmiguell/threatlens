import { useState } from "react";
import style from "./style.module.css";
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
                <td>{post.title}</td>
                <td className={style.rate}>{post.rate}</td>
                <td>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenPopup(post); // Passa o post selecionado
                    }}
                  >
                    Visualizar
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
        category={selectedPost?.category} 
        created_at={selectedPost?.created_at} 
        ioc={selectedPost?.ioc} 
        keyword={selectedPost?.keyword} 
        relevant={selectedPost?.relevant} 
        fulltext={selectedPost?.fulltext}
      />
    </div>
  );
}
