import Card from "@mui/material/Card";
import { ReactNode } from "react";

interface CustomCardProps {
  children: ReactNode;
}

function CustomCard({ children }: CustomCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 300,
      }}
    >
      {children}
    </Card>
  );
}

export default CustomCard;
