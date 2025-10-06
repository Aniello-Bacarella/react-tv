import "./shows.css";

/** A navbar that allows users to choose between a list of shows */

function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="show">
      <ul>
        {shows.map((show) => (
          <li key={show.name}>
            <a
              href="#"
              className="show"
              onClick={(e) => {
                e.preventDefault();
                setSelectedShow(show);
              }}
            >
              {show.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ShowSelection;
