import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=12`,
      );
      setUserdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white">
      <Navbar />
      {/* Hero */}

      <section className="text-center py-16 px-5">
        <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          Beautiful Photography
        </h1>

        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
          Discover stunning images from the Picsum API with a modern gallery
          experience.
        </p>
        <div className="flex justify-center gap-5 mt-10">
          <button
            onClick={() =>
              document.getElementById("gallery").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50"
          >
            Explore Gallery
          </button>

          <button
            onClick={() => setPage(Math.floor(Math.random() * 20) + 1)}
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Random Images
          </button>
        </div>
      </section>

      {/* Gallery */}

      <div
        id="gallery"
        className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 pb-14"
      >
        {userdata.map((e) => (
          <div
            key={e.id}
            className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition duration-500 shadow-xl hover:-translate-y-2"
          >
            <div className="overflow-hidden relative">
             
<img
  src={e.download_url}
  alt={e.author}
  onError={(event) => {
    event.currentTarget.src =
      "https://placehold.co/600x400/1e293b/ffffff?text=Image+Unavailable";
  }}
  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
/>


              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-between p-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  📷 {e.author}
                </span>

                <span className="text-red-400 text-xl">❤️</span>
              </div>
            </div>

            <div className="p-5">
              <h2 className="font-bold text-xl truncate">{e.author}</h2>

              <p className="text-gray-400 text-sm mt-2">
                High quality landscape photography.
              </p>

              <div className="flex gap-3 mt-5">
                <a
                  href={e.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
                >
                  View
                </a>

                <a
                  href={e.download_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 rounded-xl bg-pink-500 hover:bg-pink-600 transition font-semibold"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div className="flex justify-center gap-5 pb-12">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            page === 1
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          ← Previous
        </button>

        <div className="flex items-center font-bold text-xl">Page {page}</div>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 font-semibold transition"
        >
          Next →
        </button>
      </div>

      {/* Footer */}

      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        Made By Deepak❤️ using React + Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
