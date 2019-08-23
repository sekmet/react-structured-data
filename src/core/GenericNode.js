import JSONLDAbstractNode from "../JSONLDAbstractNode";

class GenericNode extends JSONLDAbstractNode {
  getJSON({ type, jsonldtype, ...schema }) {
    const parseChildren = super.parseChildren();
    const details = {
      "@type": jsonldtype || this.getSchemaOrgType(),
      ...schema
    };
    return type
      ? Object.assign({ [type]: details }, ...parseChildren)
      : Object.assign(details, ...parseChildren);
  }
}

export default GenericNode;
