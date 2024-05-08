const services = [
  {
    image:
      "https://saraswaticonstruction.com/wp-content/uploads/2023/11/saraswati-contruction-home-services-01.jpg",
    title: "Construction Contractor of Road",
    detail:
      "From highways to local roads, we specialize in the construction of robust and enduring road networks.",
  },
  {
    image:
      "https://saraswaticonstruction.com/wp-content/uploads/2023/11/saraswati-contruction-home-services-02.jpg",
    title: "Construction Building",
    detail:
      "Crafting architectural marvels, we undertake building construction projects that stand the test of time.",
  },
  {
    image:
      "https://saraswaticonstruction.com/wp-content/uploads/2023/11/saraswati-contruction-home-services-03.jpg",
    title: "Construction of Infra Work",
    detail:
      "We excel in the construction of essential infrastructures, contributing to the development of a strong foundation.",
  },
  {
    image:
      "https://saraswaticonstruction.com/wp-content/uploads/2023/11/Services.png",
    title: "Commercial Project",
    detail:
      "Tailored solutions for commercial spaces, emphasizing functionality, aesthetics, and adherence to timelines.",
  },
  {
    image:
      "https://saraswaticonstruction.com/wp-content/uploads/2023/11/saraswati-contruction-home-services-05.jpg",
    title: "Residency Project",
    detail:
      "Creating dream homes and residential complexes that reflect comfort, style, and quality craftsmanship.",
  },
  {
    image:
      "https://saraswaticonstruction.com/wp-content/uploads/2023/11/saraswati-contruction-home-services-06.jpg",
    title: "Trimix Work for Road",
    detail:
      "Precision-engineered concrete solutions for durable and high-performance road surfaces.",
  },
];

const ServiceSection = () => {
  return (
    <div className="bg-gray-100 w-full mt-16 p-16">
      <div>
        <p className="text-5xl font-semibold uppercase text-center text-gray-700">
          Our Exclusive Services
        </p>
        <div className="mt-2 w-28 h-1 bg-secondary mx-auto"></div>
        <p className="text-center px-32 mt-8 text-lg text-gray-500">
          As a leading construction company, our wide range of services is
          tailored to meet the unique needs of our clients. . We are specialized
          in commercial builds, residential developments, or specialized
          construction projects.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {services.map((service) => (
          <div className="w-1/3" key={service.image}>
            <ServiceCard
              image={service.image}
              title={service.title}
              detail={service.detail}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-secondary mt-5 text-white px-4 py-2 rounded ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceSection;

const ServiceCard = ({ image, alt = "service_card", title, detail }) => {
  return (
    <div className="w-full h-full flex items-center bg-white gap-8">
      <img
        src={image}
        alt={alt}
        className=" w-1/3 object-cover h-full inline-block"
      />
      <div className="w-full">
        <p className="font-semibold text-xl text-gray-700 capitalize">
          {title}
        </p>
        <p className="text-gray-600">{detail}</p>
      </div>
    </div>
  );
};
