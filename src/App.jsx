/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

function App() {
  const [showSelection] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState();
  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection
          shows={showSelection}
          setSelectedShow={setSelectedShow}
        ></ShowSelection>
      </header>
      <main>
        <ShowDetails show={selectedShow}></ShowDetails>
      </main>
    </>
  );
}

export default App;
