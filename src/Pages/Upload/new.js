return <>
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
              onChange={fileChangeHandler}
            />
            <Progress
              max="100"
              color="success"
              value={this.state.loaded}
              className="mt-4 mb-1"
            >
              {isNaN(Math.round(this.state.loaded, 2))
                ? 0
                : Math.round(this.state.loaded, 2)}
              %
            </Progress>
            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={fileUploadHandler}
            >
              Upload Video
            </button>
          </div>
        </form>
      </div>
    </>