import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NatureIcon from '@mui/icons-material/Nature';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookIcon from '@mui/icons-material/BookRounded';
import '../css/MenuInferior.css';

const BottomNav = () => {
    const [valor, setValor] = useState(0);
    const navegacion = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if (location.pathname === '/mi-jardin') {
            setValor(0);
        } else if (location.pathname === '/consejos') {
            setValor(1);
        } else if (location.pathname === '/aprende') {
            setValor(2);
        }
    }, [location.pathname]);

    const handleNavChange = (event, newValue) => {
        setValor(newValue);
        if (newValue === 0) {
            navegacion('/mi-jardin');
        } else if (newValue === 1) {
            navegacion('/consejos');
        } else if (newValue === 2) {
            navegacion('/aprende');
        }
    };

    return (
        <BottomNavigation
            showLabels
            value={valor}
            onChange={handleNavChange}
            className="bottom-navigation"
        >
            <BottomNavigationAction label="Mi Jardin" icon={<NatureIcon />} />
            <BottomNavigationAction label="Consejos" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Aprende" icon={<BookIcon />} />
        </BottomNavigation>
    );
};

export default BottomNav;
