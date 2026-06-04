import { useMemo, useState } from "react";

const mockPosts = [
  { id: 4223, rate: 0.99, title: "Como obter o IP de um site...", keywords: "IP", ioc: "Sim" },
  { id: 4224, rate: 0.87, title: "Como hackear uma rede wifi...", keywords: "wifi, hack", ioc: "Não" },
  { id: 4225, rate: 0.75, title: "SQL Injection em aplicações web", keywords: "sql, injection", ioc: "Sim" },
  { id: 4226, rate: 0.62, title: "Dataleak da Algar no dia 13/02/2025", keywords: "dataleak", ioc: "Sim" },
  { id: 4227, rate: 0.55, title: "Como planejar um ataque DDoS...", keywords: "ddos, attack", ioc: "Não" },
];

export function usePosts({ search = "" } = {}) {
  const [loading] = useState(false);
  const [error] = useState(null);

  const posts = useMemo(() => {
    if (!search.trim()) return mockPosts;
    const query = search.toLowerCase();
    return mockPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.keywords.toLowerCase().includes(query)
    );
  }, [search]);

  return { posts, loading, error };
}
