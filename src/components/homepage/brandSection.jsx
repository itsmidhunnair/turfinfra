const brandSection = () => {
  const images = [
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_01.png",
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_02.png",
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_03.png",
    "https://saraswaticonstruction.com/wp-content/uploads/2020/01/brand_04.png",
  ];
  return (
    <div className="flex justify-evenly py-16">
      {images.map((img) => (
        <img key={img} alt="client" className="w-20 aspect-auto" src={img} />
      ))}
    </div>
  );
};

export default brandSection;
