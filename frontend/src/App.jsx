import { useState } from "react";

import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";
import AddQuestion from "./components/AddQuestion";
import ViewQuestions from "./components/ViewQuestions";

function App() {

  const [page, setPage] = useState("quiz");

  return (

    <div className="min-h-screen bg-[#F5F1E8]">

      <Navbar setPage={setPage} />

      <div className="flex justify-center py-10">

        {page === "quiz" && <Quiz />}

        {page === "leaderboard" && <Leaderboard />}

        {page === "add" && <AddQuestion />}

        {page === "questions" && <ViewQuestions />}

      </div>

    </div>

  );

}

export default App;