const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="bg-hero-image h-screen bg-no-repeat bg-cover fixed top-0 w-full -z-10"></div>
      <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-8xl animate-header transition-all duration-1000">
        TURFINFRA
        <div className="text-2xl">Harmonising Heights & Hearts</div>
        <div className="bg-white h-2 w-40 mx-auto mt-4"></div>
      </div>
    </div>
  );
};

export default HeroSection;
