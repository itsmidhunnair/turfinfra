import { DummyIcon } from "../icons";

const services = [
  {
    title: "Brand_1",
  },
  {
    title: "Brand_2",
  },
  {
    title: "Brand_3",
  },
  {
    title: "Brand_4",
  },
  {
    title: "Brand_5",
  },
  {
    title: "Brand_6",
  },
];

const ClientSection = () => {
  return (
    <div className="bg-white w-full p-16">
      <div>
        <p className="text-5xl font-semibold uppercase text-center text-gray-700">
          Our Clients
        </p>
        <div className="mt-2 w-28 h-1 bg-secondary mx-auto"></div>
        <p className="text-center px-32 mt-8 text-lg text-gray-500">
          Our clients are the cornerstone of our success, and their satisfaction
          is our ultimate goal. We take pride in establishing lasting
          partnerships built on trust, transparency, and mutual respect.
        </p>
      </div>

      <div className="overflow-auto snap-x flex gap-8 justify-center mt-8 pb-8">
        {services.map((service) => (
          <div className="min-w-72 snap-center" key={service.image}>
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

export default ClientSection;

const ServiceCard = ({ title }) => {
  return (
    <div className=" text-center w-full h-full p-8 flex flex-col items-center bg-white gap-4 border">
      <div className="w-16 text-secondary">
        <DummyIcon />
      </div>
      <p className="font-semibold text-xl text-gray-700 capitalize">{title}</p>
    </div>
  );
};
