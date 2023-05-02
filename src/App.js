import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Experience from "./pages/Experience";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Home/>}/>*/}
                <Route path="/:uri" element={<Home/>}/>
                {/*<Route path="/profil/:id" element={<Home/>} />*/}
                <Route path="/:uri/Project/:project" element={<Project/>}/>
                <Route path="/:uri/Experience/:experience" element={<Experience/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
