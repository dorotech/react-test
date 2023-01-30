import React from "react";
import { CircularProgress } from "@mui/material";
import "./Loading.css";
import Header from "./Header";

export default function Loading() {
  return (
    <div className="loading-container">
      <Header />
      <div className="loading-container__progress">
        <CircularProgress />
      </div>
    </div>
  );
}
