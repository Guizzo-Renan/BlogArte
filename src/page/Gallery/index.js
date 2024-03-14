import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './main.css'; // Estilização do componente
import axios from 'axios';

const ImageGallery = () => {
  const [Quadros, setQuadros] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isText, setIsText] = useState('');

  const { id } = useParams(); // Obtém o ID da rota

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`https://nodeexpressapi-2.onrender.com/quadrosAutor/${id}`, { timeout: 10000 });
      setQuadros(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao obter os dados dos posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleMouseEnter = (texto) => {
    setIsHovered(true);
    setIsText(texto);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
     {/* Botões para CRUD de Quadro e Autor */}
  

      <div className='main'>
      
          <div className="image-gallery" onMouseEnter={() => handleMouseEnter(Quadros[0]?.title)} onMouseLeave={handleMouseLeave}>
            <div className={isHovered ? 'image-container blur' : 'image-container'}>
              <p className='text-overlay'>{isText}</p>
              <Link to={`/quadro/${Quadros[0]?.id}`}>
              <img src={Quadros[0]?.image} alt="Image 1" className="gallery-image" />
              </Link>
              <h6>{Quadros[0]?.id}</h6>
            </div>
          </div>
       

        {Quadros.slice(1, 4).map((item, index) => (
        
            <div className="image-gallery" onMouseEnter={() => handleMouseEnter(item.title)} onMouseLeave={handleMouseLeave}>
              <div className={isHovered ? 'image-container blur' : 'image-container'} >
              <Link to={`/quadro/${item.id}`} key={index}>
                <img src={item.image} alt={`Image ${index + 2}`} className="gallery-image" />
                </Link>
                <h6>{item.id}</h6>
              </div>
            </div>
          
        ))}
      </div>

      <div className='main'>
        {Quadros.slice(4).map((item, index) => (
        
            <div className="image-gallery" onMouseEnter={() => handleMouseEnter(item.title)} onMouseLeave={handleMouseLeave}>
              <div className={isHovered ? 'image-container blur' : 'image-container'}>
              <Link to={`/quadro/${item.id}`} key={index}>
                <img src={item.image} alt={`Image ${index + 5}`} className="gallery-image" />
                </Link>
                <h6>{item.id}</h6>
              </div>
            </div>
          
        ))}
      </div>
    </>
  );
};

export default ImageGallery;