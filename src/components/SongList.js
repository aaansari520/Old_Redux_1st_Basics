import React, { Component } from "react";
import { connect } from "react-redux";
import SelectSong from "../actions/SelectSong";

class SongList extends Component {
  renderList() {
    // WE CAN NOT DIRECTLY CALL THE ACTION CREATOR FUNCTION
    // SelectSong() // NOT AT ALL WE SHOULD HAVE TO PASS THIS IN CONNECT FUNCT IMPORT IT IN THE COMPONENT WHRE U WANT TO USE IT AND THEN WE CALL IT LIKE THIS: this.props.SelectSong(song)
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.SelectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
          <b>{song.title === this.props.favoriteTitle && "Favourite!"}</b>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (store) => {
  console.log("Store...", store);
  console.log("Store...", store.songs.favoriteTitle);
  //   return store;
  return {
    songs: store.songs.songs,
    favoriteTitle: store.songs.favoriteTitle,
    SelectSong: SelectSong,
  };
};

export default connect(mapStateToProps, { SelectSong })(SongList);
