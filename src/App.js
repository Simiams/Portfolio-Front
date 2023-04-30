import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Experience from "./pages/Experience";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Project/:project" element={<Project/>}/>
                <Route path="Experience/:experience" element={<Experience/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App; 
