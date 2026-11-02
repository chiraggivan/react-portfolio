import Techblock from "../components/techblock";
import TechProgressBar from "../components/techProgressBar";

export default function Frontend() {
  const dataTechBlock = [
    {
      icon: "FaReact",
      name: "React",
      desc: "Used to build interactive, component-based user interfaces with a focus on reusable components, clean state management, and predictable application behaviour. Comfortable working with React hooks such as useState, useEffect, and useContext, managing shared state through Context API, handling navigation with React Router, and integrating backend services using Axios. Experience also includes implementing search with debouncing, API request cancellation, loading states, and responsive interfaces using Tailwind CSS.",
    },
    {
      icon: "FaDesktop",
      name: "HTML, CSS, JavaScript, Bootstrap",
      desc: "These are my foundation - HTML for clean structure, CSS for pixel perfect styling, JavaScript for interactivity, and Bootstrap for fast, responsive layouts. The small tweaks in CSS can completely transform user experience, and vanilla JS still powers most of the web’s magic under the hood.",
    },
  ];

  const dataTechProgress = [
    { name: "React.js", percent: 65 },
    { name: "Tailwind CSS", percent: 75 },
    { name: "React Router", percent: 70 },
    { name: "Axios", percent: 75 },
    { name: "Context API", percent: 60 },
    { name: "Responsive Web Design", percent: 75 },
    { name: "Html", percent: 70 },
    { name: "CSS", percent: 65 },
    { name: "JavaScript", percent: 75 },
    { name: "Bootstrap", percent: 80 },
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
