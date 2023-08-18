import React, { useState } from 'react'

const Contact = () => {
  const [state, setstate] = useState(`
1
2     .mail {
3        email: asherali1001@gmail.com;
4      } 
5
6     .social {
7        linkedIn : @asharali999;
8        github : @AsharAli999;
9      }
10
11    #cell {
12        number : 0322-9282899;
13     }
14
15    .productivity : {
16        product-Hunt : @ashar_ali3
17        dev-io : @asharali999
18     }
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

export default Contact