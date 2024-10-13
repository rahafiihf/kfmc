import React from 'react';
import './Header.css';

const Header = ({ language, setLanguage }) => {
    return (
        <div className="header">
            <a href="http://localhost:3000/login.html"> 
                <button className="login-btn">
                    {language === 'ar' ? 'تسجيل دخول' : 'Login'}
                </button>
            </a>
            <div className="header-buttons">
                <button className="language-btn" onClick={() => setLanguage('ar')}>ع</button>
                <button className="languageA-btn" onClick={() => setLanguage('en')}>En</button>
            </div>
        </div>
    );
};

export default Header;
