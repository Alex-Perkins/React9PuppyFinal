//React Imports

import { useState } from "react"

//Component Imports
import { useCreatePlayerMutation } from "../API/playersApi";

export default function CreateNewPlayer() {

    const [name, setName] = useState("");
    const [breed, setBreed] = useState("")

    const [createPlayerMutation] = useCreatePlayerMutation();

    const createPlayer = async (e, body) => {
        e.preventDefault()
        createPlayerMutation(body);
        setName("");
        setBreed("");
    }

    return (
        <div>
            <h2> Create New Player </h2>
            <form>

                <label class="Main">
                    Name:
                    <input
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)}
                    />
                </label>

                <label class="Main">
                    Breed:
                    <input
                        value={breed}
                        onChange={(e) =>
                            setBreed(e.target.value)}
                    />
                </label>

                <button onClick={(e) => createPlayer(e, { name, breed })}> Create Player </button>

            </form>
        </div>
    )
}