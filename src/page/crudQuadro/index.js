import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css'; // Arquivo CSS para estilização

const SquareComponent = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ title: '', image: '', descricao: '', autor_id: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://nodeexpressapi-2.onrender.com/quadros');
      setData(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = async () => {
    try {
      await axios.post('https://nodeexpressapi-2.onrender.com/quadros', formData);
      fetchData();
      setFormData({ title: '', image: '', descricao: '', autor_id: '' });
    } catch (error) {
      console.error('Erro ao adicionar:', error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const itemToEdit = data.find(item => item.id === id);
      setFormData({
        id: itemToEdit.id,
        title: itemToEdit.title,
        image: itemToEdit.image,
        descricao: itemToEdit.descricao,
        autor_id: itemToEdit.autor_id
      });
    } catch (error) {
      console.error('Erro ao editar:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://nodeexpressapi-2.onrender.com/quadros/${formData.id}`, formData);
      fetchData();
      setFormData({ title: '', image: '', descricao: '', autor_id: '' });
    } catch (error) {
      console.error('Erro ao atualizar:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://nodeexpressapi-2.onrender.com/quadros/${id}`);
      fetchData();
    } catch (error) {
      console.error('Erro ao excluir:', error);
    }
  };

  return (
    <div className="square-container">
      <h2>CRUD Component</h2>
      <div className="inputs-container">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Imagem"
          value={formData.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={formData.descricao}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="autor_id"
          placeholder="ID do Autor"
          value={formData.autor_id}
          onChange={handleInputChange}
        />
      </div>
      <div className="buttons-container">
        <button className="crud-button" onClick={handleAdd}>Adicionar</button>
        <button className="crud-button" onClick={handleUpdate}>Salvar</button>
      </div>
      <div>
        <h3>Dados:</h3>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.id} - {item.title} - 
              <button onClick={() => handleEdit(item.id)}>Editar</button>
              <button onClick={() => handleDelete(item.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SquareComponent;