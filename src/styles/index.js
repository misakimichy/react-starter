import { createGlobalStyle } from 'styled-components';

import Global from './Global';
import Reset from './Reset';

import '../../static/fonts/fonts.css';

const GlobalStyles = createGlobalStyle`
  ${Global}
  ${Reset}
`;
export default GlobalStyles;
