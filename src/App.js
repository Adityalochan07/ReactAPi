import React from 'react'
import GetNames from "./pages/GetNames";
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Par from './pages/Par';
import Price from './pages/Price'

export default function() {
  return (
   <>
  <Routes>
    <Route path="/" element={<GetNames/>}/>
    <Route path="/pages/Home" element={<Home/>}/>
    <Route path="/pages/Page1" element={<Page1/>}/>
    <Route path='/pages/Par' element={<Par/>}/>
    <Route path='/pages/Price' element={<Price/>}/>
  </Routes>

   </>
  )
}



 