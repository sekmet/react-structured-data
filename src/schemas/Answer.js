import T from "prop-types";
import GenericNode from "../core/GenericNode";

class Answer extends GenericNode {
  getSchemaOrgType() {
    return "Answer";
  }
}

Answer.defaultProps = {
  upvoteCount: 0
};

Answer.propTypes = {
  type: T.oneOf(["acceptedAnswer", "suggestedAnswer"]),
  downvoteCount: T.number,
  upvoteCount: T.number,
  dateCreated: T.string,
  text: T.string
};

export default Answer;
