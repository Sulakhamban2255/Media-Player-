import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addCategory } from "../Services/allApis";
import { toast } from "react-toastify";
import CategoryList from "./CategoryList";

function Category() {
  const [show, setShow] = useState(false);
  const [catView, setCatView] = useState();
  const [category, setCategory] = useState({
    catId: "",
    catName: "",
    catVideos: [],
  });
  console.log(category);
  const submitForm = async () => {
    const { catId, catName } = category;
    if (!catId || !catName) {
      toast.info("Entered the Invalid inputs !! ");
    } else {
      const result = await addCategory(category);
      if (result.status === 201) {
        handleClose();
        setCategory({ catId: "", catName: "", catVideos: [] });
        setCatView(result);
        toast.success("Category Added Successfully");
      } else {
        console.log(result);
        toast.error("Category Addition Failed");
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow} className="btn w-100" style={{backgroundColor:"black", color:"white"}}>
        Add Category{" "}
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FloatingLabel
              controlId="floatingID"
              onChange={(e) => {
                setCategory({ ...category, catId: e.target.value });
              }}
              label="Category ID"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Category ID" />
            </FloatingLabel>
            <FloatingLabel
              onChange={(e) => {
                setCategory({ ...category, catName: e.target.value });
              }}
              controlId="floatingCat"
              label="Category Name"
            >
              <Form.Control type="text" placeholder="Music" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={submitForm} variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <CategoryList categoryView={catView} />
    </div>
  );
}

export default Category;
