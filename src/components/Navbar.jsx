
import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoReact } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { DiCss3Full } from 'react-icons/di';
import { BsMarkdown } from 'react-icons/bs';
import { VscJson } from 'react-icons/vsc';


const Navbar = ({ setActiveTab, activeTab }) => {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 text-gray-300 w-full h-10">
      <div className="mb-4 border-b bg-gray-800 dark:bg-gray-900 h-30 border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li className="mr-2 ml-8" role="presentation">
            <a
              to="#"
              onClick={() => setActiveTab('home')}
              className={`p-4 border-b-2 rounded-t-lg ${activeTab === 'home' ? 'text-white' : 'text-gray-300'
                } dark:text-gray-300 dark:hover:text-white flex items-center`}
            >
              <AiFillHtml5 size={18} className="mr-2 text-orange-600" /> Home.html
            </a>
          </li>
          <li className="mr-2" role="presentation">
            <a
              to="#"
              onClick={() => setActiveTab('about')}
              className={`p-4 border-b-2 border-transparent rounded-t-lg ${activeTab === 'about' ? 'text-white' : 'hover:text-gray-300 dark:hover:text-gray-300'
                } dark:hover:text-white flex items-center`}
            >
              <BiLogoReact size={18} className="mr-2 text-blue-500" /> About.jsx
            </a>
          </li>
          <li className="mr-2" role="presentation">
            <a
              to="#"
              onClick={() => setActiveTab('skills')}
              className={`p-4 border-b-2 border-transparent rounded-t-lg ${activeTab === 'skills' ? 'text-white' : 'hover:text-gray-300 dark:hover:text-gray-300'
                } dark:hover:text-white flex items-center`}
            >
              <VscJson size={18} className="mr-1 text-yellow-600" /> Skills.json
            </a>
          </li>
          <li className="mr-2" role="presentation">
            <a
              to="#"
              onClick={() => setActiveTab('projects')}
              className={`p-4 border-b-2 border-transparent rounded-t-lg ${activeTab === 'projects' ? 'text-white' : 'hover:text-gray-300 dark:hover:text-gray-300'
                } dark:hover:text-white flex items-center`}
            >
              <BiLogoJavascript size={18} className="mr-2 text-yellow-500" /> Projects.js
            </a>
          </li>
          <li className="mr-2" role="presentation">
            <a
              to="#"
              onClick={() => setActiveTab('contact')}
              className={`p-4 border-b-2 border-transparent rounded-t-lg ${activeTab === 'contact' ? 'text-white' : 'hover:text-gray-300 dark:hover:text-gray-300'
                } dark:hover:text-white flex items-center`}
            >
              <BsMarkdown size={18} className="mr-2 text-purple-500" /> Contact.md
            </a>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">

        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">

        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">

        </div>
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">

        </div>
      </div>
    </div>
  );
};

export default Navbar;
