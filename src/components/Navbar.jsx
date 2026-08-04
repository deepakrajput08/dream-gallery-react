const Navbar = () => {
  return (
  <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-wide">
            📸 Dream Gallery
          </h1>

          <button
            onClick={() =>
              document.getElementById("gallery").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            Explore Gallery
          </button>
        </div>
      </nav>
  );
};

export default Navbar;