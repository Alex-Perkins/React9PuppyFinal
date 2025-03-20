import React from 'react';

export default function HandleDelete({animalId}) {

    const deletePlayer = async (id) => {

        try {
            const response = await fetch(`/players/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Success');

            } else {
                throw new Error("Failed");
            }
        } catch (error) {
            console.log('Failed', error);

        }
    };

    return (
        <div>
            <button onClick={() => deletePlayer(animalId)}>Delete Player</button>
        </div>
    );
}