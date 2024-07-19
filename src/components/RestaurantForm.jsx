import React, { useState } from 'react';

function RestaurantForm({ addRestaurant }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant({ name, address, cuisine, hours });
    setName('');
    setAddress('');
    setCuisine('');
    setHours('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Restaurante</h2>
      <div>
        <label>Nome</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Endereço</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div>
        <label>Especialidade</label>
        <input value={cuisine} onChange={(e) => setCuisine(e.target.value)} required />
      </div>
      <div>
        <label>Horário de Funcionamento</label>
        <input value={hours} onChange={(e) => setHours(e.target.value)} required />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default RestaurantForm;