import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";

interface CustomCardHeaderProps {
  avatarName: string;
  titleName: string;
  subheader: string;
}

function CustomCardHeader({
  avatarName,
  titleName,
  subheader,
}: CustomCardHeaderProps) {
  return (
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: green[500] }} aria-label="name">
          {avatarName
            .split(" ")
            .map((char) => char[0])
            .join(".")}
        </Avatar>
      }
      title={titleName}
      subheader={subheader}
    />
  );
}

export default CustomCardHeader;
