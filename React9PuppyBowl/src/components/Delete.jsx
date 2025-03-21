import React from 'react';
import { useDeleteButtonMutation } from '../API/playersApi';

export default function HandleDelete({ animalId }) {
    const [deletePlayerMutation, result] = useDeleteButtonMutation();
    console.log(result);
    const deletePlayer = async (id) => {
        deletePlayerMutation(id);

    }
    return (
        <div>
            <button onClick={() => deletePlayer(animalId)}>Delete Player</button>
        </div>
    );
}