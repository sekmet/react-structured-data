import React from "react";
import renderer from "react-test-renderer";
import { ImageObject, JSONLD, Organization, Place } from "../../index";

describe("Organization example", () => {
  it("renders Organization with logo image", () => {
    expect(
      renderer.create(
        <JSONLD>
          <Organization
            type="publisher"
            url="https://example.org/institution/ResearchGate"
            name="ResearchGate"
          >
            <Place type="location" name="Berlin, Germany" />
            <ImageObject
              type="logo"
              url="https://example.org/ii/institution.image/image_url.jpeg"
            />
          </Organization>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
  it("renders Organization with department", () => {
    expect(
      renderer.create(
        <JSONLD>
          <Organization
            type="publisher"
            url="https://example.org/institution/ResearchGate"
            name="ResearchGate"
          >
            <Place type="location" name="Berlin, Germany" />
            <ImageObject
              type="logo"
              url="https://example.org/ii/institution.image/image_url.jpeg"
            />
            <Organization
              type="department"
              url="https://example.org/institution/ResearchGate/department/Engineering"
              name="Engineering"
            />
          </Organization>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
});
