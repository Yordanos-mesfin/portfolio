export default function Skills() {
  const skills = [
    "Java (Android)",
    "Kotlin",
    "React",
    "Flutter",
    "PHP",
    "Python",
    "Node.js",
    "HTML & CSS",
    "JavaScript",
    "Graphic Design",
    "Video Editing"
  ];

  return (
    <section id="skills" style={{ padding: "90px 20px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "rgba(255,255,255,0.08)",
          padding: "30px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 20px rgba(219,39,119,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>My Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "12px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
