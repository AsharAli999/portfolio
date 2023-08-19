import React, { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoReact } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { DiCss3Full } from 'react-icons/di';
import { AiFillFolder } from 'react-icons/ai';
import { VscJson } from 'react-icons/vsc';
import { FaPortrait } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import the Link component

const CollapsibleSidebar = () => {
  const [openMenus, setOpenMenus] = useState([]);

  const menuItems = [
    {
      label: 'Porfolio',
      icon: <FaPortrait size={20} className="mr-2 text-green-500" />,
      items: [
        { link: '/' }
      ],
    },
    {
      label: 'Pages',
      icon: <AiFillFolder size={20} className="mr-2 text-orange-400 flex-shrink-0" />,
      items: [
        { text: 'Home.html', link: '/', icon: <AiFillHtml5 size={18} className="mr-2 text-orange-500" /> },
        { text: 'About.jsx', link: '/about', icon: <BiLogoReact size={18} className="mr-2 text-blue-500" /> },
        { text: 'Skills.json', link: '/skills', icon: <VscJson size={18} className="mr-2 text-yellow-600" /> },
        { text: 'Projects.js', link: '/projects', icon: <BiLogoJavascript size={18} className="mr-2 text-yellow-500" /> },
        { text: 'Contact.css', link: '/contact', icon: <DiCss3Full size={18} className="mr-2 text-blue-500" /> },
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
          <div className="flex items-center space-x-2">
            <FaCode className="text-blue-400" />
            <span className="text-lg font-semibold">VS Code</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="group">
              <div
                className={`px-4 py-2 text-sm font-semibold w-full text-left ${openMenus.includes(index)
                  ? 'bg-gray-700 text-blue-400'
                  : 'hover:bg-gray-700'
                  }`}
                onClick={() => toggleMenu(index)}
              >
                <div className="flex items-center">
                  <span>{menuItem.icon}</span> <span>{menuItem.label}</span>
                </div>
              </div>
              {openMenus.includes(index) && (
                <div className="pl-8">
                  {menuItem.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.link}
                      className="py-1 text-sm text-gray-400 hover:text-white flex items-center"
                    >
                      {item.icon} {item.text}
                    </Link>
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
