export default function Home() {
  return (
    <div className="d-flex flex-column flex-xl-row">
      <div className="col-md-0 col-xl-1"></div>
      <div className="col-xl-3">
        {/* video with frame will come in the below div */}
        <div className="py-5 mt-5">
          <div className="py-xl-5 ps-2 ps-xl-0">
            <div className="golden-neon-frame">
              <video autoPlay loop muted playsInline className="portal-video">
                <source
                  src="/react-portfolio/videos/react-12sec.webm"
                  type="video/webm"
                />
                <source
                  src="/react-portfolio/videos/react-12sec.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="py-xl-5 m-5">
          <div className="py-xl-5 m-xl-3">
            <h2 className="text-secondary">Full Stack Developer</h2>
            <h1 className="name-heading">Chirag Givan</h1>
            <h3 className="py-3">
              Full-stack developer focused on building web applications that
              behave reliably in real-world scenarios. Strong emphasis on
              backend architecture, data integrity, and clean system design.
              Passionate about creating software that feels simple to use but is
              thoughtfully engineered underneath.
            </h3>
          </div>
        </div>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}
