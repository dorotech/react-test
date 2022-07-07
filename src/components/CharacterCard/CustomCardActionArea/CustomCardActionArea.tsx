import { CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

interface CustomCardActionAreaProps {
  id: string;
  imageUrl: string;
  alt: string;
}

function CustomCardActionArea({
  alt,
  id,
  imageUrl,
}: CustomCardActionAreaProps) {
  return (
    <CardActionArea>
      <Link to={`/character/${id}` ?? "/"}>
        <CardMedia component="img" height="300" image={imageUrl} alt={alt} />
      </Link>
    </CardActionArea>
  );
}

export default CustomCardActionArea;
