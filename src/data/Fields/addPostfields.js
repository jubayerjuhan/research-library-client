export const addPostfields = [
  {
    name: "coverImage",
    label: "Cover Image",
    type: "file",
    fileType: "Image/*",
  },
  { name: "title", label: "Title", type: "text" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "file", label: "PDF File", type: "file", fileType: ".pdf" },
];
