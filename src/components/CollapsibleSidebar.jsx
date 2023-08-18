import React, { useState } from 'react';
import { FaCode, FaFile } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoReact } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { DiCss3Full } from 'react-icons/di';
import { BsMarkdown } from 'react-icons/bs';
import { AiFillFolder } from 'react-icons/ai';
import { VscJson } from 'react-icons/vsc';
import Home from '../../pages/Home';
import Navbar from './Navbar';

const CollapsibleSidebar = () => {
  const [openMenus, setOpenMenus] = useState([]);

  const menuItems = [
    {
      label: 'Projects',
      items: [
        { text: 'Project 1', link: '#' },
        { text: 'Project 2', link: '#' },
        { text: 'Project 3', link: '#' },
      ],
    },
    {
      label: 'Pages',
      icon: <AiFillFolder size={20} className="mr-2 text-orange-400 flex-shrink-0" />,
      items: [
        { text: 'Home.html', link: '#', icon: <AiFillHtml5 size={18} className="mr-2 text-orange-600" /> },
        { text: 'About.jsx', link: '#', icon: <BiLogoReact size={18} className="mr-2 text-blue-500" /> },
        { text: 'Skills.json', link: '#', icon: <VscJson size={18} className="mr-2 text-yellow-600" /> },
        { text: 'Projects.js', link: '#', icon: <BiLogoJavascript size={18} className="mr-2 text-yellow-500" /> },
        { text: 'Contact.css', link: '#', icon: <DiCss3Full size={18} className="mr-2 text-blue-500" /> },
      ],
    },
  ];

  const toggleMenu = (index) => {
    if (openMenus.includes(index)) {
      setOpenMenus(openMenus.filter((menuIndex) => menuIndex !== index));
    } else {
      setOpenMenus([...openMenus, index]);
    }
  };

  return (
    <div className='flex'>
      <div className="bg-gray-800 text-gray-300 w-64 h-screen flex flex-col">
        <div className="px-4 py-2 border-b border-gray-700">
          <button className="flex items-center space-x-2">
            <FaCode className="text-blue-400" />
            <span className="text-lg font-semibold">VS Code</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="group">
              <button
                className={`px-4 py-2 text-sm font-semibold w-full text-left ${openMenus.includes(index)
                  ? 'bg-gray-700 text-blue-400'
                  : 'hover:bg-gray-700'
                  }`}
                onClick={() => toggleMenu(index)}
              >
                <div className="flex items-center">
                  {menuItem.icon} <span>{menuItem.label}</span>
                </div>
              </button>
              {openMenus.includes(index) && (
                <div className="pl-8">
                  {menuItem.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.link}
                      className="py-1 text-sm text-gray-400 hover:text-white flex items-center"
                    >
                      {item.icon} {item.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CollapsibleSidebar;
