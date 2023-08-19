import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from '../src/components/Sidebar';
import CollapsibleSidebar from '../src/components/CollapsibleSidebar';
import Navbar from '../src/components/Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './index.css'

const Layout = () => {
  const [activeTab, setActiveTab] = useState('home'); // 'home' is the default active tab

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <CollapsibleSidebar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="flex flex-col w-full">
          <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
          <div className="flex-1 bg-gray-100 dark:bg-gray-900">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
