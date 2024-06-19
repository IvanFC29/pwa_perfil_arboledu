import React from 'react';
import BottomNav from './MenuInferior';
import '../css/MenuInferior.css';

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            {children}
            <BottomNav />
        </div>
    );
};

export default Layout;
