import React, {FC} from 'react';
import SinglePizzas from './single-pizza';
import Pizza from '../models/Pizza';

interface DispayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void; 
    deletePizza: (id: number) => void;
}

const DispayPizzas: FC<DispayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) => {
    return (
        <div className="container">
            {pizzasList.map((pizza) => {
               return <SinglePizzas 
               deletePizza={deletePizza}
               updatePizza={updatePizza}
               key={pizza.id} pizza={pizza}/>; 
            })}
        </div>
    )
}

export default DispayPizzas;