import React from "react";
import renderer from "react-test-renderer";
import {
  AdministrativeArea,
  JSONLD,
  Person,
  Product,
  Rating,
  Review,
  ReviewCollection
} from "../../index";

describe("Review Page", () => {
  it("renders reviews in graph", () => {
    expect(
      renderer.create(
        <JSONLD>
          <ReviewCollection type="@graph">
            <Review
              name="It's awesome"
              reviewBody="This is Great! My family loves it"
              datePublished="11/22/1963"
            >
              <Person type="author" name="Jerry" />
              <AdministrativeArea type="locationCreated" name="Chicago, IL" />
              <Rating type="reviewRating" ratingValue={5} />
              <Product type="itemReviewed" name="Product Name" id="product-x" />
            </Review>
            <Review
              name="Very cool"
              reviewBody="I like this a lot. Very cool product"
              datePublished="11/22/1963"
            >
              <Person type="author" name="Cool Carl" />
              <AdministrativeArea type="locationCreated" name="Chicago, IL" />
              <Rating type="reviewRating" ratingValue={4} />
              <Product type="itemReviewed" name="Product Name" id="product-x" />
            </Review>
          </ReviewCollection>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
});
