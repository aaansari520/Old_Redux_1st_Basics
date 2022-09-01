import logo from "./logo.svg";
import "./App.css";
import { SelectSong } from "./actions";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

// const createPolicy = (name, amount) => {
//   return {
//     type: "CREATE_POLICY",
//     payload: {
//       name: name,
//       amount: amount,
//     },
//   };
// };
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
