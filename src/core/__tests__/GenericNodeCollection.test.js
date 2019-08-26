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
          <GenericNodeCollection>
            <GenericNode type="author" jsonldtype="Person" name="Cool Carl" />
            {false}
            {null}
            <GenericNode jsonldtype="AdministrativeArea" name="Chicago, IL" />
          </GenericNodeCollection>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
});
