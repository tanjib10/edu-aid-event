/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BiPurchaseTag } from "react-icons/bi";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { id, purchasedBy, price, image, title } = service;
  return (
    <div
      data-aos="fade-up-right"
      data-aos-duration="2000"
      className="card w-96 bg-base-100 shadow-xl"
    >
      <figure className="px-10 pt-10">
        <img src={image} className="w-[90%] rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-4 justify-center items-center p-4 text-sm font-normal">
          <p className="font-medium">{price}</p>
          <p className="flex items-center font-medium gap-1">
            <BiPurchaseTag></BiPurchaseTag> {purchasedBy}
          </p>
        </div>

        <div className="card-actions">
          <Link to={`/details/${id}`}>
            {" "}
            <button className="btn bg-[#9C0063] text-white">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
