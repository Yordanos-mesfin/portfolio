import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        fullScreen: { enable: true },
        background: { color: "#0f172a" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
        },
        particles: {
          color: { value: "#4f46e5" },
          links: { color: "#7c3aed", distance: 150, enable: true, opacity: 0.2 },
          collisions: { enable: true },
          move: { enable: true, speed: 2 },
          number: { value: 50 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
