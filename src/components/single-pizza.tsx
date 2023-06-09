import React, {FC, useState} from 'react';
import Pizza from '../models/Pizza';
import EditPizzaForm from './edit-pizzas';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

interface SinglePizzasProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizzas: FC<SinglePizzasProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const hangleToogleEdit = () => {
        setEdit(!edit);
    }

    const handelDelete = () => {
        deletePizza(pizza.id);
    }

    return (
        <div className="pizza">
        <img src={`/images/${pizza.img}`} alt={pizza.title}/>
        <h2>{pizza.title}</h2>
        <span>{pizza.price} $</span>

        <div className="pizza-controls">
        <AiFillEdit onClick={hangleToogleEdit}/>
        <AiFillDelete onClick={handelDelete}/>
        </div>

        {edit
        ? <EditPizzaForm 
            data={pizza}
            updatePizza={updatePizza}
            hangleToogleEdit={hangleToogleEdit}
        />: null}

        </div>
    )
}

export default SinglePizzas;