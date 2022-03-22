import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    outline: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  :root {
    --color-milk: #fff;
    --color-elephant-900: #12344D;
    --color-elephant-850: #183247;
    --color-elephant-800: #264966;
    --color-elephant-700: #345C7C;
    --color-elephant-600: #447093;
    --color-smoke-800: #576c7d;
    --color-smoke-700: #475867;
    --color-smoke-300: #92A2B1;
    --color-smoke-100: #CFD7DF;
    --color-smoke-50: #EBEFF3;
    --color-smoke-25: #F3F5F7;
    --color-jungle-800: #00795B;
    --color-jungle-500: #00A886;
    --color-jungle-100: #B4E5DA;
    --color-jungle-50: #E0F5F1;
    --color-azure-800: #2C5CC5;
    --color-azure-400: #7FADCE;
    --color-azure-100: #BBDCFE;
    --color-azure-50: #E5F2FD;
    --color-persimmon-900: #C82124;
    --color-persimmon-800: #D72D30;
    --color-persimmon-100: #FFD0D6;
    --color-persimmon-50: #FFECF0;
    --color-casablanca-700: #E86F25;
    --color-casablanca-300: #F8AB59;
    --color-casablanca-100: #FEDCB3;
    --color-casablanca-50: #FEF1E1;
    --border-color: var(--color-smoke-100);
    --border-success-color: var(--color-jungle-100);
    --border-info-color: var(--color-azure-100);
    --border-danger-color: var(--color-persimmon-100);
    --border-warning-color: var(--color-casablanca-100);
    --bg-dark: var(--color-elephant-900);
    --bg-success: var(--color-jungle-50);
    --bg-info: var(--color-azure-50);
    --bg-danger: var(--color-persimmon-50);
    --bg-warning: var(--color-casablanca-50);
    --radius: 4px;
    --radius-small: 2px;
     --base-color: #11344d;
    --secondary-color: #6f7c87;
    --font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --font-weight-400: 400;
    --font-weight-300: 300;
    --font-weight-500: 500;
    --font-weight-600: 600;
    --font-weight-700: 700;
    --font-size-10: 10px;
    --font-size-12: 12px;
    --font-size-14: 14px;
    --font-size-16: 16px;
    --font-size-18: 18px;
    --font-size-20: 20px;
    --font-size-24: 24px;
    --text-default: var(--color-elephant-900);
    --text-secondary: var(--color-smoke-700);
    --text-disabled: var(--color-smoke-300);
    --text-success: var(--color-jungle-800);
    --text-info: var(--color-azure-800);
    --text-danger: var(--color-persimmon-800);
    --text-warning: var(--color-casablanca-700);
    --text-link: var(--color-azure-800);
    --icon-primary: var(--color-smoke-700);
    --icon-primary-hover: var(--color-smoke-100);
    --color-brand: #149999;
    --shadow-md: 0 1px 3px 0 rgb(18 52 77 / 20%);
    --shadow-lg: 0 1px 4px 0 rgb(18 52 77 / 30%);
  }

  html {
    display: flex;
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    color: #16171a;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  body {
    display: flex;
    box-sizing: border-box;
    flex: auto;
    align-self: stretch;
    max-width: 100%;
    max-height: 100%;
    -webkit-overflow-scrolling: touch;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover {
    color: #283da5;
    cursor: pointer;
  }

  textarea {
    resize: none;
  }

  ::-moz-selection {
    /* Code for Firefox */
    background: rgba(125, 188, 255, 0.6);
    color: #333;
  }

  ::selection {
    background: rgba(125, 188, 255, 0.6);
    color: #333;
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #a3afbf;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #a3afbf;
    opacity: 1;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #a3afbf;
    opacity: 1;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #a3afbf;
  }

  #root {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    height: 100%;
    width: 100%;
    position:relative;
  }

  a[href]:hover {
    text-decoration: none;
  }

  .bold {
    font-weight: var(--font-weight-600);
  }

  [data-reach-popover] {
    z-index: 130 !important;
  }

  [hidden] {
    display: none!important;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  `;
