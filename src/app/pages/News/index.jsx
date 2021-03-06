import markdown from "./news.md";
import { htmlToVdom } from "hyperstatic/src/htmlToVdom";
import { Link } from "hyperstatic";
import News from "../News";

export default ({ fields }) => {
  const { body, title, subtitle, featuredImage, address, phone, email } =
    fields;
  <div>
    title={title}
    subtitle={subtitle}
    backgroundImage={featuredImage}
  </div>;
};
