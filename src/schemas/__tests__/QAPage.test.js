import React from "react";
import renderer from "react-test-renderer";
import {
  Answer,
  AnswerCollection,
  JSONLD,
  Organization,
  Person,
  PersonCollection,
  QAPage,
  Question
} from "../../index";

describe("QAPage", () => {
  it("renders question to QAPage mainEntity as Question", () => {
    expect(
      renderer.create(
        <JSONLD>
          <QAPage url="http://example.com/qa-page">
            <Question
              type="mainEntity"
              name="title"
              answerCount={5}
              text="question text"
              dateCreated="2019-05-01"
              dateModified={null}
            >
              <Person
                type="author"
                mainEntityOfPage="http://example.com/author2"
                name="Author of a question"
              />
              <Answer
                type="acceptedAnswer"
                dateCreated="2019-08-15"
                text="test accepted answer"
                upvoteCount={20}
                url="http://example.com/answer1"
              >
                <Person
                  type="author"
                  mainEntityOfPage="http://example.com/author1"
                  name="Author of an accepted answer"
                >
                  <Organization
                    name="answer, without collection"
                    type="memberOf"
                  />
                </Person>
              </Answer>
              <AnswerCollection type="suggestedAnswer">
                <Answer
                  text="some text"
                  url="http://example.com/answer2"
                  dateCreated="2019-04-11"
                >
                  <Person
                    type="author"
                    mainEntityOfPage="http://example.com/author3"
                    name="another authot"
                  />
                </Answer>
                <Answer
                  text="answer with multiple authors"
                  url="http://example.com/answer3"
                  dateCreated="2019-04-01"
                  upvoteCount={1}
                >
                  <PersonCollection type="author">
                    <Person
                      mainEntityOfPage="http://example.com/author3"
                      name="Author 1 of a second suggested answer"
                    />
                    <Person
                      mainEntityOfPage="http://example.com/author4"
                      name="Author 2 of a second suggested answer"
                    >
                      <Organization type="memberOf" name="in collection" />
                    </Person>
                  </PersonCollection>
                </Answer>
              </AnswerCollection>
            </Question>
          </QAPage>
        </JSONLD>
      )
    ).toMatchSnapshot();
  });
});
