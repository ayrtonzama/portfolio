import Link from "next/link";

import { Accordion } from "react-bootstrap";
const styling = {
  background: `url('/images/day-banner.jpg')`,
  height: "35vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundPositionY: "center",
};
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <div className=" w-100 my-auto text-center" style={styling}>
        <h1>AYRTON ZAMARAIN</h1>
        <h1>FULL STACK DEVELOPER</h1>
      </div>
      <div className="summary-group">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6">
              <img src="/svgs/summary.svg" height={300} width={300} />
            </div>
            <div className="col-md-6">
              <h2 className="text-center">Summary</h2>
              <p>
                I am a full stack developer with 3 years of experience on mobile
                and cloud based applications. Two apps that are currently on the
                app store on both android and apple. I have worked on internal
                systems used by two pharmaceuticals. Always learning more about
                bleeding edge frameworks and languages.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="languages-frameworks">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12">
              <h2 className="text-center">Languages and Frameworks</h2>
            </div>
          </div>
          <div className="row mt-4">
            <motion.div
              className="col-md-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/languages">
                <div className="card laf-card  shadow-sm">
                  <div className="card-body my-auto text-center justify-content-center">
                    <h3 className="height-img">Skills</h3>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="col-md-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Link href="/tools">
                <div className="card laf-card shadow-sm">
                  <div className="card-body my-auto text-center justify-content-center">
                    <h3 className="height-img">Tools</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="experiences mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-center">Experience</h2>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Full stack developer as Assemble (
                    <span> 2019 - Present</span>)
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        Published two apps too both apple and google app stores.
                      </li>
                      <li>
                        Create internal systems for two different Pharmacutical
                        system.
                      </li>
                      <li>Built multiple frontend websites.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Intern at Assemble (<span> 2018 - 2019</span>)
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        Worked at Assemble Part time while studying at varsity
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-6">
              <img src="/svgs/experience.svg" height={300} width={300} />
            </div>
          </div>
        </div>
      </div>
      <div className="experiences mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="/svgs/experience.svg" height={300} width={300} />
            </div>
            <div className="col-md-6">
              <div className="d-flex">
                <img
                  src="/images/eduction.png"
                  className="pr-4"
                  height={50}
                  width={50}
                />
                <h2> Eduction and Certificates</h2>
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <p>Bachelors in Computer Application Development</p>
                        </div>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Varsity College (<span> 2016 - 2020</span>)
                    </p>
                    <p>South africa, Gauteng</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
