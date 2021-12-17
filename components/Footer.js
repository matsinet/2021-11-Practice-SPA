import html from "html-literal";

let copyrightYear = new Date().getFullYear();

export default () => html`
  <footer>
    &copy;${copyrightYear} <a href="https://savvycoders.com/">Savvy Coders</a>
  </footer>
`;
