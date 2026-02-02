import { ReactTyped as Typed } from "react-typed";


export default function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        position: "relative", // allows zIndex to work
        zIndex: 1,            // above particles, below navbar
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Hi, I'm Yordanos
      </h1>

      <Typed
        strings={[
          "Full-Stack Developer",
          "Mobile App Developer",
          "Designer",
          "Video Editor"
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
        style={{ fontSize: "1.3rem", marginBottom: "20px", opacity: 0.8 }}
      />

      <a
        href="#projects"
        style={{
          padding: "12px 25px",
          background: "linear-gradient(120deg, #4f46e5, #db2777)",
          color: "white",
          textDecoration: "none",
          borderRadius: "25px",
          fontWeight: "bold",
        }}
      >
        View My Work
      </a>
    </section>
  );
}
