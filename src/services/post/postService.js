import api from "../api";

export async function getPosts(params = {}) {
  const { data } = await api.get("/posts", { params });
  return data;
}

export async function getStats(params = {}) {
  const { data } = await api.get("/posts/stats", { params });
  return data;
}

export async function getWordCloud(params = {}) {
  const { data } = await api.get("/posts/wordcloud", { params });
  return data;
}
