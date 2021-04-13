import { Card, Grid, TextareaAutosize, TextField } from "@material-ui/core";
import React, { useRef, useState } from "react";
import Preview from "./Preview";
import Dropzone from "react-dropzone-uploader";
import { useHistory } from "react-router-dom";
import "react-dropzone-uploader/dist/styles.css";
export default function UploadPost() {
  let body = new FormData();
  const [files, setFiles] = useState([]);
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    // images: [],
  });
  const title = useRef();
  const description = useRef();
  const router = useHistory();
  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  // const handleChange = (e) => {
  //   setFormValue({ ...formValue, [e.target.name]: e.target.value });
  //   console.log(e);
  // };
  const handleUpload = (e, file) => {
    // e.preventDefault();
    const body = new FormData();
    body.append("title", title.current.value);
    body.append("description", description.current.value);
    // if (files.length > 0 && files.length < 2) {
    //   body.append("images", formValue.file);
    // } else {
    //   files.forEach((file) => {
    //     body.append("images", file);
    //   });
    // }
    //   addPost(body, () => router.push("/home"));
    // allFiles.forEach((f) => f.remove());
    console.log(body);
  };
  console.log(title);
  return (
    <div>
      <Card>
        <Grid>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Title"
            ref={title}
            // onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid>
          <TextareaAutosize
            id="outlined-basic"
            variant="outlined"
            placeholder="Title"
            rowsMin={3}
            ref={description}
            // onChange={(e) => handleChange(e)}
          />
        </Grid>
        <section>
          <Dropzone
            // getUploadParams={getUploadParams}
            // onChangeStatus={handleChangeStatus}
            // onChange={(e) => handleChange(e)}
            onSubmit={(e) => handleUpload(e)}
            styles={{ dropzone: { minHeight: 200, width: 500 } }}
          />
        </section>
      </Card>
    </div>
  );
}
