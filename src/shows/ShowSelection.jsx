import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="show">
      <a class="show">
        {shows.map((show) => (
          <li key={show.name} onClick={() => setSelectedShow(show)}>
            {show.name}
          </li>
        ))}
      </a>
    </nav>
  );
}
