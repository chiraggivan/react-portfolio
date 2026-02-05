// pages/Frontend.tsx  (or wherever your main content lives)
import { ProgressBar } from "react-bootstrap";
import { FaDesktop, FaReact } from "react-icons/fa"; // or use bootstrap-icons

export default function Frontend() {
  return (
    <main>
      <section className="py-5 bg-dark text-white">
        {/* <Container>
          <Row className="g-5"> */}
        {/* Left column – What do I know */}
        <div className="d-flex flex-column flex-lg-row">
          <div className="ms-4 col-lg-5 ms-1 me-4 me-lg-0">
            <h2 className="mb-4 border-bottom border-primary border-2 pb-2 fs-1">
              What do I Know ?
            </h2>

            <div className="mb-5 ">
              <div className="d-flex align-items-start mb-4">
                <div className="me-3 fs-1 text-primary">
                  <FaDesktop />
                </div>
                <div>
                  <h5 className="mb-1 fs-2">
                    HTML, CSS, JavaScript, Bootstrap
                  </h5>
                  <p className="text-secondary text-justify mb-0 fs-3">
                    A front-end developer builds the user interface of websites
                    and web applications, shaping how pages look, feel, and
                    respond. They manage the interaction between users and the
                    application through structure, styling, and dynamic
                    behavior.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="me-3 fs-1 text-primary">
                  <FaReact />
                </div>
                <div>
                  <h5 className="mb-1 fs-2">React</h5>
                  <p className="text-secondary text-justify mb-0 fs-3">
                    A front-end developer uses React to build fast, interactive
                    user interfaces with reusable components. It enables
                    efficient state management and dynamic rendering, making
                    applications feel responsive and scalable as they grow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-1"></div>

          {/* Right column – Coding skills */}
          <div className="ms-4 ms-lg-0 me-4 col-lg-5">
            <h2 className="mb-4 fs-1 border-bottom border-primary border-2 pb-2">
              Coding skills
            </h2>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-3 fs-3">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <ProgressBar now={90} variant="primary" className="mb-4" />
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-3 fs-3">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <ProgressBar now={80} variant="primary" className="mb-4" />
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-3 fs-3">
                <span>JavaScript</span>
                <span>10%</span>
              </div>
              <ProgressBar now={10} variant="primary" className="mb-4" />
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-3 fs-3">
                <span>React</span>
                <span>20%</span>
              </div>
              <ProgressBar now={20} variant="primary" className="mb-4" />
            </div>
          </div>
        </div>

        {/* </Row>
        </Container> */}
      </section>
    </main>
  );
}
