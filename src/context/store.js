import React, { useReducer } from "react";

import rootReducer from "./rootReducer";
import StateContext from "./stateContext";
import DispatchContext from "./dispatchContext";

export default function Store(props) {
  const initialState = {
    boundingBox: null,
    radiusMarker: null,
    //
    searchMethod: "EXTENTS",
    resultsPerPage: 50,
    userLocation: null,
    searchRadius: 3,
    searchCenter: { lat: 48.80582620218145, lng: 2.1164958494489383 }, //paris, versailles,
    photos: null,
    filteredPhotos: null,
    mapPhotos: [],
    hiddenPhotos: [],
    blockedUsers: [],
    favorites: [],
    minUploadDate: null,
    maxUploadDate: null,
    minTakenDate: null,
    maxTakenDate: null
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}
