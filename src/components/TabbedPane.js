import React from "react";
//Para las pestañas
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MiJardin from './MiJardin';
import Recordatorios from './Recordatorios';

function TabbedPane() {
    const [value, setValue] = React.useState(0);

    const cambioTab = (event, nuevoValor) => {
        setValue(nuevoValor);
    };

    return(
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={cambioTab} aria-label="tabs">
                <Tab label="Mis plantas" />
                <Tab label="Recordatorios" />
            </Tabs>
        <Box sx={{ p: 3 }}>
            {value === 0 && <MiJardin />}
            {value === 1 && <Recordatorios />}
        </Box>
    </Box>
    );
}

export default TabbedPane;