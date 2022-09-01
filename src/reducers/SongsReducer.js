import React from "react";

const SongsReducer = () => {
  return {
    songs: [
      { title: "Hum Appke hai kaun", duration: "5:30" },
      { title: "Dill ne mere", duration: "4:30" },
      { title: "Chura ke dill mera", duration: "6:30" },
      { title: "Merri bhegi bhegi si ", duration: "3:30" },
      { title: "Maine poocha chand se", duration: "4:50" },
    ],
    favoriteTitle: "Chura ke dill mera",
  };
};

export default SongsReducer;
