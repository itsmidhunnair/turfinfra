import { DummyIcon } from "../icons";

const services = [
  {
    title: "Best Quality",
    detail:
      "We prioritize delivering the highest quality in every aspect of our projects. From materials and workmanship to design and functionality, we are committed to excellence.",
  },
  {
    title: "Integrity",
    detail:
      "We conduct with honesty, transparency, and a steadfast commitment to ethical practices. Our clients can trust us to uphold the highest standards of integrity throughout every phase of a project.",
  },
  {
    title: "Strategy",
    detail:
      "Our company employs a comprehensive approach to project management. From initial concept to completion, we develop and implement well-thought-out strategies that encompass budgeting.",
  },
  {
    title: "Safety",
    detail:
      "Safety is paramount in our construction endeavors. We prioritize the well-being of our workers, subcontractors, and anyone involved in or affected by our projects.",
  },
  {
    title: "Community",
    detail:
      "Our commitment to the community extends beyond the construction site. We believe in contributing positively to the communities where we operate.",
  },
  {
    title: "Sustainability",
    detail:
      "Embracing sustainable practices is a fundamental aspect of our construction work. We integrate materials, and energy-efficient technologies into our projects.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <div className="w-full p-16 bg-gray-900/40 backdrop-blur-md">
      <div>
        <p className="text-5xl font-semibold uppercase text-center text-white">
          Why Choose Us?
        </p>
        <div className="mt-2 w-28 h-1 bg-white mx-auto"></div>
        <p className="text-center px-32 mt-8 text-lg text-gray-100">
          Choosing us means choosing a construction partner with a proven track
          record of success. When you choose us, you choose a construction
          company that values your vision, prioritizes your needs.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {services.map((service) => (
          <div className="w-1/4" key={service.image}>
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

export default WhyChooseUsSection;

const ServiceCard = ({ title, detail }) => {
  return (
    <div className=" text-center w-full h-full p-8 flex flex-col items-center bg-white gap-4 border">
      <div className="w-16 text-secondary">
        <DummyIcon />
      </div>
      <p className="font-semibold text-xl text-gray-700 capitalize">{title}</p>
      <p className="text-gray-600">{detail}</p>
    </div>
  );
};
