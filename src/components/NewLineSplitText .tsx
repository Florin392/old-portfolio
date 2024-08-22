import { Typography } from "@mui/material";

export interface NewLineSplitTextProps {
  text: string;
  sx?: object;
}

export default function NewLineSplitText({ text, sx }: NewLineSplitTextProps) {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <Typography key={index} sx={sx} paragraph>
          {line}
        </Typography>
      ))}
    </>
  );
}
