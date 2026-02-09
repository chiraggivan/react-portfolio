import Techblock from "../components/techblock";
import TechProgressBar from "../components/techProgressBar";

export default function Backend() {
  const dataTechBlock = [
    {
      icon: "FaPython",
      name: "Python & Flask",
      desc: "This is where the application logic comes to life. Python handles the business rules and validations, while Flask provides a clean structure for routing, request handling, and application flow. I enjoy building backend systems where clarity, structure, and maintainability are just as important as functionality.",
    },
    {
      icon: "FaDatabase",
      name: "Database",
      desc: "This is the data backbone of my applications. I design normalized relational schemas and use SQL not only for queries but for enforcing integrity. Stored procedures play a big role in my approach - handling multi-table inserts, updates, unit conversions, and dependency-aware operations directly at the database layer to keep data consistent and reliable.",
    },
    {
      icon: "FaUserLock",
      name: "JWT Authentication & Role-Based Access",
      desc: "Security and control are built into the backend. I implemented JWT-based authentication and enforced role-based permissions (User/Admin) at the server level, ensuring that sensitive operations are protected by logic, not just UI restrictions.",
    },
    {
      icon: "BiLogoFlask",
      name: "REST APIs & Server-Side Rendering (Jinja2)",
      desc: "I design clean REST APIs for structured data flow between frontend and backend, while also using Jinja2 for server-side rendering to create fast, SEO-friendly, data-driven pages without relying on heavy frontend frameworks. It’s a balance of performance, simplicity, and clarity.",
    },
    {
      icon: "FaGithub",
      name: "Git & GitHub",
      desc: "Version control is how I think. I use Git not just to save code, but to structure development, track evolution of features, and maintain clean, understandable project history.",
    },
  ];

  const dataTechProgress = [
    { name: "Python", percent: 70 },
    { name: "MySQL", percent: 90 },
    { name: "Flask", percent: 65 },
    { name: "JWT", percent: 75 },
    { name: "REST API", percent: 80 },
    { name: "Github", percent: 45 },
  ];

  return (
    <main>
      <section className="py-5 bg-dark text-white">
        {/* Left column – What do I know */}
        <div className="d-flex flex-column flex-lg-row">
          <div className="p-3 p-lg-5 col-lg-8">
            <h2 className="mb-4 border-bottom border-primary border-2 pb-2 fs-1">
              What do I Know ?
            </h2>

            {dataTechBlock.map((item) => (
              <Techblock
                techIcon={item.icon}
                techName={item.name}
                techDescp={item.desc}
              />
            ))}
          </div>

          {/* Right column – Coding skills */}
          <div className="p-3 p-lg-5 col-lg-4">
            <h2 className="mb-4 fs-1 border-bottom border-primary border-2 pb-2">
              Coding skills
            </h2>
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
