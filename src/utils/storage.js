export const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return null;
      try {
        return JSON.parse(item);
      } catch {
        // Fallback para valores armazenados como string pura (legado)
        return item;
      }
    } catch {
      return null;
    }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};
