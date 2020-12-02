import { css } from 'styled-components';

// theme
import { colors } from './theme';

export default css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Benne Regular', serif;
    line-height: 1.15;
    margin-bottom: 1rem;
    margin: 2.75rem 0 1.05rem;
  }

  h1 {
    font-size: 4.009em;

    @media screen and (max-width: 800px) {
      font-size: 3.052em;
    }
  }

  h2 {
    font-size: 2.957em;

    @media screen and (max-width: 800px) {
      font-size: 2.441em;
    }
  }

  h3 {
    font-size: 2.369em;

    @media screen and (max-width: 800px) {
      font-size: 1.953rem;
    }
  }

  h4 {
    font-size: 1.777em;

    @media screen and (max-width: 800px) {
      font-size: 1.563rem;
    }
  }

  h5 {
    font-size: 1.333em;
  }

  div,
  p,
  a,
  li,
  button {
    font-family: 'Quattrocento Sans', Helvetica, sans-serif;
  }

  div,
  a,
  button {
    :focus {
      outline: none;
    }
  }

  a,
  span {
    color: ${colors.fontGreen};
  }

  span:focus {
    outline: none;
  }

  p {
    line-height: 25px;
    word-spacing: 0.5px;
  }

  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
