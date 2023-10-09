import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setservices] = useState([]);
  const [show, setIsShow] = useState(false);
  useEffect(() => {
    fetch("/serviceData.json")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  const visibleCards = show ? services : services.slice(0, 6);
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center">
        Our <span className="text-[#9C0063]">Services</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleCards.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        {services.length > 4 && (
          <button
            onClick={() => setIsShow(!show)}
            className="btn bg-[#9C0063] text-white block mx-auto my-4"
          >
            {show ? "See less" : "See More"}
          </button>
        )}
      </h3>
    </div>
  );
};

export default Services;
