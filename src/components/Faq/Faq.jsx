import image1 from "../../assets/funny-3d-illustration-american-referee.jpg";
const Faq = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="3000">
      <h3 className="mb-10 text-3xl text-center font-semibold">
        <span className="text-[#9C0063]">Frequently </span>Asked Questions
      </h3>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div className="collapse-title text-[#9C0063] text-xl font-medium">
                  What is the purpose of this educational website?
                </div>
                <div className="collapse-content">
                  <p>
                    The purpose of our educational website is to provide a
                    platform for learners of all ages to access high-quality
                    educational resources, courses, and services. We aim to
                    facilitate learning, skill development, and personal growth.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl text-[#9C0063] font-medium">
                  How do I sign up for courses or services on this website?
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    To sign up for our courses or services, simply click on the
                    Sign Up or Register button on the relevant course/service
                    page. You will be guided through a straightforward
                    registration process.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl text-[#9C0063] font-medium">
                  Are there any prerequisites for enrolling in courses?
                </div>
                <div className="collapse-content">
                  <p>
                    Prerequisites vary depending on the course. Some courses may
                    have specific prerequisites, while others are open to
                    learners of all levels. Prerequisite information can be
                    found on the course description page. Q4: What payment
                    methods do you accept? A4: We accept a variety of payment
                    methods, including credit/debit cards, PayPal, and more.
                    Payment options will be presented during the checkout
                    process for courses and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
