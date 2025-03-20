import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import store from '../Store'
//Component Imports
import PlayersList from './components/PlayersList'
import PlayerClick from './components/PlayerClick'
import Searchbar from './components/SearchBar'
import './App.css'
import CreateNewPlayer from './components/CreatePlayer'

function App() {

    return (
        <div>

            <div class="stickyHeader">
                <Link to={{ pathname: "/players" }}> Home </Link>
                <Searchbar />
            </div>
            <div>
                <Routes>
                    <Route path='/players' element={<PlayersList />} />
                    <Route path='/players/:animalId' element={<PlayerClick />} />
                </Routes>


            </div>


        </div>
    )
}

//Exports
export default App
