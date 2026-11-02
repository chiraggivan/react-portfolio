import Techblock from "../components/techblock";
import TechProgressBar from "../components/techProgressBar";

export default function Backend() {
  const dataTechBlock = [
    {
      icon: "RiNodejsLine",
      name: "Node.js & Express.js",
      desc: "Backend development using Node.js and Express.js to build server-side application logic, handle HTTP requests, and structure application routes. Experience includes developing REST APIs, implementing middleware, handling asynchronous operations, and connecting backend services with MySQL.",
    },
    {
      icon: "FaPython",
      name: "Python & Flask",
      desc: "Previous experience building backend applications using Python and Flask, focusing on business logic, server-side validations, application routing, and maintainable backend architecture.",
    },
    {
      icon: "FaDatabase",
      name: "Database Design & MySQL",
      desc: "Designing normalized relational database schemas and using SQL for complex queries, joins, common table expressions, stored procedures, and database transactions. Particular attention to data integrity, indexing, connection pooling, and efficient data retrieval.",
    },
    {
      icon: "FaUserLock",
      name: "JWT Authentication & Security",
      desc: "Implementing JWT-based authentication, password hashing using bcrypt, protected routes, authentication middleware, and role-based access control to secure application resources.",
    },
    {
      icon: "BiLogoFlask",
      name: "REST APIs & Server-Side Rendering (Jinja2)",
      desc: "Developing RESTful APIs with Express.js and integrating frontend applications with backend services using Axios. Experience includes request validation, error handling, pagination, search, and asynchronous API operations.",
    },
    {
      icon: "BiLogoFlask",
      name: "Email Integration",
      desc: "Integrating email functionality using Nodemailer, including email verification and password reset workflows.",
    },
    {
      icon: "FaGithub",
      name: "Git & GitHub",
      desc: "Using Git and GitHub for version control, managing code changes, maintaining project history, and collaborating with deployment workflows.",
    },
  ];

  const dataTechProgress = [
    { name: "Node.js", percent: 70 },
    { name: "Express.js", percent: 75 },
    { name: "MySQL", percent: 90 },
    { name: "Python", percent: 70 },
    { name: "Multer", percent: 65 },
    { name: "Nodemailer", percent: 65 },
    { name: "Flask", percent: 75 },
    { name: "JWT Authentication", percent: 75 },
    { name: "REST API Development", percent: 80 },
    { name: "Git & Github", percent: 45 },
  ];

  return (
    <main>
      <section className="py-5 bg-dark text-white">
        <div className="d-flex flex-column flex-lg-row">
          {/* Left column – What do I know */}
          <div className="p-3 p-lg-5 col-lg-8">
            <h2 className="mb-4 border-bottom border-primary border-2 pb-2 fs-1">
              What do I Know ?
            </h2>

            {dataTechBlock.map((item) => (
              <Techblock techIcon={item.icon} techName={item.name} techDescp={item.desc} />
            ))}
          </div>

          {/* Right column – Coding skills */}
          <div className="p-3 p-lg-5 col-lg-4">
            <h2 className="mb-4 fs-1 border-bottom border-primary border-2 pb-2">Coding skills</h2>
            {dataTechProgress.map((item) => (
              <TechProgressBar techName={item.name} techPctg={item.percent} />
            ))}
          </div>
        </div>

        {/* </Row>
        </Container> */}
      </section>
    </main>
  );
}
