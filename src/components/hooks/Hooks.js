import React, { useState } from "react";
import "./hooks.css";
import Person from "../Person";

function Hooks() {
  //const click={0:"click to show profile",1:"click to hide profile"};
  const [shows, setShows] = useState(0);
  //var x;
  return (
    <div>
      <button
        className="btn"
        onClick={(shows) => (shows = 0) ? setShows(shows == 1) : setShows(shows == 0)}>
        click and see
      </button>
      {shows ? <Person /> : <div>"click to see the profile"</div>}
    </div>
  );
}

export default Hooks;
// {(shows) =>
//     (shows = 0) ? setShows(shows == 1) : setShows(shows == 0)
//   }
//{shows ? <Person /> : "click to see the profile"}
