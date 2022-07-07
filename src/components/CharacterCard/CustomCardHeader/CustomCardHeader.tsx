import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { useCustomTheme } from "../../../contexts/CustomThemeContext";

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
  const { mode } = useCustomTheme();
  return (
    <CardHeader
      avatar={
        <Avatar
          aria-label="name"
          sx={{
            bgcolor: mode === "light" ? "primary.dark" : "secondary.dark",
            color: "white",
          }}
        >
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
