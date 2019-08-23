import JSONLDAbstractNode from "../JSONLDAbstractNode";

class GenericNodeCollection extends JSONLDAbstractNode {
  getJSON() {
    if (this.props.children) {
      return super.parseChildren();
    }
    return null;
  }
}

export default GenericNodeCollection;
