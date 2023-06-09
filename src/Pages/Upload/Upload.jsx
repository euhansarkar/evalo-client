import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Progress } from "reactstrap";
import "./Upload.css";

const Upload = () => {
  const navigate = useNavigate();
  const [selectedVideos, setSelectedVideos] = useState(null);
  const [loaded, setLoaded] = useState(0);

  function maxSelectFile(event) {
    let files = event.target.files;
    if (files.length > 1) {
      toast.error("Maximum 1 file is allowed");
      alert(`Maximum 1 file is allowed`);
      event.target.value = null;
      return false;
    } else {
      let err = "";
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 52428800) {
          // 50 MB
          console.log(files);
          err += files[i].name + ", ";
        }
      }
      if (err !== "") {
        // error caught
        event.target.value = null;
        toast.error(err + " is/are too large. Please select file size < 50Mb");
        alert(`${err} is/are too large. Please select file size < 50Mb`);
      }
    }
    return true;
  }

  function fileChangeHandler(event) {
    const files = event.target.files;
    console.log(files);
    if (maxSelectFile(event)) {
      setSelectedVideos(files);
      setLoaded(0);
    }
  }

  function fileUploadHandler(event) {
    const data = new FormData();
    for (let i = 0; i < selectedVideos.length; i++) {
      data.append("file", selectedVideos[i]);
    }

    console.log(data);
    axios
      .post(
        "http://localhost:5000/api/upload",
        data,
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Authorization":
        //       "Bearer " +
        //       JSON.parse(localStorage.getItem("userTokenTime")).token,
        //   },
        // },
        {
          onUploadProgress: (ProgressEvent) => {
            setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
          },
        }
      )
      .then((res) => {
        toast.success("Upload Successful");
        alert(`upload success`);
        console.log( JSON.parse(localStorage.getItem("userTokenTime")).token)
      })
      .catch((err) => {
        toast.error(`Upload Fail with status: ${err.statusText}`);
        alert(`upload failed`);
      });
  }

  return (
    <>
      <div className="container mt-5">
        {/* <div className="form-group">
          <ToastContainer />
        </div> */}
        <h4>Upload Video</h4>
        <hr className="my-4" />

        <form
          method="post"
          name="videoUpload"
          action="/api/upload"
          id="#"
          encType="multipart/form-data"
        >
          <div className="form-group files">
            <label>Upload Your Videos Here</label>
            <input
              type="file"
              name="file"
              className="form-control"
              multiple="multiple"
              accept="video/*"
              onChange={(e) => fileChangeHandler(e)}
            />
            <Progress
              max="100"
              color="success"
              value={loaded}
              className="mt-4 mb-1"
            >
              {isNaN(Math.round(loaded, 2)) ? 0 : Math.round(loaded, 2)}%
            </Progress>
            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={(e) => fileUploadHandler(e)}
            >
              Upload Video
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Upload;
