import React from 'react';
import { BsFiles } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { LiaProductHunt } from 'react-icons/lia';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-gray-500 h-screen w-16">
      <a href="/" className="py-4 ">
        <BsFiles size={24} />
      </a>
      <a href="https://github.com/AsharAli999" className="py-4 ">
        <FiGithub size={24} />
      </a>
      <a href="https://www.producthunt.com/@ashar_ali3" className="py-4 ">
        <LiaProductHunt size={26} />
      </a>
      <a href="asherali1001@gmail.com" className="py-4 ">
        <AiOutlineMail size={24} />
      </a>
      <a href="https://www.linkedin.com/in/asharali999/" className="py-4 ">
        <CiLinkedin size={26} />
      </a>
      {/* Add more icons here */}
    </div>
  );
};

export default Sidebar;
