import { useParams } from "react-router-dom";
import { usePlayerByIdQuery } from "../API/playersApi.js";
//Component Imports
import HandleDelete from "./Delete.jsx";

//Player Detail Component
export default function PlayerClick(){
    const {animalId} = useParams();
    const { data, isLoading, error } = usePlayerByIdQuery(animalId);

console.log(animalId);
    //Loading/not loading
    if (isLoading) {
        return (

            <section>
                <h2>Loading player details...</h2>
            </section>

        );
    }

    if (error) {
        return (

            <section>
                <h2>Error: {error.message || "Could not load player details."}</h2>
            </section>

        );
    }

    //No Player found 
    if (!data) {
        return (
            <section>
                <h2>No player found {animalId}</h2>
            </section>
        );
    }
    console.log(data)

    //Render player details on click
    return (

        <div className="playerClick">

            <div className="playerDetails">
                <p class="details"><strong>Name:</strong> {data.data.player.name}</p>
                <img height="200px" width="150px" src={`${data.data.player.imageUrl}`}></img>
                <p class="details"><strong>Breed:</strong> {data.data.player.breed}</p>
                <p class="details"><strong>Status:</strong> {data.data.player.status}</p>
                <p class="details"><strong>Cute:</strong> YES ! </p>
                <HandleDelete animalId={animalId} />
            </div>
        </div>
    );

}
