import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Pagecomponent from "../../components/Pagecomponent/Pagecomponent.jsx";
import { addPostfields } from "../../data/Fields/addPostfields.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { postSchema } from "../../validationSchemas/postSchema.js";
import axios from "axios";
import { uploadFile } from "../../uploads/fileUpload.js";
import { useSelector } from "react-redux";
import { client } from "../../client.js";

const AddPost = () => {
  const { user } = useSelector((state) => state.user);
  const [post, setPost] = useState({});
  const [fileNames, setFileNames] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  // handling field change
  const handleFileChange = (e) => {
    setFileNames({ ...fileNames, [e.target.name]: e.target.files[0]?.name });
    setValue(e.target.name, e.target?.files[0]);
  };

  // onsubmit
  const onSubmit = async (data) => {
    setLoading(true);
    data.author = user._id;
    const fileUrl = await uploadFile(data.file);
    data.file = fileUrl;
    if (data.coverImage) {
      const coverUrl = await uploadFile(data.coverImage);
      data.coverImage = coverUrl;
    }
    client
      .post("/post/create", data)
      .then(({ data }) => {
        setLoading(false);
        if (data) {
          window.location.href = "/my-research";
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "error");
      });
    console.log(data, "processed data...");
  };

  return (
    <Pagecomponent>
      {loading && (
        <Typography variant="h6" sx={{ fontWeight: "600", mb: 3 }}>
          Posting Your Research Please Wait....
        </Typography>
      )}
      <Typography variant="h6" sx={{ fontWeight: "600", mb: 3 }}>
        Add Research
      </Typography>
      <form action="">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 3,
          }}
        >
          {addPostfields.map((field, key) => {
            if (field.type === "file")
              return (
                <Box>
                  <InputLabel sx={{ mb: 1 }}>{field.label}</InputLabel>
                  <Box sx={{ maxWidth: 250 }}>
                    <Button variant="contained" component="label">
                      Upload
                      <input
                        name={field.name}
                        hidden
                        accept={field.fileType}
                        // multiple
                        type="file"
                        onChange={handleFileChange}
                      />
                    </Button>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input
                        name={field.name}
                        hidden
                        accept={field.fileType}
                        type="file"
                        onChange={handleFileChange}
                      />
                      <PhotoCamera />
                    </IconButton>
                  </Box>
                  {errors[field.name] && (
                    <Typography variant="body2" sx={{ color: "red", mt: 1 }}>
                      {errors[field.name]?.message}
                    </Typography>
                  )}
                  {fileNames[field.name] && (
                    <Chip
                      label={fileNames[field.name]}
                      sx={{ mt: 2 }}
                      variant={"outlined"}
                    ></Chip>
                  )}
                </Box>
              );
            // for teaxt area
            if (field.type === "textarea")
              return (
                <>
                  <textarea
                    {...register(field.name)}
                    name={field.name}
                    // onChange={handleChange}
                    rows={10}
                    style={{ padding: "10px", borderRadius: 6 }}
                    placeholder={`Enter ${field.label}`}
                  ></textarea>
                  {errors[field.name] && (
                    <Typography variant="body2" sx={{ color: "red", mt: -1 }}>
                      {errors[field.name]?.message}
                    </Typography>
                  )}
                </>
              );
            return (
              <TextField
                error={errors[field.name]}
                helperText={errors[field.name]?.message}
                {...register(field.name)}
                name={field.name}
                label={field.label}
                // onChange={handleChange}
              />
            );
          })}
        </Box>
        <Button
          variant="contained"
          sx={{ mt: 3, width: "100%" }}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </form>
    </Pagecomponent>
  );
};

export default AddPost;
