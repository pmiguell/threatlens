import { useState } from "react";
import style from "./AllPostsTable.module.css";
import PostPopUp from "../PostPopUp/PostPopUp";

export default function AllPostsTable({ posts = [], loading = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpen = (post) => { setSelectedPost(post); setIsOpen(true); };
  const handleClose = () => { setIsOpen(false); setSelectedPost(null); };

  if (loading) return <p style={{ color: "var(--color-text-muted)", padding: "1rem" }}>Carregando...</p>;
  if (!posts.length) return <p style={{ color: "var(--color-text-muted)", padding: "1rem" }}>Nenhum post encontrado.</p>;

  return (
    <>
      <table className={style.postsTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fonte</th>
            <th>Classificação</th>
            <th>Conteúdo</th>
            <th>IoC</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.source}</td>
              <td>{post.classification?.score?.toFixed(2)}</td>
              <td>{(post.title ?? post.content)?.slice(0, 60)}...</td>
              <td>{post.classification?.ioc ? "Sim" : "Não"}</td>
              <td>
                <a href="#" onClick={(e) => { e.preventDefault(); handleOpen(post); }}>
                  Analisar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PostPopUp
        isOpen={isOpen}
        onClose={handleClose}
        id={selectedPost?.id}
        category={selectedPost?.category ?? "-"}
        created_at={selectedPost?.createdAt}
        ioc={selectedPost?.classification?.ioc ? "Sim" : "Não"}
        keyword="-"
        relevant={selectedPost?.classification?.relevant ? "Sim" : "Não"}
        fulltext={selectedPost?.content}
      />
    </>
  );
}
