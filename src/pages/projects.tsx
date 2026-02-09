import { GiWhiteBook } from "react-icons/gi";

const Projects = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-lg-row">
        <div className="col-lg-0 col-xl-1 col-xxl-2"></div>
        <div className="col-lg-12 col-xl-10 col-xxl-8 d-flex flex-column">
          {/* first card */}
          <div className="card m-3 m-xs-4 m-lg-5 rounded-5 overflow-hidden">
            <div className="row g-0 ">
              <div className="col-lg-4">
                <a href="https://github.com/chiraggivan/the-cookbook">
                  <img
                    src="/react-portfolio/images/cookbook-16-9.png"
                    className="img-fluid rounded-start "
                    alt="Cookbook Project"
                  />
                </a>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="card-body">
                  <h5 className="pb-1 card-title d-inline-block border-bottom border-primary border-2">
                    The Cookbook
                  </h5>
                  <p className="card-text">
                    A full-stack web application for creating recipes, plan
                    meals, manage your own ingredients, track cooking history,
                    calculate true costs, and even share or discover recipes -
                    all in one thoughtfully designed platform built for real
                    kitchens. <br />
                    <a href="https://github.com/chiraggivan/the-cookbook">
                      see more...
                    </a>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 08 Feb 26{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* addition skills */}
          <div className="m-3 mx-lg-5 d-flex">
            <div className="">
              <GiWhiteBook className="icon-heading" />
            </div>
            <div className="ms-2 ms-lg-4 pb-1 fs-3 d-inline-element border-bottom border-5 border-primary text-white">
              Additional Skills
            </div>
          </div>

          {/* second card */}
          <div className="card m-3 m-xs-4 m-lg-5 rounded-5 overflow-hidden">
            <div className="row g-0 ">
              <div className="">
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title pb-2 d-inline-block border-bottom border-primary border-5 fs-1">
                      Data Engineer / Data Analyst
                    </h5>
                  </div>

                  <p className="card-text px-md-2 px-lg- px-xl-5 my-3 fs-3">
                    I am a passionate data engineer and analyst skilled in
                    building scalable, automated data pipelines that turn raw
                    data into actionable business insights. Proficient in SQL,
                    Python, Snowflake, BigQuery, AWS (RDS, S3, Lambda,
                    CloudWatch, SNS), and Terraform (IaC), I have hands-on
                    experience designing end-to-end ETL processes, implementing
                    error logging/monitoring systems, and deploying cloud-based
                    data solutions - enabling efficient data transformation,
                    reliable operations, and strategic decision-making for
                    business growth.
                  </p>
                  <p className="card-text px-md-2 px-lg- px-xl-5 my-3 fs-4">
                    <small className="text-body-secondary">
                      Click below image to visit Data Engineer/ Data Analyst
                      Portfolio
                    </small>
                  </p>
                </div>
              </div>
              <div className="">
                <a href="https://chiraggivan.github.io/DataAnalyst/">
                  <img
                    src="/react-portfolio/images/data-portfolio-light.png"
                    className="img-fluid "
                    alt="Data Portfolio"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-0 col-xl-1 col-xxl-2"></div>
      </div>
    </div>
  );
};

export default Projects;
