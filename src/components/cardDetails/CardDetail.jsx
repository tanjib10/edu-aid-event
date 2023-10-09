import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardDetail = ({ card }) => {
  const { image, title, description } = card;
  return (
    <div>
      <div className="mt-12 mx-auto max-w-[80%]">
        <div style={{ position: "relative" }}>
          <img className="w-full h-auto" src={image} alt="" />
          <div className="overlay">
            <Link to="/about">
              <button
                className="btn bg-[#9C0063] text-white"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                About us
              </button>
            </Link>
          </div>
        </div>
        <h3 className="text-3xl font-bold p-6">{title}</h3>
        <p className="text-xs p-6">{description}</p>
      </div>
    </div>
  );
};

export default CardDetail;
