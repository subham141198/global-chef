export default function AboutUs() {
  return (
    <>
      <h1 className="text-center p-5">What Customers are saying About Us</h1>
      <div className="container">
        <div className="row row-cols-3">
          <div className="col d-flex flex-column">
            <div className="imageContainer p-2 d-flex justify-content-center align-items-center">
              <img
                className="rounded-circle"
                src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-2-104x104.jpg"
                alt=""
              />
            </div>
            <div className="msgContainer p-2">
              <blockquote className="text-center">
                Many thanks for the beautiful food and wonderful service.Your
                food really made the event special.I appreciate your time and
                effort!
              </blockquote>
            </div>
            <div className="msgName p-2">
              <h4 className="text-center">Karen L</h4>
            </div>
          </div>
          <div className="col d-flex flex-column">
            <div className="imageContainer p-2 d-flex justify-content-center align-items-center">
              <img
                className="rounded-circle"
                src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-1-104x104.jpg"
                alt=""
              />
            </div>
            <div className="msgContainer p-2">
              <blockquote className="text-center">
              Was so impressed I had to find out more and tell my friends! Last week we attended a fabulous pre-wedding afternoon party
              </blockquote>
            </div>
            <div className="msgName p-2">
              <h4 className="text-center">James B</h4>
            </div>
          </div>
          <div className="col d-flex flex-column">
            <div className="imageContainer p-2 d-flex justify-content-center align-items-center">
              <img
                className="rounded-circle"
                src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-4-104x104.jpg"
                alt=""
              />
            </div>
            <div className="msgContainer p-2">
              <blockquote className="text-center">
              Thank you for making my parents anniversary so special. The food was amazing, as was the service. A perfect evening
              </blockquote>
            </div>
            <div className="msgName p-2">
              <h4 className="text-center">LucindaD</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
