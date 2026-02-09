import Techblock from "../components/techblock";
import TechProgressBar from "../components/techProgressBar";

export default function Frontend() {
  const dataTechBlock = [
    {
      icon: "FaDesktop",
      name: "HTML, CSS, JavaScript, Bootstrap",
      desc: "These are my foundation - HTML for clean structure, CSS for pixel-perfect styling, JavaScript for interactivity, and Bootstrap for fast, responsive layouts. The small tweaks in CSS can completely transform user experience, and vanilla JS still powers most of the web’s magic under the hood.",
    },
    {
      icon: "FaReact",
      name: "React",
      desc: "My go-to library for building modern, interactive user interfaces. I love how React turns complex UIs into small, reusable components and how the virtual DOM + hooks make state management feel clean and predictable. Right now I'm most excited about mastering hooks, context API, and building performant apps that scale smoothly as features grow.",
    },
  ];

  const dataTechProgress = [
    { name: "Html", percent: 60 },
    { name: "CSS", percent: 75 },
    { name: "JavaScript", percent: 40 },
    { name: "Bootstrap", percent: 60 },
    { name: "React", percent: 65 },
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
