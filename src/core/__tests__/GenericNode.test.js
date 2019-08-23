import React from "react";
import renderer from "react-test-renderer";
import JSONLD from "../../JSONLD";
import GenericNode from "../GenericNode";

describe("GenerticNode", () => {
  it("renders question to QAPage mainEntity as Question type", () => {
    expect(
      renderer.create(
        <JSONLD>
          <GenericNode
            type="review"
            jsonldtype="Review"
            name="It is awesome"
            reviewBody="This is great!"
          >
            <GenericNode
              type="itemReviewed"
              jsonldtype="Product"
              id="product-x"
            />
            <GenericNode type="author" jsonldtype="Person" name="Cool Carl" />
            <GenericNode
              type="locationCreated"
              jsonldtype="AdministrativeArea"
              name="Chicago, IL"
            />
          </GenericNode>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
});
