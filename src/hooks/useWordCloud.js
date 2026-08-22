import { useState, useEffect } from "react";
import { getWordCloud } from "../services/post/postService";

export function useWordCloud({ period, from, to, limit } = {}) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const params = {};
    if (from || to) {
      if (from) params.from = from;
      if (to) params.to = to;
    } else if (period && period !== "ALL") {
      params.period = period;
    }
    if (limit) params.limit = limit;

    getWordCloud(params)
      .then((data) => {
        if (!cancelled) {
          setWords((data?.words ?? []).map((w) => ({ text: w.word, value: w.count })));
        }
      })
      .catch((err) => { if (!cancelled) setError(err); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [period, from, to, limit]);

  return { words, loading, error };
}
