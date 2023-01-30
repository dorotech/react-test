import {
    FormControl,
    InputLabel,
    Select,
    SelectChangeEvent,
  } from "@mui/material";
import React from "react";

interface SelectProps {
    name: string;
    size: "small" | "medium" | undefined;
    children: React.ReactNode;
    handleChange: (event: SelectChangeEvent) => void;
    value: string;
}

export default function SelectComponent({ children, handleChange, value, name, size }: SelectProps) {
  return (
    <FormControl>
      <InputLabel id={name} style={{ color: "gray" }}>
      {name}
      </InputLabel>
      <Select
        labelId={name}
        id={name}
        name={name}
        value={value}
        label={name}
        size={size}
        sx={{
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
          },
          "&:hover": {
            "&& fieldset": {
              "border-color": "gray",
            },
          },
          input: { color: "gray" },
          div: { color: "#ffffff" },
          svg: { color: "#ffffff" },
          fieldset: { borderColor: "gray" },
        }}
        onChange={(event) => handleChange(event)}
      >
        {children}
      </Select>
    </FormControl>
  );
}
