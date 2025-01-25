import Carousel from 'react-bootstrap/Carousel';


function ImageCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src="/images/rog ally x.jpg" alt="" />
        <Carousel.Caption>
          <h3>ROG Ally X</h3>
          <p>Your pocket gaming rocket</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src="/images/ROG-Phone-9-series.jpg" alt="" />
        <Carousel.Caption>
          <h3>ROG Phone 9</h3>
          <p>The highest scorer in Antutu benchmarks</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src="/images/zephyrus g16.jpg" alt="" />
        <Carousel.Caption>
          <h3>Zephyrus G16</h3>
          <p>
            Sleek, Stylish, Powerful
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;