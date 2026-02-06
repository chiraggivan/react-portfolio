export default function About() {
  return (
    <div className="d-flex">
      <div className="col-lg-2"></div>
      <div className="py-5 px-5 px-lg-0 col-lg-8">
        <h2 className="mb-4 border-bottom border-primary border-2 pb-2 fs-1">
          Yes, thats me !!
        </h2>
        <div
          className="fs-5"
          style={{ fontFamily: '"Cascadia Code", system-ui, sans-serif' }}
        >
          <p>
            I don’t enjoy building flashy apps. I enjoy building apps that{" "}
            <strong>work properly.</strong>
          </p>
          <p>
            I’m naturally drawn to understanding how data moves through a system
            and what happens when something goes wrong. I like tracing bugs back
            to their root cause, understanding why they occurred, and
            redesigning the flow so the same issue can’t happen again.
            Debugging, for me, is not just fixing errors — it’s learning how the
            system truly behaves.
          </p>
          <p>
            This mindset shaped the way I built my recipe, meal planning, and
            cost-calculation platform using Python, Flask, and MySQL. I focused
            heavily on data integrity, safe updates, and real-world workflows. I
            implemented snapshot-based dish history, dynamic unit conversion,
            stored procedures for multi-table operations, and backend
            validations that prevent inconsistent states before they occur.
          </p>
          <p>
            I enjoy thinking through edge cases, designing clean database
            relationships, and writing backend logic that remains reliable as
            features grow. My goal is to build software that feels simple to
            users but is deeply thought-through underneath.
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
