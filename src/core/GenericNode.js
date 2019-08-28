import JSONLDAbstractNode from "../JSONLDAbstractNode";
import { encode } from "he";

class GenericNode extends JSONLDAbstractNode {
  getJSON({ type, jsonldtype, ...schema }) {
    const parseChildren = super.parseChildren();
    const details = {
      "@type": jsonldtype || this.getSchemaOrgType(),
      ...schema
    };
    // delete props that are `null`
    Object.keys(details).forEach(key => {
      if (details[key] === null) delete details[key];
    });
    // escape string prop values
    const clearProps = Object.assign(
      ...Object.entries(details).map(([key, value]) => ({
        [key]: typeof value === "string" ? encode(value) : value
      }))
    );
    return type
      ? Object.assign({ [type]: clearProps }, ...parseChildren)
      : Object.assign(clearProps, ...parseChildren);
  }
}

export default GenericNode;
