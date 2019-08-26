import JSONLDAbstractNode from "../JSONLDAbstractNode";
import T from "prop-types";

class GenericNodeCollection extends JSONLDAbstractNode {
  getJSON() {
    if (this.props.children) {
      return super.parseChildren();
    }
    return null;
  }
}

GenericNodeCollection.propTypes = {
  type: T.string.isRequired
};

export default GenericNodeCollection;
