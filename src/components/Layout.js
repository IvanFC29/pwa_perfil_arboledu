import React from 'react';
import BottomNav from './MenuInferior';
import '../css/MenuInferior.css';

const Layout = ({ children }) => {
    console.log("Layout renderizado");

    return (
        <div className="app-layout">
            {children}
            <BottomNav />
        </div>
    );
};

export default Layout;
