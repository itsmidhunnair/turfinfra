import AboutImg from "../../assets/images/about-us.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white p-16">
      <div className="flex w-3/4 mx-auto gap-16">
        <img
          src={AboutImg}
          alt="about"
          className="w-1/2 border-b-8 border-l-8 border-secondary"
        />
        <div className="w-full">
          <p className="text-5xl font-semibold uppercase text-gray-700">
            About Us
          </p>
          <div className="mt-2 w-28 h-1 bg-secondary"></div>
          <div className="mt-5">
            <p>
              Welcome to <b>Turfinfra</b>, a distinguished construction company
              that stands at the forefront of the industry, embodying a
              commitment to excellence, innovation, and unwavering
              professionalism. With a diverse portfolio spanning various
              sectors.
            </p>
            <p className="mt-3">
              We specialize in delivering high-quality construction solutions
              tailored to meet the unique needs of our clients with Road
              Construction, Building Construction, Infrastructure Work,
              Commercial Projects, Residential Projects, Trimix Work for Roads,
              IPS Flooring Work, Excavation, Machinery Hire, All Types of
              Construction Work, Housing Small Bungalow Work, and Material and
              Labor Rate Services
            </p>
            <button className="bg-secondary mt-5 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
