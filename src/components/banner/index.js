import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./main.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  // Função para carregar os dados dos posts da API
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://nodeexpressapi-2.onrender.com/posts');
      const data = await response.json();
      setSlides(data.data);
      console.log(data.data)
    } catch (error) {
      console.error("Erro ao obter os dados dos posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Executar apenas uma vez ao montar o componente

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };


  return (
    <>
      <div className="navbar">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`navbar-item ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleSlideChange(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {slides[index].title}
          </motion.div>
        ))}
      </div>

      <div className="banner-container">
        {slides.length > 0 && (
          <>
            <div className="banner-content">
              <motion.h1
                className="banner-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              {/*<motion.p
                className="banner-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
   >*/}
                {/*slides[currentSlide].descricao*/}
             {/**</motion.p> */} 
              <Link to={`/gallery/${slides[currentSlide].id}`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="banner-button"
                >
                  Ver mais
                </motion.button>
              </Link>
            </div>
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="banner-image"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Banner;