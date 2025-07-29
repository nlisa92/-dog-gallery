const DogGallery = ({ images }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "10px",
      }}
    >
      {images.map((src) => (
        <img
          key={src}
          src={src}
          alt={`Собака`}
          style={{ width: "100%", borderRadius: "2px" }}
        />
      ))}
    </div>
  );
};

export default DogGallery;
