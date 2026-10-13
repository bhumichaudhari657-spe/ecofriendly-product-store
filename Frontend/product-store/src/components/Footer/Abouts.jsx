import React from "react";
import "./Abouts.css";

function Abouts() {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="about-banner">
        <h1>About Us</h1>
      </div>

      {/* Intro Section */}
      <div className="about-intro">
        <h2>Welcome to Ecohoy</h2>
        <p>
          At Ecohoy, we believe in creating a sustainable future by offering
          eco-friendly, high-quality products that are kind to both people and
          the planet. Our mission is to make sustainable living accessible and
          stylish for everyone.
        </p>
      </div>

      {/* Mission Section */}
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To inspire and empower people to choose eco-friendly alternatives
          without compromising on quality, style, or convenience.
        </p>
      </div>

      {/* Vision Section */}
      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          A world where sustainable living is the norm, and every choice we make
          contributes to the well-being of our planet.
        </p>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            
            <h3>Pranjal Patil</h3>
            <p>Founder & CEO</p>
            <p>Contact:9325776826</p>
          </div>
          <div className="team-card">
            <h3>Bhumi Chaudhari</h3>
            <p>Marketing Head</p>
            <p>Contact:93265876554</p>
          </div>
          <div className="team-card">
            <h3>Ruchita Patil</h3>
            <p>Product Designer</p>
            <p>Contact:8080016815</p>
          </div>
          <div className="team-card">
            <h3>Sayali Khurpade</h3>
            <p>Project Co-ordinater</p>
            <p>Contact:9325776826</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouts;
