import React, { useEffect, useState } from "react";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { createStory } from "../redux/actions/storyActions";

const CreateStoryScreen = () => {
  const dispatch = useDispatch();
  const storyFromStore = useSelector((state) => state.story);

  // States to handle the control inputs
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);

  // State To Handle Any Empty Input Error
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  // State To Handle successful creation of a story
  const [isSuccess, setIsSuccess] = useState(false);

  // State To Hand Un-successful creation of story, i.e invalid Token etc
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    if (storyFromStore.success) {
      setIsSuccess(true);
      setTitle("");
      setBody("");
      setFeaturedImage(null);
    }
  }, [storyFromStore.success]);

  useEffect(() => {
    if (storyFromStore.errorData) {
      setIsFailed(true);
    }
  }, [storyFromStore.errorData]);

  // Function To Handle Form Submit
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    setIsEmptyInput(false);
    if (title === "" || body === "" || featuredImage === null) {
      setIsEmptyInput(true);
    } else {
      // Create A New Story using form data
      const storyInfo = new FormData();
      storyInfo.append("title", title);
      storyInfo.append("body", body);
      storyInfo.append("featuredImage", featuredImage);

      // Dispatch create story action
      dispatch(createStory(storyInfo));
    }
  };

  return (
    <div>
      <Container className="mt-3">
        <Container>
          {/* Alert To Show If Story Creation Is Successful */}
          {isSuccess && (
            <Alert
              className="text-center"
              variant="success"
              onClose={setTimeout(() => {
                setIsSuccess(false);
              }, 4000)}
              dismissible
            >
              <small>Story Created Successfully!</small>
            </Alert>
          )}

          {/* Alert To Show If Story Creation Is Not successful */}
          {isFailed && (
            <Alert
              className="text-center"
              variant="danger"
              onClose={setTimeout(() => {
                setIsFailed(false);
              }, 3000)}
              dismissible
            >
              <small>{storyFromStore.errorData.message}</small>
            </Alert>
          )}

          {/* Alert To Show Is Empty Input */}
          {isEmptyInput && (
            <Alert
              className="text-center"
              variant="danger"
              onClose={setTimeout(() => {
                setIsEmptyInput(false);
              }, 3000)}
              dismissible
            >
              <small>Please Input All Fields</small>
            </Alert>
          )}

          <Button variant="outline-dark" className="mb-2">
            <SkipPreviousIcon />
            Back
          </Button>
          <Form onSubmit={HandleFormSubmit}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Story Title :</Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="What best advise will you give to a 22 year old about life?"
                autoComplete="off"
                value={title}
              />
            </Form.Group>
            <Form.Group controlId="storyBody">
              <Form.Label>Story Body :</Form.Label>
              <Form.Control
                onChange={(e) => setBody(e.target.value)}
                as="textarea"
                rows={10}
                value={body}
                placeholder="
               1. Property is power. Noone can do anything on land unless the owner says so.
               2. Don't buy a house first. Buy some rental units. This will create some passive income. 
               3. And if you do this right, you'll never have to get a job. Also, if you own an income generating property, you can qualify for the house you WANT, instead of what you can just AFFORD
               "
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                id="Featured Image"
                label="Select Featured Image"
                onChange={(e) => setFeaturedImage(e.target.files[0])}
              />
            </Form.Group>

            {!storyFromStore.loading ? (
              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
            ) : (
              <Button variant="outline-dark">
                <Spinner animation="border" size="sm" />
                Processing...
              </Button>
            )}
            {"   "}
            <Button variant="danger">Cancel</Button>
          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default CreateStoryScreen;
