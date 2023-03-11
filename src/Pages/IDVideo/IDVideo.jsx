import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";

const IDVideo = () => {
  const getVideo = useLoaderData();
  console.log(getVideo);
  return (
    <>
      <Container style={{width: "80%", height: "80%"}}>
        <ReactPlayer
          url={getVideo?.video_path}
          width="400"
          height="230"
          controls
        />
        <h2>{getVideo?.upload_title}</h2>
      </Container>
    </>
  );
};

export default IDVideo;
