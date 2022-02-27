type LocalStorageData = {
  secret: string | undefined;
  history: string[] | undefined;
};

export const loadGameState = (): LocalStorageData => {
  let data;
  try {
    data = JSON.parse(localStorage.getItem('data')!);
  } catch (e) {
    console.error(`Error occurred loading the game state: ${e}`);
  }

  return {
    secret: data?.secret,
    history: data?.history
  };
};

export const saveGameState = (secret: string | undefined, history: string[] | undefined): void => {
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
