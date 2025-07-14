import { Link } from "react-router-dom";

const problems = [
  { name: "OTP Builder", path: "/otp" },
  { name: "Chips Input", path: "/chips" },
  { name: "Accordion Card", path: "/accordion" },
  { name: "Progress Bar", path: "/progressBar" },
  { name: "Progress Bar Two", path: "/progressBartwo" },
  { name: "Todo List", path: "/todolist" },
  { name: "File explorer", path: "/fileExplorer" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-amber-600">
      <h1 className="text-3xl font-bold mb-6 text-black">
        Machine Coding Tracker
      </h1>
      <div className="flex gap-4">
        {problems.map((problem) => (
          <Link
            to={problem.path}
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
