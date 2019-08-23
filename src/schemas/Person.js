import T from "prop-types";
import GenericNode from "../core/GenericNode";

class Person extends GenericNode {
  getSchemaOrgType() {
    return "Person";
  }
}

Person.propTypes = {
  type: T.oneOf(["author"]),
  image: T.string,
  name: T.string,
  url: T.string,
  mainEntityOfPage: T.string
};

export default Person;
