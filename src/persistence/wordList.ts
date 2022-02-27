import rawWordList from 'words.txt';

export const fetchWordList = async (): Promise<string[]> => {
  const response = await fetch(rawWordList);
  const fileContent = await response.text();

  return fileContent.split('\n').map((word) => word.trim().toLowerCase());
};
