import "./shows.css";

/** Allows users to browse through the episodes of the given show */

export default function ShowDetails({ selectedShow }) {
  const [selectedEpisode] = useState(selectedShow);
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
      <h2>
        <EpisodeList
          name={selectedShow.name}
          episodes={selectedShow.episodes}
          selectedEpisode={selectedShow.selectedEpisode}
          setSelectedEpisode={selectedShow.setSelectedEpisode}
        ></EpisodeList>
        <EpisodeDetails episode={selectedShow.selectedEpisode}></EpisodeDetails>
      </h2>
    </section>
  );
}
