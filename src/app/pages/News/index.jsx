import markdown from "./news.md";
import { htmlToVdom } from "hyperstatic/src/htmlToVdom";
import { Link } from "hyperstatic";

export default () => (
  <div class="news_section">
    {htmlToVdom(markdown)}
    <p></p>
  </div>
);
