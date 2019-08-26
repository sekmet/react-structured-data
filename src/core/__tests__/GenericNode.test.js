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
  it("filters out null and false child nodes", () => {
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
            {null}
            {false}
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
  it("filters out properties that have null values", () => {
    expect(
      renderer.create(
        <JSONLD>
          <GenericNode
            type="review"
            jsonldtype="Review"
            name="It is awesome"
            reviewBody={null}
          />
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
  it("filters out one child which is null", () => {
    expect(
      renderer.create(
        <JSONLD>
          <GenericNode
            type="review"
            jsonldtype="Review"
            name="It is awesome"
            reviewBody={null}
          >
            {null}
          </GenericNode>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
  it("filters out one child which is false", () => {
    expect(
      renderer.create(
        <JSONLD>
          <GenericNode
            type="review"
            jsonldtype="Review"
            name="It is awesome"
            reviewBody={null}
          >
            {false}
          </GenericNode>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
});
