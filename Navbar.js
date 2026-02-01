import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: scrolled ? "10px 20px" : "20px 20px",
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        color: "white",
        boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.3)" : "none",
        transition: "all 0.3s",
        zIndex: 100, // always on top of particles
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
     
        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
          <a href="#skills" style={{ color: "white", textDecoration: "none" }}>Skills</a>
          <a href="#projects" style={{ color: "white", textDecoration: "none" }}>Projects</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
