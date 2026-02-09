export default function About() {
  return (
    <div className="d-flex">
      <div className="col-lg-2"></div>
      <div className="py-5 px-3 mt-lg-5 px-lg-0 col-lg-8">
        <h2 className="mb-4 border-bottom border-primary border-2 pb-2 fs-1">
          Yes, that's me !!
        </h2>
        <div
          className="fs-5"
          style={{ fontFamily: '"Cascadia Code", system-ui, sans-serif' }}
        >
          <p>
            Enjoy building applications that work correctly, reliably, and
            predictably - not just ones that look impressive.
          </p>
          <p>
            Naturally drawn to understanding how data flows through a system and
            what truly happens when something breaks. Debugging is not just
            about fixing errors, but about tracing issues to their root cause
            and redesigning the flow so the same problem cannot occur again.
            It’s a way of learning how the system actually behaves under real
            conditions.
          </p>
          <p>
            This mindset shaped the development of a recipe, meal planning, and
            cost-calculation platform built with Python, Flask, and MySQL.
            Strong emphasis was placed on data integrity, safe updates, and
            real-world workflows. The system includes snapshot-based dish
            history, dynamic unit conversion, stored procedures for multi table
            operations, and backend validations that prevent inconsistent states
            before they occur.
          </p>
          <p>
            Enjoy thinking through edge cases, designing clean database
            relationships, and writing backend logic that remains reliable as
            features grow. The goal is to build software that feels simple to
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
