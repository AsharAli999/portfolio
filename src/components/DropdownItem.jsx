// DropdownItem.js
import React from 'react';

const DropdownItem = ({ label, items }) => {
  return (
    <div className="group relative">
      <button className="py-4 px-6 w-full text-left hover:bg-gray-800 focus:outline-none">
        {label}
      </button>
      {items && (
        <div className="absolute hidden group-hover:block bg-gray-700 mt-1 ml-16 w-48 z-10">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block py-2 px-4 hover:bg-gray-600"
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
