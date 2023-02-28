import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/main-pages/Home/HomePage.js';
import ResourcesPage from './pages/main-pages/Resources/ResourcesPage.js';
import AboutPage from './pages/main-pages/About/AboutPage.js';
import SubmissionsPage from './pages/main-pages/Submissions/SubmissionsPage.js';
import ContactPage from './pages/main-pages/Contact/ContactPage.js';
import { createBrowserHistory } from 'history';
import Venomous from './pages/feature-pages/Venomous/Venomous';
import Fragile from './pages/feature-pages/Fragile/Fragile.js';
import Worthy from './pages/feature-pages/Worthy/Worthy.js';
import Solidarity from './pages/feature-pages/Solidarity/Solidarity.js';
import Women from './pages/feature-pages/phenomenally-women/Women.js';
import Fluid from './pages/feature-pages/Fluid/Fluid.js';
import FakeIslands from './pages/feature-pages/Fake-Islands/Fake-Island.js';
import TheMother from './pages/feature-pages/The-Mother/TheMother.js';
import MyChoice from './pages/feature-pages/My-Choice/MyChoice.js';
import Racism from './pages/resources-pages/Racism/Racism.js';

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <div style={{ minHeight: "100vh" }}>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/submissions" element={<SubmissionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/venomous" element={<Venomous />} />
        <Route path="/fragile" element={<Fragile />} />
        <Route path="/worthy" element={<Worthy />} />
        <Route path="/solidarity" element={<Solidarity />} />
        <Route path="/women" element={<Women />} />
        <Route path="/fluid" element={<Fluid />} />
        <Route path="/fake-islands" element={<FakeIslands />} />
        <Route path="/the-mother" element={<TheMother />} />
        <Route path="/my-choice" element={<MyChoice />} />
        <Route path="/racism" element={<Racism />} />








        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
