// src/pages/Home.jsx
import { Link } from "react-router-dom";
import problemRoutes from "../ProblemRoutes";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-500">
      <a
        href="https://github.com/chakripavankumar/Frontend_Mastry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="text-3xl font-bold mb-6 text-black hover:cursor-pointer underline underline-offset-2">
          Frontend Machine Coding Problems Tracker
        </h1>
      </a>

      <div className="flex flex-wrap gap-4 justify-center">
        {problemRoutes.map((problem) => (
          <Link
            to={`/${problem.path}`}
            key={problem.name}
            className="px-6 py-2 bg-gray-800 text-blue-400 rounded hover:bg-amber-50"
          >
            {problem.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
