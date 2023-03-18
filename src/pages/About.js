import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
    <div className="abouut">
      <br />
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="Btitle">About the Museum Sheet Cheat</div>
      <div className="type">
        <div className="title">Fact 1</div>
        <div className="content">
          <p>
            The Museum Sheet Cheat is dedicated to preserving and celebrating
            the city's rich history and culture. Our mission is to inspire and
            educate visitors of all ages through engaging exhibits, programs,
            and events.
          </p>
        </div>
        <div className="img-container ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjGTiyHAwMmvTFjtuL-jBwbNSVEdhr03m_A&usqp=CAU"
            alt="art abstrait"
          />
        </div>
      </div>
      <div className="type">
        <div className="title">Fact 2</div>
        <div className="content">
          <p>
            With over 1.5 million artifacts and artworks in our collection, the
            Museum of Chicago is one of the largest and most diverse museums in
            the country. Our exhibits cover a wide range of topics, from the
            city's early history to contemporary art and culture.
          </p>
        </div>
        <div className="img-container ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjGTiyHAwMmvTFjtuL-jBwbNSVEdhr03m_A&usqp=CAU"
            alt="art abstrait"
          />
        </div>
      </div>
      <div className="type">
        <div className="title">Fact 3</div>
        <div className="content">
          <p>
            Whether you're a history buff, an art lover, or just looking for
            something fun to do with the family, the Museum Sheet Cheat has
            something for everyone.
          </p>
        </div>
        <div className="img-container ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjGTiyHAwMmvTFjtuL-jBwbNSVEdhr03m_A&usqp=CAU"
            alt="art abstrait"
          />
        </div>
      </div>
      <div className="Btitle">History and Exhibit</div>
      <div className="type">
        <div className="title">Fact 1</div>
        <div className="content">
          <p>
            The Museum Sheet Cheat was founded in 1987, just in time for the
            World's Columbian Exposition. Originally located in a small building
            on the fairgrounds, the museum quickly outgrew its space and moved
            to its current location in Grant Park in 1921.
          </p>
        </div>
        <div className="img-container ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjGTiyHAwMmvTFjtuL-jBwbNSVEdhr03m_A&usqp=CAU"
            alt="art abstrait"
          />
        </div>
      </div>
      <div className="type">
        <div className="title">Fact 2</div>
        <div className="content">
          <p>
            Over the years, the museum has expanded its collection and its
            facilities to become one of the premier cultural institutions in the
            city. Today, the Museum Sheet Cheat welcomes over 1 million visitors
            each year.
          </p>
        </div>
        <div className="img-container ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjGTiyHAwMmvTFjtuL-jBwbNSVEdhr03m_A&usqp=CAU"
            alt="art abstrait"
          />
        </div>
      </div>
      <div className="type">
        <div className="title">Exhibit</div>
        <div className="content">
          <p>
            From ancient artifacts to contemporary art, our exhibits cover a
            wide range of topics and interests. Some of our most popular
            exhibits include:
          </p>
          <ul className="liste">
            <li>The Great Chicago Fire</li>
            <li>The World of Science</li>
            <li>The Art of Chicago</li>
            <li>The Music of Chicago</li>
          </ul>
          <p>
            Our exhibits are designed to be engaging and interactive, with
            plenty of opportunities for visitors to learn and explore.
          </p>
        </div>
        <div className="img-container ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjGTiyHAwMmvTFjtuL-jBwbNSVEdhr03m_A&usqp=CAU"
            alt="art abstrait"
          />
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default About;
