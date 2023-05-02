import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/title_bg.jpg?id=452"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="	https://alanzo.ancorathemes.com/wp-content/uploads/2018/01/sliders_1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://img.freepik.com/free-photo/dietary-salad-with-mussels-quail-eggs-cucumbers-radish-lettuce-healthy-food-seafood-salad-top-view-flat-lay_2829-6494.jpg?w=1380&t=st=1683023902~exp=1683024502~hmac=28ae585db91833663d0f8cbaf67264073b1e87c18838c8f6c301d173296996dd"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
