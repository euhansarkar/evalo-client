import axios from "axios";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Thumbnails from "../Thumbnails/Thumbnails";

const DashBoard = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/showvideos`)
      .then((res) => setVideoData(res.data));
  }, []);


  return (
    <Container>
      <h2>videos</h2>
      <Row xs={1} md={2} lg={3} xl={4}>
        {videoData.map((video) => (
          <Col key={video._id}>
            <Thumbnails video={video} />
            <h3>{video.upload_title}</h3>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DashBoard;
