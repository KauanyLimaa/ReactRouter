import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/index.jsx'; 
import Login from './pages/Login/index.jsx';



const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    );
};

export default AppRouter;

