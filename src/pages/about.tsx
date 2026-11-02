export default function About() {
  return (
    <div className="d-flex">
      <div className="col-lg-2"></div>
      <div className="py-5 px-3 mt-lg-5 px-lg-0 col-lg-8">
        <h2 className="mb-4 border-bottom border-primary border-2 pb-2 fs-1">Yes, that's me !!</h2>
        <div className="fs-5" style={{ fontFamily: '"Cascadia Code", system-ui, sans-serif' }}>
          <p>
            Driven by building applications that work correctly, reliably, and predictably — not
            just ones that look impressive.
          </p>
          <p>
            Naturally drawn to understanding how data flows through a system and what happens when
            something breaks. Debugging goes beyond fixing errors; it involves tracing issues to
            their root cause and improving the underlying logic to prevent them from recurring.
          </p>
          <p>
            Recent development experience includes building full-stack applications using
            JavaScript, React.js, Node.js, Express.js, and MySQL, with an emphasis on practical
            features and reliable backend systems.
          </p>
          <p>
            Previous experience includes developing applications using Python, Flask, and MySQL,
            focusing on database-driven workflows, data integrity, and structured backend logic.
          </p>
          <p>
            A strong interest in thoughtful database design, solving complex problems, and building
            backend logic that remains reliable as applications grow. The aim is to create software
            that feels simple to use but is carefully engineered underneath.
          </p>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>

    // <div className="relative w-full max-w-4xl mx-auto p-10 bg-gray-900 text-white rounded-lg">
    //   {/* Main content here */}
    //   <h2 className="text-3xl mb-6">My Portfolio</h2>
    //   <p>Your content goes here...</p>

    //   {/* The decorative thick borders */}
    //   <div
    //     className="absolute inset-0 pointer-events-none"
    //     style={{
    //       borderImage: `
    //     linear-gradient(to right, white 20%, transparent 20%, transparent 80%, white 80%) 1 /
    //     8px 0 8px 0 / 0 0 0 0 stretch
    //   `,
    //       borderStyle: "solid",
    //       borderWidth: "8px 0", // thick top + bottom only
    //       borderColor: "transparent", // fallback
    //     }}
    //   />
    // </div>
  );
}
