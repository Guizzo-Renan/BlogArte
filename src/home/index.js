import React from 'react';

import Parallax from '../components/paralax';
import Banner from '../components/banner';
import CategorySection from '../components/category';
import Footer from '../components/foolter';

import { Link } from "react-router-dom";

import imageData from '../data';

import './main.css';

const Home = () => {
    return (<>
      {/* {adm && (*/}
        <div className="admin-buttons">
            <Link to="/crudQuadro"><button>Adm Quadro</button></Link>
            <Link to="/crudAutor"><button>Adm Autor</button></Link>
        </div>
       {/* )*/}

        <div className="parallax-container">
            <Banner/>
            <CategorySection/>
            <Parallax imageData={imageData} /> 
            <Footer/>
        </div>
      </>
    );
  };
  
  export default Home;
  