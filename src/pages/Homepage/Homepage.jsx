import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { client } from "../../client.js";
import Pagecomponent from "../../components/Pagecomponent/Pagecomponent.jsx";
import ResearchCard from "../../components/ResearchCard/ResearchCard.jsx";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    client
      .get(`/post/all${searchString ? `?q=${searchString}` : ""}`)
      .then(({ data }) => {
        setLoading(false);
        setPosts(data.posts);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error, "error");
      });
  }, [searchString]);

  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  };

  console.log(searchString, "search string..");
  return (
    <Pagecomponent>
      <TextField
        sx={{ mb: 3 }}
        label="Find Research"
        onChange={handleSearchChange}
      />
      {loading && <p style={{ marginBottom: 2 }}>Loading...</p>}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5.5 }}>
        {posts.map((post, key) => {
          return <ResearchCard post={post} />;
        })}
      </Box>
    </Pagecomponent>
  );
};

export default Homepage;
