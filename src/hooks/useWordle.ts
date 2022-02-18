import { useContext } from 'react';
import { Wordle, WordleContext } from 'context/wordleContext';

export const useWordle = (): Wordle => useContext(WordleContext);
