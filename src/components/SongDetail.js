import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  console.log(" props from SongDetail", props);
  return (
    <div>
      <h3>Details for : </h3>
      <p>{props.song ? props.song.title : ""}</p>
      <p>{props.song ? props.song.duration : ""}</p>
    </div>
  );
};

const mapStateToProps = (store) => {
  console.log("from SongDetail", store);
  return {
    song: store.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
