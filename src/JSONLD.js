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

  return props.dangerouslyExposeHtml ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  ) : (
    <script type="application/ld+json">{JSON.stringify(json)}</script>
  );
};

JSONLD.propTypes = {
  additionalType: PropTypes.object,
  dangerouslyExposeHtml: PropTypes.bool,
  children: PropTypes.node
};

JSONLD.defaultProps = {
  dangerouslyExposeHtml: false
};

export default JSONLD;
