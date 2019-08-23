import GenericNode from "../core/GenericNode";
import T from "prop-types";

class Rating extends GenericNode {
  getSchemaOrgType() {
    return "Rating";
  }
}

Rating.propTypes = {
  type: T.oneOf(["reviewRating"])
};

export default Rating;
