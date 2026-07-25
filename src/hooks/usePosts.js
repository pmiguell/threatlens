import { useState, useEffect } from "react";
import { getPosts } from "../services/post/postService"

export function usePosts({ page = 0, size = 20, period, relevance, sources, sort, order, category } = {}) {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const params = { page, size };
    if (period && period !== "ALL") params.period = period;
    if (relevance) params.relevance = relevance;
    if (sources?.length) params.sources = sources;
    if (sort) params.sort = sort;
    if (order) params.order = order;
    if (category) params.category = category;

    getPosts(params)
      .then((result) => {
        if (!cancelled) {
          setPosts(result.data);
          setPagination(result.pagination);
        }
      })
      .catch((err) => { if (!cancelled) setError(err); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [page, size, period, relevance, sort, order, category]); // eslint-disable-line react-hooks/exhaustive-deps

  return { posts, pagination, loading, error };
}
