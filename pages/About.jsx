import React, { useState } from 'react'

const About = () => {
  const [state, setstate] = useState(`
1 import Info from 'info'
2
3    const About = () => {
4      return (
5        <div>
6  
7          <h1>Introduction</h1>
8  
9          <p>Hi, I am Ashar Ali. I am a Full Stack Web Developer with a passion for building
10              robust and engaging web applications. Proficient in React.js, Next.js, Node.js, 
11              Express.js, MongoDB, and Mongoose.</p>
12  
13         <h1>Education</h1>
14  
15         <p>COMSATS Institute of Information and Technology
16          Bachelor's degree, Computer Software Engineering
17          Feb 2020 - Feb 2024</p>
18  
20       </div>
21     )
22   }
23   export default About
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

export default About