import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';

import "./main.css";

// Componente para um item dentro da categoria
const CategoryItem = ({ image, description, id }) => {
  return (
    <div className="category-item">
     <Link to={`/about/${id}`}>
      <motion.img
        src={image}
        alt="Item"
        className="category-item-image"
        whileHover={{ scale: 1.1 }} // Aumenta o tamanho da imagem ao passar o mouse sobre ela
        whileTap={{ scale: 0.9 }} // Diminui o tamanho da imagem ao clicar nela
      />
      </Link>
      <p className="category-item-description">
        {description}
      </p>
    </div>
  );
};

// Componente para a seção de categoria
const CategorySection = ({  id="1"}) => {
    return (
        <div >
          <div style={{  margin: '90px' }}>
            <h1>POSTS</h1>
          </div>
          <section className="category-section">
            <div className="category-section-content" style={{ marginLeft: '5%' }}>
              <div className="category-image-container">
              <Link to={`/autor/${id}`}>
                <motion.img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eSxqkMULmhB9KUI_zNXdecLQnv6-Pm4ECQ&usqp=CAU"
                  alt="Category"
                  className="category-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                </Link>
              </div>
              <div className="category-items">
            
                <CategoryItem
                id="2"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVE3Ogg8fH7MdmhaTTPuwrvqpm8pIGRZB8Vw&usqp=CAU"
                  description="Sisley nasceu em Paris, filho de pais ingleses, tendo estudado comércio em Londres, (1857-1861) para continuar o trabalho de seu pai, diretor de uma empresa de exportação de flores artificiais para a América do Sul. Porém em vez de estudar passava o tempo visitando museus e copiando esboços de Constable, Turner e Bonington. Quando voltou a Paris conseguiu autorização dos pais para entrar para a escola de Gleyre. No ateliê de Paris, Sisley conheceu Renoir, Bazille e Monet, com os quais passava horas pintando no bosque de Fontainebleau. Em 1877 participou da terceira exposição do grupo impressionista. "
                />
               
                
                   <CategoryItem
                   id="3"
                  image="https://i.ytimg.com/vi/6zNcNk2kIeM/maxresdefault.jpg"
                  description="Oscar-Claude Monet foi um pintor francês e o mais célebre entre os pintores impressionistas. O termo Impressionismo surgiu a partir de uma crítica a um dos primeiros quadros de Monet, 'Impressão, nascer do sol'"
                />
                
              </div>
            </div>
          </section>
        </div>
      );
      
};

export default CategorySection;