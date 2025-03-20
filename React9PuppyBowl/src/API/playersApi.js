//React Imports
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//Component Imports

//CreateAPI Component
export const playersApi = createApi({

    reducerPath: "playersApi",
    baseQuery: fetchBaseQuery({

        baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2803-PUPPIES-AP",

    }),
    tagTypes: ["player", "players"],

    endpoints: (build) => ({
        //Show all players endpoint
        playersList: build.query({
            query: () => "/players",
            provideTags: ["players"],
        }),

        //Display more information about a singular player endpoint
        playerById: build.query({
            query: (id) => `/players/${id}`,
            providesTags: ["player"],
        }),

        //Delete Button Endpoint
        deleteButton: build.mutation({
            query: (players_id) => ({
                url: `/players/${players_id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["player", "players"],
        }),
        
    }),
});

//Export Endpoints
export const {
    usePlayersListQuery,
    usePlayerByIdQuery,
    useDeleteButtonMutation,
} = playersApi;