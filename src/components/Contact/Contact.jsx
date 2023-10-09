import Swal from "sweetalert2";
const Contact = () => {
  const handleSubmit = () => {
    Swal.fire("Submitted successfully!");
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
      className="my-16"
    >
      <h3 className="text-3xl  font-semibold text-center my-12">
        Help us to <span className="text-[#9C0063]"> improve </span>
      </h3>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-[#9C0063] lg:text-5xl font-bold text-center">
              Contact us now!
            </h1>
            <p className="p-6">
              Have questions or need assistance? We are here to help! Reach out
              to our friendly team.We are dedicated to providing you with the
              support and information you need.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="message"
                  className="h-20 p-2 input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleSubmit}
                  className="btn bg-[#9C0063] text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
