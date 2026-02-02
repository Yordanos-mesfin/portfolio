export default function Contact() {
  return (
    <section id="contact" style={{ padding: "90px 20px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "rgba(255,255,255,0.08)",
          padding: "30px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 20px rgba(219,39,119,0.2)",
          textAlign: "center",
        }}
      >
        <h2>Contact Me</h2>

        <p>Email: youremail@gmail.com</p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Yordanos-Mesfin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#93c5fd" }}
          >
            github.com/Yordanos-Mesfin
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/yordanos-mesfin-10473a375"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#93c5fd" }}
          >
            linkedin.com/in/yordanos-mesfin
          </a>
        </p>
      </div>
    </section>
  );
}
