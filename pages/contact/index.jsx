import { Container, Col, Row, Card } from "react-bootstrap";

import Link from "next/link";
const stylingBg = {
  background: `url('/svg/personal.svg')`,
  height: "25vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundPositionY: "center",
};
export default function Contact() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={6} sm={12}>
            <div className="bg-contact w-80">
              <img src="/svgs/personal.svg" alt="" className="w-100" />
            </div>
          </Col>

          <Col md={6} sm={12}>
            <div className="">
              <h1 className="text-left">Ayrton Zamarian</h1>
              <p className="text-left">
                Email :{" "}
                <a href="mailto:ayrtonzama@gmail.com">ayrtonzama@gmail.com</a>
              </p>
              <p className="text-left">
              Linkedin :{" "}
                <Link href="https://linkedin.com/in/ayrton-zamarian-8a0aa0214">Linkedin</Link>
              </p>
              <p className="text-left">
                GitHub :{" "}
                <Link href="">Github</Link>
              </p>
              <p className="text-left">
                GitLab :{" "}
                <Link href="https://gitlab.com/ayrtonzama" target="">GitLab</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
