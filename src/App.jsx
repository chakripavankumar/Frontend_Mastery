import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ChipsInput from "./components/ChipsInput";
import AccordianCard from "./components/AccordianCard";
import ProgressBar from "./components/ProgressBar";
import ProgressBartwo from "./components/ProgressBar2";
import TodoList from "./components/TodoList";
import OTPInput from "./components/OtpBuilder";
import FileExplorer from "./components/FileExplorer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otp" element={<OTPInput />} />
        <Route path="/chips" element={<ChipsInput />} />
        <Route path="/accordion" element={<AccordianCard />} />
        <Route path="/progressBar" element={<ProgressBar />} />
        <Route path="/progressBartwo" element={<ProgressBartwo />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/fileExplorer" element={<FileExplorer />} />
      </Routes>
    </Router>
  );
}

export default App;
