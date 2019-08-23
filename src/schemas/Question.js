import T from "prop-types";
import GenericNode from "../core/GenericNode";

class Question extends GenericNode {
  getSchemaOrgType() {
    return "Question";
  }
}

Question.propTypes = {
  type: T.oneOf(["mainEntity"]),
  upvoteCount: T.number,
  dateCreated: T.string,
  dateModified: T.string,
  keywords: T.string,
  name: T.string,
  text: T.string,
  answerCount: T.number
};

export default Question;
