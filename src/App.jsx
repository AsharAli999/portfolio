// App.js
import React from 'react';
import Layout from '../pages/Layout';
import './index.css'
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <div>

      <Layout />
      <Analytics />
    </div>
  );
};

export default App;
