export const loadHistory = () => {
  let data;
  try {
    data = JSON.parse(localStorage.getItem('data')!);
  } catch {}
  if (data != null) {
    if (data.secret === secret) {
      return data.history;
    }
  }
};

export const saveHistory = (history: string[]) => {
  const data = JSON.stringify({
    secret,
    history
  });
  try {
    localStorage.setItem('data', data);
  } catch {}
};
