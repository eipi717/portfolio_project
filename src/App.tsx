import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/pages/aboutMe/AboutMe';
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import ProjectDetails from "./components/pages/projects/ProjectDetails";
import ExperiencePage from "./components/pages/experiences/ExperiencesPage";
import Contacts from "./components/pages/contact/Contacts";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/experiences" element={<ExperiencePage />} />
                <Route path="/projects/" element={<ProjectsPage />} />
                <Route path="/projects/:projectId" element={<ProjectDetails />} />
                <Route path="/contact" element={<Contacts />} />
            </Routes>
        </Router>
    );
}

export default App;