export default function Projects() {
  const projects = [
    {
      title: "Apps Grade 6 Mobile App",
      desc: "Android app built with Java for Grade 6 learning.",
    },
    {
      title: "Gbrena Care Mobile App",
      desc: "Healthcare mobile application built with Java.",
    },
    {
      title: "E-commerce Website",
      desc: "Built using HTML, CSS, JavaScript, and PHP.",
    },
  ];

  return (
    <section id="projects" style={{ padding: "90px 20px" }}>
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "rgba(255,255,255,0.08)",
          padding: "30px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 20px rgba(79,70,229,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>My Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {projects.map((proj) => (
            <div
              key={proj.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
