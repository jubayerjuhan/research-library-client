import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { client } from "../../client.js";
import Pagecomponent from "../../components/Pagecomponent/Pagecomponent.jsx";
import ResearchCard from "../../components/ResearchCard/ResearchCard.jsx";
const Myresearches = () => {
  const { user } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client.get(`/post/user/${user._id}`).then(({ data }) => {
      setPosts(data?.posts);
    });
  }, []);

  return (
    <Pagecomponent>
      <Typography variant="h6" sx={{ fontWeight: "600", mb: 2 }}>
        My Researches
      </Typography>
      <Box>
        {posts.length === 0 && (
          <Typography>
            No Post Available. You Haven't Posted Anything.
          </Typography>
        )}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5.5 }}>
          {posts.map((post, key) => {
            return <ResearchCard post={post} />;
          })}
        </Box>
      </Box>
    </Pagecomponent>
  );
};

export default Myresearches;
