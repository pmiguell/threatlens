import { useState } from "react";
import style from "./Posts.module.css";
import Header from "../../components/Header/Header";
import AllPostsTable from "../../components/AllPostsTable/AllPostsTable";
import { usePosts } from "../../hooks";

export default function Posts() {
  const [page, setPage] = useState(0);
  const { posts, pagination, loading } = usePosts({ page, size: 20 });

  return (
    <div className={style.posts}>
      <Header pageName="Posts" pageDescription="Analise os posts inseridos no sistema." />

      <div className={style.postsContainer}>
        <AllPostsTable posts={posts} loading={loading} />

        {pagination && (
          <div className={style.pagination}>
            <button
              className={style.pageBtn}
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
            >
              Anterior
            </button>
            <span className={style.pageInfo}>
              Página {pagination.page + 1} de {pagination.totalPages}
            </span>
            <button
              className={style.pageBtn}
              disabled={page >= pagination.totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
            >
              Próxima
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
