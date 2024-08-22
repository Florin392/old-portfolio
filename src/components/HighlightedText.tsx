import { Typography } from "@mui/material";

export const HighlightedText = (text: string, sx?: object) => {
  return (
    <Typography component="span" sx={sx}>
      {text.split("|").map((part, index) => (
        <span key={index}>
          {index > 0 && <span style={{ fontWeight: 700 }}>{" | "}</span>}
          {part.trim()}
        </span>
      ))}
    </Typography>
  );
};
