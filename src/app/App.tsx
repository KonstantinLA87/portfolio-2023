import { Navbar } from '../widgets/Navbar';
import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { SkillsPage } from 'pages/SkillsPage';
import { AboutPage } from 'pages/AboutPage';
import { Loader } from 'shared/ui/Loader/Loader';
import { ContactsPage } from 'pages/ContactsPage';

function App() {

  return (
      <div className="App app_dark_theme">
        <Suspense fallback="">
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </Suspense>
        </Suspense>
      </div>
  );
}

export default App;
