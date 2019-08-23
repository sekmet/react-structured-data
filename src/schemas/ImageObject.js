import T from "prop-types";
import GenericNode from "../core/GenericNode";

class ImageObject extends GenericNode {
  getSchemaOrgType() {
    return "ImageObject";
  }
}

ImageObject.propTypes = {
  type: T.oneOf([
    "diagram",
    "image",
    "logo",
    "photo",
    "primaryImageOfPage",
    "screenshot",
    "thumbnail"
  ]),
  url: T.string,
  contentUrl: T.string
};

export default ImageObject;
