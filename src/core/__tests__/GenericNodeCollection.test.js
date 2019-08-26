import React from "react";
import renderer from "react-test-renderer";
import JSONLD from "../../JSONLD";
import GenericNode from "../GenericNode";
import GenericNodeCollection from "../GenericNodeCollection";

describe("GenerticNodeCollection", () => {
  it("filters out null and false nodes from a collection", () => {
    expect(
      renderer.create(
        <JSONLD>
          <GenericNodeCollection type="author">
            <GenericNode jsonldtype="Person" name="Cool Carl" />
            {false}
            {null}
            <GenericNode jsonldtype="Person" name="Brave Mark" />
          </GenericNodeCollection>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
  it("filters renders GenericNode with null as type", () => {
    expect(
      renderer.create(
        <JSONLD>
          <GenericNodeCollection type="author">
            <GenericNode type={null} jsonldtype="Person" name="Cool Carl" />
          </GenericNodeCollection>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
  it("do not render empty collection", () => {
    expect(
      renderer.create(
        <JSONLD>
          <GenericNode
            type="review"
            jsonldtype="Review"
            name="With empty collection"
          >
            <GenericNodeCollection type="author" />
          </GenericNode>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
  it("do not render collection of empty array in it", () => {
    expect(
      renderer.create(
        <JSONLD>
          <GenericNode
            type="review"
            jsonldtype="Review"
            name="With collection of empty array in it"
          >
            <GenericNodeCollection type="author">{[]}</GenericNodeCollection>
          </GenericNode>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
});
