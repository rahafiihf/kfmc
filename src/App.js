import React, { useState, Fragment } from 'react';
import Navbars from './Components/Nav/Navbar';
import Home from './Components/pages/Home';
import Header from './Components/Header';

function App() {
  const [language, setLanguage] = useState('ar'); 

  return (
    <Fragment>
      <div style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
        <Header setLanguage={setLanguage} language={language} />
        <Navbars language={language} />
        
        <Home language={language} /> 
      </div>
    </Fragment>
  );
}

export default App;
