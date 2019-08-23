import T from "prop-types";
import GenericNode from "../core/GenericNode";

class Organization extends GenericNode {
  getSchemaOrgType() {
    return "Organization";
  }
}

Organization.propTypes = {
  type: T.oneOf(["publisher", "author", "memberOf", "department"]),
  name: T.string,
  url: T.string,
  sameAs: T.arrayOf(T.string)
};

export default Organization;
