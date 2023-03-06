import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fatima Zahra HASBI </span>
            from <span className="purple"> Morocco.</span>
            <br />I am a junior Software engineer
            <br />
            <br />
            Some other activities that I am intersted in!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading romans
            </li>
            <li className="about-activity">
              <ImPointRight /> Football & Basketball & Handball
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you believe it you can achieve it!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
