import React from "react";
import PropTypes from "prop-types";

class JSONLDAbstractNode extends React.Component {
  static propTypes = {
    schema: PropTypes.object,
    type: PropTypes.string,
    id: PropTypes.string,
    jsonldtype: PropTypes.string,
    children: PropTypes.node
  };

  getChildJSON(child) {
    if (!child) return null;

    const ChildClass = child.type;
    const { children, type, id, ...schema } = child.props;

    const newChildren = new ChildClass(child.props).getJSON(
      id
        ? {
            ...schema,
            "@id": id
          }
        : schema
    );
    return type ? Object.assign({ [type]: newChildren }) : newChildren;
  }

  parseChildren() {
    if (!this.props.children) return {};
    /*
     * If a component has a single child, this.props.children is a Child object.
     * If a component has multiple children, this.props.children is an array of Child objects.
     */
    if (this.props.children.length > 0) {
      // Children that are null will get filtered out
      return this.props.children
        .map(child => this.getChildJSON(child))
        .filter(child => child);
    }
    return [this.getChildJSON(this.props.children)];
  }

  render() {
    return null;
  }

  getSchemaOrgType() {
    return "";
  }
}

export default JSONLDAbstractNode;
