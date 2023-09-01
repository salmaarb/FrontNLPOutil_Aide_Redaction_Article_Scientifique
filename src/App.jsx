import React from 'react';
import Liste from '../src/components/Liste';
import Header from '../src/components/header'; // Assurez-vous que le chemin est correct
import GeneratorPage from '../src/components/GeneratorPage';

import Paraphrase from './components/Paraphrase';
import Recommend from './components/Recommend';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <div className="header-container">
          <Header />
        </div>
        <div>
          <Routes>
         

            <Route path="/" element={<Liste />} />

            <Route path="/generator" element={<GeneratorPage />} />
            <Route path="/paraphrase" element={<Paraphrase />} />
            <Route path="/recommend" element={<Recommend />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
