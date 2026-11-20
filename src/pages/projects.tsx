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
              <div className="col-md-12 col-lg-8">
                <div className="card-body">
                  <a href="https://chiraggivan.github.io/DataAnalyst/">
                    <h5 className="pb-1 card-title d-inline-block border-bottom border-primary border-2 text-white">
                      Data Engineer / Data Analyst
                    </h5>
                  </a>

                  <p className="card-text">
                    Experience includes designing end-to-end ETL workflows using SQL, Python,
                    Snowflake, BigQuery, and AWS services (RDS, S3, Lambda, CloudWatch, SNS), along
                    with Terraform for Infrastructure as Code.
                    <br />
                    <a href="https://chiraggivan.github.io/DataAnalyst/">see more...</a>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated 08 Feb 26 </small>
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <a href="https://chiraggivan.github.io/DataAnalyst/">
                  <img
                    src="/react-portfolio/images/data-portfolio-light.png"
                    className="img-fluid "
                    alt="Cookbook Project"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* second card */}
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
                  <a href="https://github.com/chiraggivan/the-cookbook">
                    <h5 className="pb-1 card-title d-inline-block border-bottom border-primary border-2 text-white">
                      The-Cookbook
                    </h5>
                  </a>

                  <p className="card-text">
                    A full-stack web application for creating recipes, plan meals, manage your own
                    ingredients, track cooking history, calculate true costs, and even share or
                    discover recipes - all in one thoughtfully designed platform built for real
                    kitchens. <br />
                    <a href="https://github.com/chiraggivan/the-cookbook">see more...</a>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated 08 Feb 26 </small>
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
          <div className="lead card-text m-3 mx-lg-5 fs-5">
            Beyond full-stack web development, projects also include hands-on work in data
            engineering and analytics, focused on building scalable, automated pipelines that
            transform raw operational data into meaningful business insights.
          </div>

          {/* Third card */}
          <div className="card m-3 m-xs-4 m-lg-5 rounded-5 overflow-hidden">
            <div className="row g-0 ">
              <div className="col-md-12 col-lg-8">
                <div className="card-body">
                  <a href="https://chiraggivan.github.io/DataAnalyst/">
                    <h5 className="pb-1 card-title d-inline-block border-bottom border-primary border-2 text-white">
                      Data Engineer / Data Analyst
                    </h5>
                  </a>

                  <p className="card-text">
                    Experience includes designing end-to-end ETL workflows using SQL, Python,
                    Snowflake, BigQuery, and AWS services (RDS, S3, Lambda, CloudWatch, SNS), along
                    with Terraform for Infrastructure as Code.
                    <br />
                    <a href="https://chiraggivan.github.io/DataAnalyst/">see more...</a>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated 08 Feb 26 </small>
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <a href="https://chiraggivan.github.io/DataAnalyst/">
                  <img
                    src="/react-portfolio/images/data-portfolio-light.png"
                    className="img-fluid "
                    alt="Cookbook Project"
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
