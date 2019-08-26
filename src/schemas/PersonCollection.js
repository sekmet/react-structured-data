import GenericNodeCollection from "../core/GenericNodeCollection";
import T from "prop-types";

class PersonCollection extends GenericNodeCollection {}

PersonCollection.propTypes = {
  type: T.oneOf(["author"]).isRequired
};

export default PersonCollection;
