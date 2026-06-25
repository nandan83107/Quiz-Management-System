function Navbar({ setPage }) {
  return (
    <nav className="bg-[#4A6FA5] shadow-md">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-bold text-white">
          Quiz Application
        </h1>

        <div className="flex gap-4">

          <button
            onClick={() => setPage("quiz")}
            className="bg-white text-[#4A6FA5] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Take Quiz
          </button>

          <button
            onClick={() => setPage("leaderboard")}
            className="bg-white text-[#4A6FA5] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Leaderboard
          </button>

          <button
            onClick={() => setPage("add")}
            className="bg-white text-[#4A6FA5] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Add Question
          </button>

          <button
            onClick={() => setPage("questions")}
            className="bg-white text-[#4A6FA5] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Questions
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;