import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <br /><br /><br /><br /><br />
      <Container className="my-5">
        <Row>
          <Col lg={8}>
            <h1>About the Museum Sheet Cheat</h1>
            <p>
              The Museum Sheet Cheat is dedicated to preserving and celebrating
              the city's rich history and culture. Our mission is to inspire and
              educate visitors of all ages through engaging exhibits, programs,
              and events.
            </p>
            <p>
              With over 1.5 million artifacts and artworks in our collection,
              the Museum of Chicago is one of the largest and most diverse
              museums in the country. Our exhibits cover a wide range of topics,
              from the city's early history to contemporary art and culture.
            </p>
            <p>
              Whether you're a history buff, an art lover, or just looking for
              something fun to do with the family, the Museum Sheet Cheat has
              something for everyone.
            </p>
            <h2>Our History</h2>
            <p>
              The Museum Sheet Cheat was founded in 1987, just in time for the
              World's Columbian Exposition. Originally located in a small
              building on the fairgrounds, the museum quickly outgrew its space
              and moved to its current location in Grant Park in 1921.
            </p>
            <p>
              Over the years, the museum has expanded its collection and its
              facilities to become one of the premier cultural institutions in
              the city. Today, the Museum Sheet Cheat welcomes over 1 million
              visitors each year.
            </p>
            <h2>Our Exhibits</h2>
            <p>
              From ancient artifacts to contemporary art, our exhibits cover a
              wide range of topics and interests. Some of our most popular
              exhibits include:
            </p>
            <ul>
              <li>The Great Chicago Fire</li>
              <li>The World of Science</li>
              <li>The Art of Chicago</li>
              <li>The Music of Chicago</li>
            </ul>
            <p>
              Our exhibits are designed to be engaging and interactive, with
              plenty of opportunities for visitors to learn and explore.
            </p>
          </Col>
          <Col lg={4}>
            <Image
              src="https://www.artistikrezo.com/wp-content/uploads/2020/03/musee.png"
              alt="Chicago Museum"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
