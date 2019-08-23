import React from "react";
import renderer from "react-test-renderer";
import { Article, ImageObject, JSONLD, Organization, Place } from "../../index";

describe("Article example", () => {
  it("renders article with image", () => {
    expect(
      renderer.create(
        <JSONLD>
          <Article
            mainEntityOfPage="institution/ResearchGate/post/Free_eBook-Evolution_and_Application_of_3D_Cell_Culture_and_Analysis"
            image="https://example.org/article_image.jpeg"
            headline="Free eBook - Evolution and Application of 3D Cell Culture and Analysis"
            datePublished=""
            dateModified=""
          >
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
            <Organization type="author" name="ResearchGate" />
          </Article>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
});
