import { Outlet } from "react-router-dom";

export default function ProblemLayout() {
  return (
    <div className="min-h-screen p-6">
      {/* Common layout: could add sidebar or header if needed */}
      <Outlet /> {/* This renders the matched child route */}
    </div>
  );
}