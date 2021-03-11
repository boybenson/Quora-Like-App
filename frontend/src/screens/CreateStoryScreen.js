import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

const CreateStoryScreen = () => {
  return (
    <div>
      <Container className="mt-3">
        <Container>
          <Button variant="outline-dark" className="mb-2">
            <SkipPreviousIcon />
            Back
          </Button>
          <Form>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Story Title :</Form.Label>
              <Form.Control
                type="text"
                placeholder="What best advise will you give to a 22 year old about life?"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="storyBody">
              <Form.Label>Story Body :</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="
               1. Property is power. Noone can do anything on land unless the owner says so.
               2. Don't buy a house first. Buy some rental units. This will create some passive income. 
               3. And if you do this right, you'll never have to get a job. Also, if you own an income generating property, you can qualify for the house you WANT, instead of what you can just AFFORD
               "
              />
            </Form.Group>
            <Form.Group>
              <Form.File id="Featured Image" label="Select Featured Image" />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
            {"   "}
            <Button variant="danger">Cancel</Button>
          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default CreateStoryScreen;
