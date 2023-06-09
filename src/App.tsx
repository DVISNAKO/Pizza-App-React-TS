import React from 'react';
import './App.css';
import {FC, useState} from 'react';
import AddPizzaForm from './components/add-pizza'
import DispayPizzas from './components/display-pizzas'
import Pizza from './models/Pizza';


const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) => 
    (pizza.id === newPizza.id ? newPizza : pizza)))
  }

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(newPizzasList);
  }

  console.log('pizzasList ', pizzasList );
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm
        addPizza={addPizza}
        />
        <DispayPizzas 
        pizzasList={pizzasList}
        deletePizza={deletePizza}
        updatePizza={updatePizza}
        />
      </div>
    </div>
  );
}

export default App;
