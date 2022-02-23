export const loadGameState = (secret: string): string[] | undefined => {
  let data;
  try {
    data = JSON.parse(localStorage.getItem('data')!);
  } catch (e) {
    console.error(`Error occurred loading the game state: ${e}`);
  }
  if (data != null) {
    if (data.secret === secret) {
      return data.history;
    }
  }
};

export const saveGameState = (secret: string, history: string[]): void => {
  const data = JSON.stringify({
    secret,
    history
  });
  try {
    localStorage.setItem('data', data);
  } catch (e) {
    console.error(`Error occurred saving the game state: ${e}`);
  }
};
