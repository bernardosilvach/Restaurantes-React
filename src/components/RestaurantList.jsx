import React, { useState } from 'react';

function RestaurantList({ restaurants, editRestaurant, deleteRestaurant }) {
  const [editingId, setEditingId] = useState(null);
  const [editedRestaurant, setEditedRestaurant] = useState({
    name: '',
    address: '',
    cuisine: '',
    hours: ''
  });

  const startEditing = (restaurant) => {
    setEditingId(restaurant.id);
    setEditedRestaurant(restaurant);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedRestaurant((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editRestaurant(editingId, editedRestaurant);
    setEditingId(null);
    setEditedRestaurant({ name: '', address: '', cuisine: '', hours: '' });
  };

  return (
    <div>
      <h2>Restaurantes</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {editingId === restaurant.id ? (
              <form onSubmit={handleEditSubmit} className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={editedRestaurant.name}
                  onChange={handleEditChange}
                />
                <input
                  type="text"
                  name="address"
                  value={editedRestaurant.address}
                  onChange={handleEditChange}
                />
                <input
                  type="text"
                  name="cuisine"
                  value={editedRestaurant.cuisine}
                  onChange={handleEditChange}
                />
                <input
                  type="text"
                  name="hours"
                  value={editedRestaurant.hours}
                  onChange={handleEditChange}
                />
                <button type="submit">Salvar</button>
                <button type="button" onClick={() => setEditingId(null)}>Cancelar</button>
              </form>
            ) : (
              <>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address}</p>
                <p>{restaurant.cuisine}</p>
                <p>{restaurant.hours}</p>
                <button onClick={() => startEditing(restaurant)}>Editar</button>
                <button onClick={() => deleteRestaurant(restaurant.id)}>Deletar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;