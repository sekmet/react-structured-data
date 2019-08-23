import GenericNode from "../core/GenericNode";
import T from "prop-types";

class Article extends GenericNode {
  getSchemaOrgType() {
    return "Article";
  }
}

Article.propTypes = {
  image: T.string,
  headline: T.string,
  datePublished: T.string,
  dateModified: T.string,
  mainEntityOfPage: T.string
};

export default Article;
