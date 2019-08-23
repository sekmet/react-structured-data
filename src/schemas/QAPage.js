import T from "prop-types";
import GenericNode from "../core/GenericNode";

class QAPage extends GenericNode {
  getSchemaOrgType() {
    return "QAPage";
  }
}

QAPage.propTypes = {
  url: T.string
};

export default QAPage;
