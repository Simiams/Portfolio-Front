import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Landing_PGE from "./pages/Landing_PGE";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Navigate to="/simonConvert" />}/>
                <Route path="/:uri" element={<Home/>}/>
                {/*<Route path="/profil/:id" element={<Home/>} />*/}
                <Route path="/:uri/Project/:project" element={<Project/>}/>
                <Route path="/:uri/Experience/:experience" element={<Experience/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
