import GenericNode from "../core/GenericNode";
import T from "prop-types";

class Place extends GenericNode {
  getSchemaOrgType() {
    return "Place";
  }
}

Place.propTypes = {
  type: T.oneOf(["location"]),
  name: T.string
};

export default Place;
