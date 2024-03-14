import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Gallery from '../page/Gallery'; 
import Home from '../home';

import AboutAutor from '../page/aboutAutor';
import AboutQuadro from '../page/aboutQuadro';

import CrudQuadra from '../page/crudQuadro';
import CrudAutor from '../page/crudAutor';



const RoutesComponent = () => {

  return (
    <div>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/gallery/:id" element={<Gallery />} />

    <Route path="/autor/:id" element={< AboutAutor/>} />

    <Route path="/quadro/:id" element={< AboutQuadro/>} />

    <Route path="/crudQuadro" element={< CrudQuadra />} />

    <Route path="/crudAutor" element={< CrudAutor />} />

  </Routes>
</BrowserRouter>
     
    </div>
  );
};

export default RoutesComponent;