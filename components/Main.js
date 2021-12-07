import html from "html-literal";
import * as views from "./views";

export default () => html`
  ${views["Home"]()} ${views["Bio"]()} ${views["Gallery"]()}
  ${views["Register"]()}
`;
