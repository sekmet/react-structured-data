import React from "react";
import PropTypes from "prop-types";
import GenericNodeCollection from "./core/GenericNodeCollection";

export const JSONLD = props => {
  let json = null;
  if (props.children) {
    const ChildClass = props.children.type;
    const { children, type, ...schema } = props.children.props;

    const childClassInstance = new ChildClass(props.children.props);
    const firstChild = childClassInstance.getJSON(schema);

    json =
      childClassInstance instanceof GenericNodeCollection
        ? Object.assign(
            { "@context": "https://schema.org/" },
            { [type]: firstChild }
          )
        : Object.assign({ "@context": "https://schema.org/" }, firstChild);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
};

JSONLD.propTypes = {
  additionalType: PropTypes.object,
  children: PropTypes.node
};

export default JSONLD;
