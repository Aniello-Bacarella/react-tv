import { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */

export default function ShowDetails({ selectedShow }) {
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!selectedShow) {
    return (
      <section className="details">
        <h2>Show Details</h2>
        <p>Select a show to watch.</p>
      </section>
    );
  }
  return (
    <section className="details">
      <EpisodeList
        name={selectedShow.name}
        episodes={selectedShow.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      ></EpisodeList>
      <EpisodeDetails episode={selectedEpisode}></EpisodeDetails>
    </section>
  );
}
