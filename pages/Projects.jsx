import React, { useState } from 'react'

const Projects = () => {
  const [state, setstate] = useState(`
1 import Projects from Projects
2  {
3      Projects = () => {
4
5            Google-keep-app: {
6                url: 'https://googlekeepop.netlify.app'
7            },
8            Gradientoo: {
9                url: 'https://gradientoo-app.vercel.app',
10               github: 'https://github.com/AsharAli999/Gradientoo'
11            },
12           Image-converter: {
13                url: 'https://image-converter-kappa.vercel.app',
14                github: 'https://github.com/AsharAli999/Image-converter'
15            },
16            Json-XML-converter: {
17                url: 'https://json-xml-converter.vercel.app'
18            },
19            Video-streaming-app: {
20            url: 'http://onlinemocks.com/'
21          }
22        }
23  }
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

export default Projects