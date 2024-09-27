import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Tour from "./pages/Tour.jsx";
import Exhibits from "./pages/Exhibits.jsx";
import Veterans from "./pages/Veterans.jsx";
import Documents from "./pages/Documents.jsx";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/tour" element={<Tour />}></Route>
                    <Route path="/exhibits" element={<Exhibits />}></Route>
                    <Route path="/veterans" element={<Veterans />}></Route>
                    <Route path="/documents" element={<Documents />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
