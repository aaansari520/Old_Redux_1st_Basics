import React from "react";

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default SelectedSongReducer;
