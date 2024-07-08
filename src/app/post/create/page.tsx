"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Chip,
  OutlinedInput,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100%",
  maxWidth: 800,
  margin: "0 auto",
}));

const PreviewContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [slug, setSlug] = useState("");
  const [categoryIds, setCategoryIds] = useState<string[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "/api/category?size=10&api-version=1.0"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImageFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleDeleteImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (imageFile) {
      formData.append("imageFile", imageFile);
    }
    formData.append("slug", slug);
    formData.append("categoryIds", categoryIds.join(","));

    try {
      const response = await axios.post("/api/post?api-version=1.0", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormContainer onSubmit={handleSubmit} encType="multipart/form-data">
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
      />

      <TextField
        label="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        required
        fullWidth
      />

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="imageFile"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="imageFile">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>
        {imagePreview && (
          <Grid item xs={12} sm={6}>
            <PreviewContainer>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap={1}
              >
                <Typography>Image Preview:</Typography>
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: 150,
                    cursor: "pointer",
                  }}
                  onClick={handleClickOpen}
                />
                <IconButton aria-label="delete" onClick={handleDeleteImage}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </PreviewContainer>
          </Grid>
        )}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img
            src={imagePreview}
            alt="Image Preview"
            style={{ maxWidth: "100%" }}
          />
        </DialogContent>
      </Dialog>

      <div>
        <label>Description:</label>
        <ReactQuill
          value={description}
          onChange={(content) => setDescription(content)}
          theme="snow"
        />
      </div>

      <FormControl fullWidth>
        <InputLabel id="category-label">Categories</InputLabel>
        <Select
          labelId="category-label"
          multiple
          value={categoryIds}
          onChange={(e) => setCategoryIds(e.target.value as string[])}
          input={<OutlinedInput id="select-multiple-chip" label="Categories" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={
                    categories.find((category) => category.id === value)
                      ?.name || value
                  }
                />
              ))}
            </Box>
          )}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        Create Post
      </Button>
    </FormContainer>
  );
};

export default CreatePost;
