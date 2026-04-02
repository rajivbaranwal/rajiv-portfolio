export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-center">
        Hi, I'm <span className="text-blue-500">Rajiv</span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-400 text-center max-w-2xl">
        MERN Stack Developer | AI Builder | Future SaaS Founder I build scalable
        web apps, AI systems, and automated cloud solutions.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl">
          View Projects
        </button>
        <button className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-gray-800">
          Contact Me
        </button>
      </div>
    </main>
  );
}
