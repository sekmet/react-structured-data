import GenericNode from "../core/GenericNode";
import T from "prop-types";

class Product extends GenericNode {
  getSchemaOrgType() {
    return "Product";
  }
}

Product.propTypes = {
  type: T.oneOf(["itemReviewed"])
};
export default Product;
