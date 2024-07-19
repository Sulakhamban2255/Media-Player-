import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import {
  deleteCategory,
  getCategories,
  getSpecificCategory,
  updateCategory,
} from "../Services/allApis";
import { toast } from "react-toastify";
import VideoCard from "./VideoCard";


function CategoryList({ categoryView }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData();
  }, [categoryView]);

  const getData = async () => {
    const cat = await getCategories();
    setCategories(cat.data);
  };

  const deleteCat = async (id) => {
    const res = await deleteCategory(id);
    if (res.status === 200) {
      toast.success("Category removed");
      getData();
    } else {
      toast.error("Something went wrong");
    }
  };

  const DragOver = (ev) => {
    ev.preventDefault();
    console.log("dragging over");
  };

  const handleDrop = async (ev, val) => {
    ev.preventDefault();
    console.log("dropping.......");
    const catId = val;
    const data = JSON.parse(ev.dataTransfer.getData("videoItem"));
    console.log(data);
    const res = await getSpecificCategory(catId);
    console.log(res, ".......");
    const category = res.data;
    console.log(category);
    category.catVideos.push(data);
    console.log(category);
    const resp = await updateCategory(catId, category);
    console.log(resp);
    if (resp.status == 200) {
      toast.success("Video added to category Successfully");
    } else {
      toast.warning("Video Adding to category failed ");
    }
  };

  return (
    <Container className="mt-3">
      {categories.length > 0 ? (
        <Card className="w-100 p-3 mb-3" style={{ backgroundColor: "white" }}>
          {categories.map((item) => (
            <Card
              key={item.id}
              className="border-3 p-3 d-flex justify-content-between mb-3"
              style={{ backgroundColor: "black" }}
              onDragOver={(e) => {
                DragOver(e);
              }}
              onDrop={(e) => {
                handleDrop(e, item.id);
              }}
            >
              <Row className="align-items-center">
                <Col style={{ color: "white" }}>
                  <h4>{item.catName}</h4>
                </Col>
                <Col className="text-end">
                  <Button variant="light" onClick={() => deleteCat(item.id)}>
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "#e70404" }}
                    ></i>
                  </Button>
                
                    {
                      item.catVideos.length > 0 && 
                      <div className="mt-3 p-2 border shadow">
                        {
                          item.catVideos.map((vid)=>
                         <VideoCard videoItem ={vid} cat={true}/>
                          )
                        }
                      </div>
                    }
                 
                </Col>
              </Row>
            </Card>
          ))}
        </Card>
      ) : (
        <p>No categories available.</p>
      )}
    </Container>
  );
}

export default CategoryList;
