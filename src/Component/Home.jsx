import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Images/Logo.png";
import "../Component/Home.css";
import Crowd from "../Images/Crowd.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Daddy7 from "../Images/Daddy7.jpeg";
import DOG from "../Images/DOG.jpeg";
import MamaT from "../Images/MamaT.jpeg";
import Facebook4 from "../Images/Facebook4.jpeg";
import Ig4 from "../Images/Ig4.jpeg";
import Youtube1 from "../Images/Youtube1.jpeg";

function BasicExample() {
  const aboutRef = useRef(null);
  const ministriesRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMinistries = () => {
    ministriesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar expand="lg" className="bg-blue-900">
        <Container>
          <Navbar.Brand href="#home" onClick={() => window.location.reload()}>
            <img src={Logo} alt="logo" className="mt-2 h-14 w-18" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex-wrap pl-5">
              <Nav.Link
                href="#about"
                className="text-white text-xs ml-72 space-x-0.5"
                onClick={scrollToAbout}
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                href="#ministries"
                className="text-white text-xs ml-5 space-x-0.5"
                onClick={scrollToMinistries}
              >
                MINISTRIES
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="text-white text-xs ml-5 space-x-0.5"
              >
                MEDIA
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="text-white text-xs ml-5 space-x-0.5"
              >
                PARTNERSHIP
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="text-white text-xs ml-5 space-x-0.5"
              >
                MEETING DAYS
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="text-white text-xs ml-5 space-x-0.5"
              >
                OUTLINE
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="text-white text-xs ml-5 space-x-0.5"
              >
                CONTACT US
              </Nav.Link>
              {/* <Nav.Link
              href="#link"
              className="text-white text-xs ml-3 space-x-5"
            >
              Link
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ position: "relative", width: "100%", height: "700px" }}>
        <img src={Crowd} alt="Okay" style={{ width: "100%", height: "100%" }} />

        {/* Text and button positioned in the center */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "aliceblue",
          }}
        >
          <h1>Discover the Love and Grace of Jesus Christ</h1>
          <p>
            Join us as we worship, grow in faith, and follow the teachings of
            Jesus Christ. Everyone is welcome to experience His love and grace
            in a community built on faith and hope.
          </p>

          {/* Button */}
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>

      <section>
        <h1 ref={aboutRef} className="us">
          About Us
        </h1>
        <h5 className="aog">
          Arena of Glory International (AOGI) is an inter-denominational
          Christian fellowship which seeks to train and revive young men <br />
          <span>
            and women for the work of ministry as well as equipping them for
            God’s purpose in various
          </span>
          <br />
          <span className="span">
            tertiary institutions and cities across the globe.
          </span>
        </h5>
      </section>

      <section>
        <h1 ref={ministriesRef} className="Ministry">
          Ministries
        </h1>

        <Container className="column">
          <Row className="row">
            <Col>
              <h1>School Of Ministy</h1>

              <h6 className="para">
                Join the School Of Ministry with Bishop Prof Dr Christopher
                Twumasi-Ankrah, every Sunday from 6:00am to 7:00am Live.{" "}
              </h6>

              <button type="button" className="button">
                Read more
              </button>
            </Col>
            <Col>
              <img
                src={Daddy7}
                alt="Daddy"
                style={{ width: "70%", height: "60%" }}
                className="image"
              />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row className="row">
            <Col>
              <img
                src={DOG}
                alt="DOG"
                style={{ width: "70%", height: "60%" }}
                className="DOG"
              />
            </Col>
            <Col>
              <h1>Daughter Of Glory</h1>
              <h2>Tea Time With The Holy Spirit</h2>
              <h6 className="dog">
                Experience and amazing time with the Holy Spirit in the word and
                hear the words of wisdom form Apostle Prophet Adwoa Twumwaa
                Ansah. Every Mondays form 7Pm to 8Pm.
                {/* Daughter of Glory is a kingdom initiative with the aim of
              empowering and raising mighty women of God who know who they are
              in Christ and are well-poised to fulfill God’s purpose for their
              lives. Daughter of Glory is a ministry of Arena of Glory
              International, an interdenominational training ground for men and
              women of God. */}
              </h6>

              <button type="button" className="button">
                Read more
              </button>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row className="row">
            <Col>
              <h1>Hearts Of Glory International </h1>

              <h6 className="para">
                Enjoy the wonders of the Word form a woman who is grounded in
                the Word of GOD and teaches with all understanding. Join mama
                Tash every Tuesday from 12 noon to 2Pm online or Top Ridge
                school santa Maria.
                {/* Hearts of Glory International is a daughter ministry of Arena of
              Glory International. It is also a kingdom initiative with the aim
              of empowering and raising mighty females of all ages to be
              prepared as The Warrior Bride for Our Bridegroom King, Christ
              Jesus. */}
              </h6>

              <button type="button" className="button">
                Read more
              </button>
            </Col>
            <Col>
              <img
                src={MamaT}
                alt="HOG"
                style={{ width: "55%", height: "80%" }}
                className="image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <footer>
        <a href="#about" className="footlink" onClick={scrollToAbout}>
          About Us
        </a>
        <a href="#" className="footlink">
          MEDIA
        </a>
        <a href="#" className="footlink">
          PARTNERSHIP
        </a>
        <a href="#" className="footlink">
          MEETING DAYS
        </a>
        <a href="#" className="footlink">
          OUTLINE
        </a>
        <a href="#" className="footlink">
          CONTACT US
        </a>
        <hr />
        <h6 id="service">Join us...</h6>
        <h6 id="gms">Sundays: Glorious Mass Service (G.M.S) 6Am to 9Am.</h6>
        <h6 id="WED">Wednesday: Bible Study, 6Pm to 8Pm</h6>
        <h6 id="FRI">Friday: Hour Of Grace at 6Pm to 8Pm.</h6>
        <h6 id="Fri">Every two weeks Friday, All-Night at 9Pm to 4AM</h6>

        <img src={Logo} alt="logo" className="Flogo" />

        <h6 id="add">
          Top Ridge School Santa Maria,
          <br /> Family & Friends Junction,
          <br /> Off Kwashieman Road.
        </h6>
        <h6 id="number">(000)00000000</h6>
        <img src={Facebook4} alt="facebook" className="facebook" />
        <img src={Ig4} alt="facebook" className="ig" />
        <img src={Youtube1} alt="facebook" className="yt" />
      </footer>
    </>
  );
}

export default BasicExample;
