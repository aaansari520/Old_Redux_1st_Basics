import { combineReducers } from "redux";

import SelectedSongReducer from "./SelectedSongReducer";
import SongsReducer from "./SongsReducer";

export default combineReducers({
  songs: SongsReducer,
  selectedSong: SelectedSongReducer,
});
