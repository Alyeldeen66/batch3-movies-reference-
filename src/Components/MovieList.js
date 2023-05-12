import react, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "./Movie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addmovie } from "../Redux/movieSlice";
const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
  };
  const handleClick = () => {
    setShow(true);
  };
  const handleSave = () => {
    dispatch(
      addmovie({
        img: img,
        title: title,
        description: description,
      })
    );
    handleClose();
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                agetype="text"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          img={movie.img}
          description={movie.description}
        />
      ))}
      <button onClick={handleClick}>Add movie</button>
    </div>
  );
};

export default MovieList;
