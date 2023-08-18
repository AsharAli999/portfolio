import React, { useState } from 'react';
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

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <CollapsibleSidebar />
      <div className="flex flex-col w-full">
        <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="flex-1 bg-gray-100 dark:bg-gray-900">
          {renderContent()}
        </div>
      </div>

    </div>
  );
};

export default Layout;
