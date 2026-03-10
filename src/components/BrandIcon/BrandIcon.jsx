const BrandIcon = ({ width = 706, height = 673 }) => {
  return (
    <img
      src="/logos/head-mangastyle-b.png"
      alt="MangaStyle"
      width={width}
      height={height}
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  );
};

export default BrandIcon;
