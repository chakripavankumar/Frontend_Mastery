
import OTPInput from "./components/OtpBuilder";
import ChipsInput from "./components/ChipsInput";
import AccordianCard from "./components/AccordianCard";
import ProgressBar from "./components/ProgressBar";
import ProgressBartwo from "./components/ProgressBar2";
import TodoList from "./components/TodoList";
import FileExplorer from "./components/FileExplorer";
import SearchBar from "./components/SearchBar";

const problemRoutes = [
  { name: "OTP Builder", path: "otp", element: <OTPInput /> },
  { name: "Chips Input", path: "chips", element: <ChipsInput /> },
  { name: "Accordion Card", path: "accordion", element: <AccordianCard /> },
  { name: "Progress Bar", path: "progressBar", element: <ProgressBar /> },
  { name: "Progress Bar Two", path: "progressBartwo", element: <ProgressBartwo /> },
  { name: "Todo List", path: "todolist", element: <TodoList /> },
  { name: "File Explorer", path: "fileExplorer", element: <FileExplorer /> },
   { name: "Auto complete", path: "searchbar", element: <SearchBar/> },
];

export default problemRoutes;