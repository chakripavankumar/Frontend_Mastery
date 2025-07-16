// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProblemLayout from "./layout/ProblemLayout";
import problemRoutes from "./ProblemRoutes.jsx"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Parent route */}
        <Route path="/" element={<ProblemLayout />}>
          {problemRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 
