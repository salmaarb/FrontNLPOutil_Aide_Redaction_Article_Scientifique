import React from 'react';
import Liste from '../src/components/Liste';
import Header from '../src/components/header'; // Assurez-vous que le chemin est correct
import GeneratorPage from '../src/components/GeneratorPage';

import Paraphrase from './components/Paraphrase';
import Recommend from './components/Recommend';
import SignIn from './components/SignIn';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="header-container">
                  <Header />
                </div>
                <Liste />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/paraphrase" element={<Paraphrase />} />
          <Route path="/recommend" element={<Recommend />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
