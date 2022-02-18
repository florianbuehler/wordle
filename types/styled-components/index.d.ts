// https://dev.to/rajuashok/create-styled-d-ts-to-make-typescript-work-with-styled-components-5dk4

import { Theme } from '../../src/styles';

declare module 'styled-components' {
  // extends the global DefaultTheme with our Theme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
