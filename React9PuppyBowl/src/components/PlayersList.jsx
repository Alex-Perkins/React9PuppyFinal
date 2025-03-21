//React Imports
import { Link } from "react-router-dom";
//Component Imports
import { usePlayersListQuery, usePlayerByIdQuery } from "../API/playersApi";
import Searchbar from "./SearchBar";
import { useState } from "react";
import HandleDelete from "./Delete";
import CreateNewPlayer from "./CreatePlayer";

//Component that renders all the players onto the page
export default function PlayersList() {

  const { data, error, isLoading } = usePlayersListQuery();


  //Is or isnt loading screen
  if (isLoading) {
    return (

      <section>
        <h2>App Loading...</h2>
      </section>

    );
  }

  if (error) {
    return (

      <section>
        <h2>Try Again Later</h2>
      </section>

    );
  }

  // const playersToDisplay =
  //   searchParameter !== "" && data.players
  //     ? data.players.filter(
  //       (players) =>
  //         player.name.toUpperCase().includes(searchParameter.toUpperCase()) ||
  //       players.breed.toLowerCase().includes(searchParameter.toLowerCase())
  //     )
  //     : data.players;
  //Create cards that the information in the API will populate
  return (

    <div className="playersList">

<CreateNewPlayer />

      {data.data.players.map((playersObject) => (

        <div class="card"
          key={playersObject.id}>

          <h2 class="playerName"> {playersObject.name} </h2>
          <img class="playerImg" src={`${playersObject.imageUrl}`}></img>
          <Link class="detailsBtn" to={`/players/${playersObject.id}`}> More cute information </Link>
          <></>
         
        </div>

      ))}
      <div>
      </div>

    </div>


  )
};