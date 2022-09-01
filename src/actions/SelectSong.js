import React from "react";

// Action Creator
const SelectSong = (song) => {
  // Return an Action
  return {
    type: "SELECTED_SONG",
    payload: song,
  };
};

export default SelectSong;
