import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Thumbnails = ({ video }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/videos/${video._id}`);
  };

  return (
    <>
      <Card.Img
        onClick={handleNavigate}
        variant="top"
        style={{ height: "200px", width: "500px" }}
        src={video.thumbnail_path}
        className="img-fluid img-thumbnail"
      />
    </>
  );
};

export default Thumbnails;
