import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>Fox React-Bootstrap Carousel Component Demo</h4>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
			src="animals/elephant.jpg"
            alt="Elephant"
          />
          <Carousel.Caption>
            <h3>Elephant</h3>
            <p>Elephants are the largest living land animals</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
			src="animals/tiger.jpg"
            alt="Tiger"
          />
          <Carousel.Caption>
            <h3>Tiger</h3>
            <p>Tigers are the largest wild cats, they are solitary hunters</p>
          </Carousel.Caption>
        </Carousel.Item><Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
			src="animals/bear.jpg"
            alt="Bear"
          />
          <Carousel.Caption>
            <h3>Bear</h3>
            <p>Bears have the largest relative brain size of any carnivore!</p>
          </Carousel.Caption>
        </Carousel.Item>
		<Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
			src="animals/lion.jpg"
            alt="Lion"
          />
          <Carousel.Caption>
            <h3>Lion</h3>
            <p>Lions are the second largest big cats after tigers</p>
          </Carousel.Caption>
        </Carousel.Item>
		
      </Carousel>
    </div>
  );
}
