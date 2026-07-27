import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Research from './components/Research';
import News from './components/News';
import FeaturedPublications from './components/FeaturedPublications';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AmbientLight from './components/AmbientLight';
import WorkDetailPage from './components/WorkDetailPage';

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Research />
      <News />
      <FeaturedPublications />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="page">
      {/* <AmbientLight /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<WorkDetailPage />} />
      </Routes>
    </div>
  );
}