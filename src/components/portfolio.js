export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white text-center px-4"
    >
      {/* Hero text */}
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Yordanos  Mesfin</h1>
        <p className="text-xl md:text-2xl mb-6">
          Full-Stack Developer | Mobile App Developer | Designer | Video Editor
        </p>

        {/* View My Work button */}
        <a
          href="#projects"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
