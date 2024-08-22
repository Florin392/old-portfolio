interface ContentImageProps {
  src: string;
  alt: string;
}

export default function ContentImage({ src, alt }: ContentImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}
