import { Link } from "react-router-dom";
import image from "../../assets/kenny-eliason-zFSo6bnZJTw-unsplash (2).jpg";
const About = () => {
  return (
    <div className="my-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <img
            src={image}
            className="max-w-sm lg:max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-xl text-center lg:text-3xl font-bold">
              Welcome to our Institute!
            </h1>
            <p className="py-6 px-6 font-light">
              Discover the joy of learning with our engaging courses, workshops,
              and test preparation services. Our expert instructors and
              cutting-edge resources will guide you on your educational journey.
              With flexible scheduling, interactive lessons, and a track record
              of success, Edu-Aid is your trusted partner in education. Unlock
              your potential, achieve your goals, and embrace a brighter future
              with.Edu-Aid Start your educational adventure today!
            </p>
            <Link to="/">
              {" "}
              <button className="bg-[#9C0063] block mx-auto btn text-white ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
