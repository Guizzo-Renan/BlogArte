import React from "react";
import { motion } from "framer-motion";
import "./main.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-navigation">
            <img src=""/>
          <motion.a
            href="#about"
            className="footer-nav-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="https://cdn-icons-png.flaticon.com/256/1384/1384886.png" style={{ width: "25px", height:"25px" }}/>
            instagram
          </motion.a>
          <motion.a
            href="#services"
            className="footer-nav-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="https://www.ccs.ufpb.br/ccs/icons/redes-sociais/linkedin.png/@@images/image.png" style={{ width: "25px", height:"25px" }}/>
            linkedin
          </motion.a>
          <motion.a
            href="#contact"
            className="footer-nav-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieKfpLWxIJZGXslh9Zj05ykb3P_zU0dHUJQsVUJcdknc4-fS7zyjHIMfM30SGd52OS5w&usqp=CAU" style={{ width: "25px", height:"25px" }}/>
            Contato
          </motion.a>
        </div>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="footer-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Voltar ao topo
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
