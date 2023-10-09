const Contact = () => {
  return (
    <div className="my-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold text-center">
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
                  placeholder="Your Message"
                  className="h-20 input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#9C0063] text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
