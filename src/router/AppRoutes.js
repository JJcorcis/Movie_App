import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Login } from '../pages';
import { MovieRoutes } from './MovieRoutes';

export const AppRoutes = () => {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/*" element={<MovieRoutes/>}/>
      </Routes>
    </React.Fragment>
  )
}
