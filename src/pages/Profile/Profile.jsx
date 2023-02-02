import { Box } from "@mui/system";
import React from "react";
import { Avatar, Typography } from "@mui/material";
import Pagecomponent from "../../components/Pagecomponent/Pagecomponent.jsx";
import { useSelector } from "react-redux";
import { deepOrange } from "@mui/material/colors";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Pagecomponent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ bgcolor: deepOrange[500], height: 100, width: 100 }}>
          {user.name.slice(0, 1)}
        </Avatar>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6">Name : {user.name}</Typography>
          <Typography variant="h6">Email : {user.email}</Typography>
          <Typography variant="h6">User Id : {user._id}</Typography>
          <Typography variant="h6">Role : {user.role}</Typography>
        </Box>
      </Box>
    </Pagecomponent>
  );
};

export default Profile;
