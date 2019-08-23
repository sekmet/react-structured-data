import GenericNode from "../core/GenericNode";
import T from "prop-types";

class AdministrativeArea extends GenericNode {
  getSchemaOrgType() {
    return "AdministrativeArea";
  }
}

AdministrativeArea.propTypes = {
  type: T.oneOf(["locationCreated"])
};

export default AdministrativeArea;
