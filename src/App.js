import React, { useState } from 'react';
import RestaurantList from './components/RestaurantList';
import RestaurantForm from './components/RestaurantForm';
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState([]); // Lista vazia inicial

  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, { ...restaurant, id: restaurants.length + 1 }]);
  };

  const editRestaurant = (id, updatedRestaurant) => {
    setRestaurants(restaurants.map(rest => (rest.id === id ? { ...updatedRestaurant, id } : rest)));
  };

  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter(rest => rest.id !== id));
  };

  return (
    <div className="App">
      <h1>Restaurantes para Visitar</h1>
      <RestaurantForm addRestaurant={addRestaurant} />
      <RestaurantList
        restaurants={restaurants}
        editRestaurant={editRestaurant}
        deleteRestaurant={deleteRestaurant}
      />
    </div>
  );
}

export default App;