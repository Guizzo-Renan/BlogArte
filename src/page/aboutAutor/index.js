import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import './main.css';

import { motion } from "framer-motion";


const About = () => {
  const { id } = useParams(); // Obtém o ID da rota
  const parsedId = parseInt(id); 

  console.log("id", parsedId)

  const [autor, setAutor] = useState(); // Defina autor como um objeto vazio

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://nodeexpressapi-2.onrender.com/autor/${parsedId}`, { timeout: 10000 }); // Use o ID da rota na URL da API
        setAutor(response.data.data[0]); // Ajuste para selecionar apenas o primeiro objeto
        console.log("resposta", response.data[0])
  
      } catch (error) {
        console.error("Erro ao obter os dados do autor:", error);
      }
    };
    fetchPost();
  }, [id]); // Executa novamente sempre que o ID da rota mudar

  return (
    <div className="about-container">
      {autor ? ( // Verifique se autor não é undefined ou null
        <motion.div className="about-a">
          <motion.img
            src={autor.imagemautoretrato}
            alt={autor.title}
            className="artist-image"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="about-content">
            <h1 className="artist-title">{autor.title}</h1>
            <p className="artist-text">{autor.descricao}</p>
            <Link to="/">
              <motion.button
                className="back-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Voltar
              </motion.button>
            </Link>
          </div>
        </motion.div>
      ) : (
        <p>Carregando...</p> // Mostrar uma mensagem de carregamento enquanto autor está undefined
      )}
    </div>
  );
};

export default About;