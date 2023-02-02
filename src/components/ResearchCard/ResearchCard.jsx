import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import defaultCoverImage from "../../assets/no-image.png";
import moment from "moment";
import { Chip } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ResearchCard({ post }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ width: 345, height: "100%", cursor: "pointer", minHeight: 450 }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.author.name?.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.author.name}
        subheader={moment(post.createdAt).format("LL")}
      />
      <CardMedia
        component="img"
        height="194"
        image={post?.coverImage ? post?.coverImage : defaultCoverImage}
      />
      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontWeight: "600", fontSize: 20, mb: 1 }}
        >
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description ? post.description?.slice(0, 60) + "..." : ""}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Chip
          onClick={() =>
            window.open(
              post.file,
              "_blank" // <- This is what makes it open in a new window.
            )
          }
          label="Research File.pdf"
          variant="outlined"
          sx={{ cursor: "pointer" }}
        />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" paragraph>
            About This Research :
          </Typography>
          <Typography paragraph>{post.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
