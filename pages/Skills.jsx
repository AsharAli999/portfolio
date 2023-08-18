import React, { useState } from 'react'

const Skills = () => {
  const [state, setstate] = useState(`
1    const Skills =  {
2      "Markup":{
3         "html" : "Hyper Text Markup Language"
4       },
5      "Styling":{
6         "css": "Cascading Style Sheets",
7         "bootStrap": "Bootstrap",
8         "tailwindCSS": "Tailwind CSS"
9       },
10      "JavaScript":{
11        "js": "JavaScript",
12        "react": "React JS",
13         "next": "Next JS"
14         "node": "Node JS",
15         "express": "Express JS"
16       },
17      "Tools":{
18         "notion": "Notion",
19         "github": "Github",
20         "figma": "Figma",
21         "code": "VS Code"
22       }
23    }
  `);


  return (
    <div className="p-4 bg-white dark:bg-gray-900 shadow h-full">
      <p className='text-yellow-500 text-md'>
        <pre className="text-yellow-500 text-md whitespace-pre-line">
          {state}
        </pre>

      </p>
    </div>
  )
}

export default Skills